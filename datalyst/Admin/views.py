from django.shortcuts import render
from django.contrib.auth import authenticate, login as auth_login
from django.http import JsonResponse
from django.http.response import HttpResponse,HttpResponseRedirect
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json
from Admin.models import Admin_Details,Add_Teacher_Details
from Department.models import Department,Seat
from .forms_add_teacher import Add_Teacher
from Teacher.models import Teacher_Login



def admin_user(request):
    return render(request,"Admin_Login/index.html")


def add_admin(request):
    return render(request,"Admin_Login/add_admin.html")


def signup(request):
    fname=request.POST.get('fname')
    mname=request.POST.get('mname')
    lname=request.POST.get('lname')
    email=request.POST.get('email')
    phno=request.POST.get('phone')
    password=request.POST.get('password')

    if not Admin_Details.objects.filter(email=email).exists():
        Admin_Details.objects.create(email=email,first_name=fname,middle_name=mname,last_name=lname,phone_number=phno,password=password)
        response_data = {
            "status" : "success",
            "message" : "You Subscribed to our Demo Installation",
            "title" : "Successfully Registered"
        }
    else:
        response_data = {
            "status" : "error",
            "message" : "You are already Subscribed",
            "title" : "You are already a member. No need to register again." 
        }     
    # return HttpResponse(json.dumps(response_data),content_type="application/javascript")
    # return HttpResponseRedirect("/Admin_Login/index.html")
    return(HttpResponse("Success"))



def login(request):
    if request.method == "POST":
        email=request.POST.get('email')
        password=request.POST.get('password')
        if Admin_Details.objects.filter(email=email,password=password):
            session=request.session['member_id'] =email
            print(session)
            return(HttpResponseRedirect("/Admin_Login/dashboard/index.html"))
        else:
            
            return(HttpResponseRedirect("/Admin_Login/index.html"))


def dashboard(request):
    return render(request,"Admin_Login/dashboard/index.html")


def add_teacher(request):
    form=Add_Teacher(request.POST)
    if form.is_valid():
        password=form.cleaned_data["password"]
        confirm_password=form.cleaned_data["confirm_password"]
        if password==confirm_password:
            department=form.cleaned_data['department']
            add_teacher_details=Add_Teacher_Details.objects.create(
                first_name=form.cleaned_data['first_name'],
                middle_name=form.cleaned_data['middle_name'],
                last_name=form.cleaned_data['last_name'],
                email=form.cleaned_data['email'],
                phone_number=form.cleaned_data['phone_number'],
                department=department,
                is_head_of_department=form.cleaned_data['is_head_of_department'],
            )
            query=Teacher_Login(id=None,teacher_id=add_teacher_details,email=form.cleaned_data['email'],password=form.cleaned_data['password'])
            query.save()
            print("Login Added Success")
            response_data = {
                "status" : "success",
                "message" : "Teacher Added Successfully",
                "title" : "Successfully Added"
            }
            return HttpResponse(json.dumps(response_data),content_type="application/javascript")
        else:
            response_data = {
                "status" : "error",
                "message" : "Password and Confirm Password didn't match",
                "title" : "Password Error"
            }
            return HttpResponse(json.dumps(response_data),content_type="application/javascript")
    else:
        print("Invalid Form")
        form=Add_Teacher()
    return render(request,"Teachers/add_teacher.html", {'form': form})
        

def view_teachers(request):
    teacher_data=Add_Teacher_Details.objects.all().values().order_by('department')
    print(teacher_data)

    context={
        "teacher_details": teacher_data
    }
    return render(request,"Teachers/view_teachers.html",context=context) 


def add_seat(request):
    
    department=Department.objects.all().values()
    print(department)
    context={
        "department": department
    }
    return render(request,"Department/seat.html",context=context)



csrf_exempt
def seat_data(request):
    department=request.POST.get('department')
    total=int(request.POST.get('total'))
    booked=int(request.POST.get('booked'))
    available=(total-booked)
    print(available)
    if not Seat.objects.filter(department=department).exists():
        seat=Seat(id=None,department=Department.objects.get(id=department),total_seat=total,booked_seat=booked,available_seat=available)
        seat.save()
        context={
            "status" : "success"
        }
        return HttpResponse(json.dumps(context),content_type="application/json")
    else:
        context={
            "status" : "error"
        }
        return HttpResponse(json.dumps(context),content_type="application/json")


def view_seat(request):
    
    seat=Seat.objects.select_related('Department').all().values(
        'department__department_name',
        'total_seat',
        'booked_seat',
        'available_seat',
        
        # percentage=('available_seat'/'total_seat')*100,
    )
    
    return JsonResponse({"data": list(seat)})


def edit_seat(request):
    department=Department.objects.all().values()
    print(department)
    context={
        "department": department
    }
    return render(request,"Department/edit_seat.html",context=context)


csrf_exempt
def edit_seat_data(request):
    department=request.POST.get('department')
    total=int(request.POST.get('total'))
    booked=int(request.POST.get('booked'))
    available=(total-booked)
    print(available)
    seat=Seat.objects.filter(department=department).update(total_seat=total,booked_seat=booked,available_seat=available)
    context={
        "status" : "success"
    }
    return HttpResponse(json.dumps(context),content_type="application/json")
