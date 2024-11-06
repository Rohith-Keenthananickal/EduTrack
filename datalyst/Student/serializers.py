from rest_framework import serializers
from .models import Student
from Department.models import Department

class StudentOverview(serializers.ModelSerializer):
    student_count = serializers.IntegerField()

    class Meta:
        model = Department
        fields = ['department_name', 'student_count']