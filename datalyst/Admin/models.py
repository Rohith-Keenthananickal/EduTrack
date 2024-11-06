from django.db import models

class Admin_Details(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email=models.EmailField(max_length=100,unique=True)
    phone_number = models.CharField(max_length=100)
    password=models.CharField(max_length=200)

    def __str__(self):
        return self.first_name


class Add_Teacher_Details(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=50)
    department=models.ForeignKey("Department.Department",on_delete=models.CASCADE)
    is_head_of_department=models.BooleanField(default=False)
    

    class Meta:
        verbose_name_plural = "Teacher Details"
        db_table = 'Teacher Details'


    def __str__(self):
        return self.first_name+" "+self.last_name