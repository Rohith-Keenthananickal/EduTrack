from django.db import models
import datetime

GENDER_CHOICES=[
        ("male","Male"),
        ("female","Female"),
        ("other","Other"),
    ]


class Student(models.Model):
    admno=models.IntegerField(null=False,unique=True)
    first_name=models.CharField(max_length=50,null=False)
    middle_name=models.CharField(max_length=50,null=False)
    last_name=models.CharField(max_length=50,null=False)
    gender=models.CharField(max_length=50,null=False,choices=GENDER_CHOICES)
    # date_of_birth=models.DateField(default=datetime.date)
    dob=models.CharField(max_length=50,null=True)
    email=models.EmailField(max_length=100,null=False)
    phone_number=models.CharField(max_length=15)
    address=models.CharField(max_length=100)
    rollno=models.IntegerField(blank=True)
    father_name=models.CharField(max_length=100)
    father_phone_number=models.CharField(max_length=20)
    father_occupation=models.CharField(max_length=100)
    mother_name=models.CharField(max_length=100)
    mother_phone_number=models.CharField(max_length=20)
    mother_occupation=models.CharField(max_length=100)
    sslc_percentage=models.FloatField(max_length=10)
    plus_two_percentage=models.FloatField(max_length=10)
    extracurricular_activities=models.CharField(max_length=200)
    register_number=models.CharField(max_length=100)
    department=models.ForeignKey("Department.Department",on_delete=models.CASCADE)
    semester=models.ForeignKey("Semester_Details.Semester",on_delete=models.CASCADE)
    is_approved=models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Student Details"

    def __str__(self):
        return self.first_name


class Student_login(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    email=models.EmailField(max_length=100,null=False)
    password=models.CharField(max_length=200,null=False)

    class Meta:
        verbose_name_plural = "Student Login"

    def __str__(self):
        return self.student.first_name



class Attendance(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    department=models.ForeignKey("Department.Department", on_delete=models.CASCADE)
    semester=models.ForeignKey("Semester_Details.Semester",on_delete=models.CASCADE)
    date=models.DateField(blank=True)
    status=models.BooleanField(default=True)
    hour_one=models.IntegerField(default=1)
    hour_two=models.IntegerField(default=1)
    hour_three=models.IntegerField(default=1)
    hour_four=models.IntegerField(default=1)
    hour_five=models.IntegerField(default=1)
    hour_six=models.IntegerField(default=1)

    class Meta:
        verbose_name_plural = "Attendance"

    def __str__(self):
        return self.student.first_name
    

class Exam(models.Model):
    department=models.ForeignKey("Department.Department", on_delete=models.CASCADE)
    semester=models.ForeignKey("Semester_Details.Semester",on_delete=models.CASCADE)
    exam_name=models.CharField(max_length=200)
    student=models.ForeignKey("Student.Student", on_delete=models.CASCADE)
    subject_one=models.CharField(max_length=200)
    subject_two=models.CharField(max_length=200)
    subject_three=models.CharField(max_length=200)
    subject_four=models.CharField(max_length=200)
    subject_five=models.CharField(max_length=200)
    subject_six=models.CharField(max_length=200)
    mark_one=models.IntegerField()
    mark_two=models.IntegerField()
    mark_three=models.IntegerField()
    mark_four=models.IntegerField()
    mark_five=models.IntegerField()
    mark_six=models.IntegerField()

    class Meta:
        verbose_name_plural = "Exam"

    def __str__(self):
        return self.student.first_name