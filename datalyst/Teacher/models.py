from django.db import models


class Teacher_Login(models.Model):
    teacher_id=models.ForeignKey("Admin.Add_Teacher_Details",on_delete=models.CASCADE)
    email=models.EmailField(max_length=100)
    password=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Teacher Login"
        db_table = 'Teacher Login'


    @property
    def name(self):
        return self.teacher_id.first_name
    
    def __str__(self):
        return self.teacher_id.first_name