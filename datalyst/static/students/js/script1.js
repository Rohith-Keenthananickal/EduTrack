const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
$password=$(".password");
$conform_password=$(".conform_password")

$(document).on("submit","form.ajax2", function (e){
    e.preventDefault();
    var $this = $(this);

    var url = $this.attr("action");
    var method = $this.attr("method");

    $.ajax({
        type: method,
        url: url,
        data: $(this).serialize(),
        success: function(response)
        {
            console.log(response.status);
            if (response.status=="success"){
                window.location.href="http://127.0.0.1:8000/student/dashboard"
            }
                // if (status == "error")
                // {
                //     console.log("login failed")

                //     Swal.fire({
                //         icon: 'warning',
                //         title: 'Login Error',
                //         text: message,
                //         footer: '<h6>Please Try Again</h6>'
                //     })
                // }
                // 	else if(jsonData.status=="success"){
                //     window.location.href="pages/student_dashboard/index.php"
                // }
            
            
            
         }
   });
});