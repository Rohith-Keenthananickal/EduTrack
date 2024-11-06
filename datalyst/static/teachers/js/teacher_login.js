$(document).on("submit",".ajax",function(e){
    e.preventDefault();
    var $this = $(this);
    var url = $this.attr("action");
    var method = $this.attr("method");
    console.log("submit");
    $.ajax({
        type: method,
        url: url,
        data: $(this).serialize(),
        success:function(response){
            console.log(response);
            if(response.status=="success"){
                if(response.is_head=="true"){
                    window.location.href="http://127.0.0.1:8000/teacher/dashboard2";
                }
                else if(response.is_head=="false"){
                    window.location.href="http://127.0.0.1:8000/teacher/dashboard";
                }
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: "Login Error",
                    text: "Invalid login credentials",
                    footer: '<h6>Please Try Again</h6>'
                });
            }
            
            
        }
    });
});