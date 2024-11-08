# Generated by Django 4.1.5 on 2023-03-26 18:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Department', '0001_initial'),
        ('Semester_Details', '0001_initial'),
        ('Subjects', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Timetable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Monday', models.CharField(max_length=100)),
                ('Tuesday', models.CharField(max_length=100)),
                ('Wednesday', models.CharField(max_length=100)),
                ('Thursday', models.CharField(max_length=100)),
                ('Friday', models.CharField(max_length=100)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Department.department')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Semester_Details.semester')),
            ],
            options={
                'verbose_name_plural': 'Timetable',
            },
        ),
    ]
