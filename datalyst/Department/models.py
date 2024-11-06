from django.db import models

class Department(models.Model):
    department_name = models.CharField(max_length=100,null=False)
    category = models.CharField(max_length=100,null=True)

    def __str__(self):
        return self.department_name


class Seat(models.Model):
    department=models.ForeignKey("Department.Department",on_delete=models.CASCADE)
    total_seat = models.IntegerField()
    booked_seat = models.IntegerField()
    available_seat = models.IntegerField()

    def __str__(self):
        return self.department.department_name