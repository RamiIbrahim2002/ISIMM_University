# Generated by Django 5.0.2 on 2024-02-21 20:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('isimm', '0003_article_is_event'),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('email_department', models.EmailField(max_length=254)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Formation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('niveau', models.CharField(choices=[('license', 'License'), ('master', 'Master'), ('cycle', 'Cycle')], max_length=20)),
                ('license_type', models.CharField(blank=True, choices=[('science_info', 'Licence en Science Informatique'), ('EEA', 'Licence en EEA: Systèmes Embarqués (SE)'), ('maths_appliquees', 'Licence Mathématiques Appliquées')], max_length=100, null=True)),
                ('master_type', models.CharField(blank=True, choices=[('data_science', 'Master Professionnel: Data Science'), ('genie_logiciel', 'Master Professionnel en Génie Logiciel'), ('ingenierie_industrielle', 'Master Professionnel: Ingénierie en Instrumentation Industrielle'), ('genie_logiciel_recherche', 'Master de Recherche en Génie Logiciel'), ('microelectronique_instrumentation', 'Master de Recherche en Microélectronique et Instrumentation')], max_length=100, null=True)),
                ('cycle_ingenieur_type', models.CharField(blank=True, choices=[('electronique_microelectronique', 'Ingénieurs Électronique et Microélectronique'), ('informatique', 'Ingénieurs Informatique')], max_length=100, null=True)),
                ('cycle_preparatoire_type', models.CharField(blank=True, choices=[('integre', 'Cycle Préparatoire Intégré')], max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Matiere',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('lien', models.URLField(blank=True)),
                ('explication', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Enseignant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='enseignant_photos/')),
                ('cv', models.FileField(blank=True, null=True, upload_to='enseignant_cv/')),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='isimm.department')),
            ],
        ),
        migrations.AddField(
            model_name='department',
            name='chef_department',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='department_chef', to='isimm.enseignant'),
        ),
    ]