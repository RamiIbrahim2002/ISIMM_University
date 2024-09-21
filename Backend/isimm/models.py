

from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):

    # custom manager it return only the events
    class EventObject(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(is_event=True)

    title = models.CharField(max_length=255)
    cover_image = models.ImageField(upload_to='images/', blank=True)
    image = models.ImageField(upload_to='images/', blank=True)
    description = models.TextField(blank=True)
    publish_date = models.DateField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    is_event = models.BooleanField(default=False)  
    objects = models.Manager() #default manager
    eventObject = EventObject() #custom manager
    class Meta:
        ordering =['-publish_date']

    
    
    def __str__(self):
        return self.title
    
    

class Club(models.Model):
    name = models.CharField(max_length=255)
    cover_image = models.ImageField(upload_to='images/', blank=True)
    logo = models.ImageField(upload_to='images/', blank=True)
    description = models.TextField()
    instagram_link = models.URLField(blank=True)
    facebook_link = models.URLField(blank=True)

    def __str__(self): 
        return self.name


class Department(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)  # Mark description as optional
    image_url = models.ImageField(upload_to='department_images/', blank=True, null=True)
    
    def __str__(self):
        return self.name
    
class Teacher(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255,default='N/A')    
    qualification = models.CharField(max_length=255)
    joining_date = models.DateTimeField(auto_now_add=True)
    contact_details = models.EmailField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.name

class Subject(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    #staff_id=models.ForeignKey(Teacher,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255,default='N/A')
    age = models.IntegerField()
    birthdate = models.DateField(default='2000-01-01')  # Choose a default value for birthdate
    email = models.EmailField()
    address = models.TextField(blank=True)
    enrolled_date = models.DateField(auto_now_add=True)
    picture = models.ImageField(upload_to='student_images/', blank=True, null=True)
    course = models.CharField(max_length=255, default='N/A')  # Choose a default value for course

    # Add more fields as needed

    def __str__(self):
        return self.first_name

   
