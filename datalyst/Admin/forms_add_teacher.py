from django import forms
from django.db import models
from Department.models import Department

class Add_Teacher(forms.Form):
    first_name = forms.CharField(max_length=50,widget=forms.TextInput(attrs={'class': 'form-control items'}))
    middle_name = forms.CharField(max_length=50,required=False,widget=forms.TextInput(attrs={'class': 'form-control items'}))
    last_name = forms.CharField(max_length=50,widget=forms.TextInput(attrs={'class': 'form-control items'}))
    email = forms.EmailField(max_length=100,widget=forms.EmailInput(attrs={'class': 'form-control items'}))
    phone_number = forms.CharField(max_length=50,widget=forms.NumberInput(attrs={'class': 'form-control items'}))
    department=forms.ModelChoiceField(queryset=Department.objects.all())
    is_head_of_department=forms.BooleanField(required=False)
    password=forms.CharField(max_length=100,widget=forms.PasswordInput(attrs={'class': 'form-control items'}))
    confirm_password=forms.CharField(max_length=100,widget=forms.PasswordInput(attrs={'class': 'form-control items'}))