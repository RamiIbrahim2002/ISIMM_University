# Generated by Django 5.0.2 on 2024-02-21 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('isimm', '0004_department_formation_matiere_enseignant_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='enseignant',
            name='is_head_of_department',
            field=models.BooleanField(default=False),
        ),
    ]
