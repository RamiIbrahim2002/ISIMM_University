# Generated by Django 5.0 on 2024-02-27 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('isimm', '0012_department_subject_teacher'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('age', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('address', models.TextField(blank=True)),
                ('enrolled_date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]