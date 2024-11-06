$(document).ready(function() {
    console.log("hello");
    $("form.ajax").submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/edit_seat_data',
            data: $(this).serialize(),
            success:function(response){
                console.log(response);
                if(response.status=='success'){
                    Swal.fire({
                        icon: 'success',
                        title: 'Details Updated Successfully',
                        footer: '<h6>Click ok to continue</h6>'
                    });
                    setInterval(function(){
                        location.reload();
                    },2000);
                }
                else{
                    Swal.fire({
                        icon: 'warning',
                        title: 'Error',
                        footer: '<h6>Please Try Again</h6>'
                    });
                }
                // response.forEach((items)=>{
                    
                // });
            }
        });
    });
});