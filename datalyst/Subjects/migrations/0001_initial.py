# Generated by Django 4.1.5 on 2023-03-18 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Department', '0001_initial'),
        ('Semester_Details', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subjects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subjects', models.CharField(max_length=100)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Department.department')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Semester_Details.semester')),
            ],
            options={
                'verbose_name_plural': 'Subjects',
            },
        ),
    ]