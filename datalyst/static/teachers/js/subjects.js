$(document).ready(function(){
    $.ajax({
        url: '/teacher/get_semester',
        type: 'post',
        // data : {dep:dep},
        success: function(response) {
            console.log(response);
            let item="";
            response.forEach((items)=>{
                console.log(items.fields.semester_name);
                item+=`
                <option value="${items.pk}">${items.fields.semester_name}</option> 
                `
            });
            $("#sem").html(item);
        }
    });
});