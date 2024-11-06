$(document).ready(function(){
    $("#otp").hide();
    $(".signin").on("click",function(e){
        e.preventDefault();
        function generateOTP() {
            var digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < 4; i++ ) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
        }
        var code= generateOTP();
        console.log(code);
        $("p.hide").hide();
        $("#otp").show();
        let phno=$("#phno").val();
        

        $(".signup_btn").on("click",function(){
            var otp=$("#otp").val();
            
            if(code==otp){
                console.log("success");
                $.ajax({
                    type : 'POST',
                    url:'http://127.0.0.1:8000/parent/login_data',
                    data:{phno:phno},
                    success: function(response){
                        console.log(response);
                        if(response.status=="success"){
                            window.location.href="http://127.0.0.1:8000/parent/dashboard";
                        }
                        else{
                            Swal.fire({
                                icon: 'warning',
                                title: 'Login Error',
                                text: 'Please Check the Phone Number',
                                footer: '<h6>Please Try Again</h6>'
                            });
                        }
                        
                    }
                });
            }
            else{
                console.log("error");
                Swal.fire({
                    icon: 'warning',
                    title: 'Invaild OTP',
                    footer: '<h6>Please Try Again</h6>'
                })
            }
        });
        
    
        
        
        
    })
   	

});
