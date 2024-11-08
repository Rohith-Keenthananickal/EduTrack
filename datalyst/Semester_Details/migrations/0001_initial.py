# Generated by Django 4.1.5 on 2023-03-02 19:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Department', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('semester_name', models.CharField(max_length=100)),
                ('department_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Department.department')),
            ],
            options={
                'verbose_name_plural': 'Semester',
            },
        ),
    ]
