# Generated by Django 4.0.8 on 2023-10-01 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0005_add_teacher_details_is_head_of_department_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='add_teacher_details',
            name='gender',
            field=models.CharField(default='None', max_length=10),
        ),
        migrations.AlterField(
            model_name='admin_details',
            name='last_name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='admin_details',
            name='middle_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
