from django.db import models


class Subjects(models.Model):
    department=models.ForeignKey("Department.Department",on_delete=models.CASCADE)
    semester = models.ForeignKey("Semester_Details.Semester",on_delete=models.CASCADE)
    subjects=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Subjects"

    def __str__(self):
        return self.department.department_name + " "+self.semester.semester_name + " "+self.subjects
    

class Timetable(models.Model):
    department=models.ForeignKey("Department.Department",on_delete=models.CASCADE)
    semester=models.ForeignKey("Semester_Details.Semester",on_delete=models.CASCADE)
    Monday=models.CharField(max_length=100)
    Tuesday=models.CharField(max_length=100)
    Wednesday=models.CharField(max_length=100)
    Thursday=models.CharField(max_length=100)
    Friday=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Timetable"

    def __str__(self):
        return self.department.department_name + " "+self.semester.semester_name
    