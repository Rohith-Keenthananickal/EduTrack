from django.contrib import admin
from Admin.models import Admin_Details,Add_Teacher_Details

# Register your models here.
admin.site.register(Admin_Details)

admin.site.register(Add_Teacher_Details)
db_table = 'Teacher Details'