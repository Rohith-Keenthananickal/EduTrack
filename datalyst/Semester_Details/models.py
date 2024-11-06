from django.db import models


class Semester(models.Model):
    department_id=models.ForeignKey("Department.Department",on_delete=models.CASCADE)
    semester_name=models.CharField(max_length=100,null=False)

    class Meta:
        verbose_name_plural = "Semester"

    @property
    def name(self):
        return self.department_id.department_name
    
    def __str__(self):
        return self.department_id.department_name + " "+self.semester_name 