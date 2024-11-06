# Generated by Django 4.1.5 on 2023-03-17 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Student', '0002_alter_student_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='dob',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='rollno',
            field=models.IntegerField(blank=True),
        ),
    ]