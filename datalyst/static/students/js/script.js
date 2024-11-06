$(window).on("load",function(){
  $(".wrapper").hide();
  
});
$(document).ready(function() {
  let nav= document.querySelector("#nav");
	$(nav).removeClass("close");
	let arrow = document.querySelectorAll(".arrow");
	for (var i = 0; i < arrow.length; i++) {
		arrow[i].addEventListener("click", (e)=>{
	let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
	console.log(arrowParent);
	arrowParent.classList.toggle("showMenu");
		});
	}

  let dropdown = document.querySelectorAll(".dropdownlink");
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", (e)=>{
  let dropdownBtn = e.target.parentElement.parentElement.parentElement;//selecting main parent of arrow
  console.log(dropdownBtn);
  dropdownBtn.classList.toggle("showMenu");
    });
  }

//   $.ajax({
// 		type: 'POST',
// 		url: 'http://localhost/dashboard/datalyst2/datalyst/pages/Student_Login/pages/student_dashboard/php/student_details.php',
// 		data: $(this).serialize(),
// 		success: function(response3){
			
// 			$(".form-control").attr('readonly', 'readonly');
// 			$("#submit-btn").on("click",function(){
// 				var v=$("#submit-btn").html();
// 				console.log(v);
// 				if(v=="Edit"){
// 					$("#submit-btn").html('Update');
// 					$(".form-control").removeAttr("readonly");	
// 				}
// 				else if(v=="Update"){
// 					let fname=$("#fname").val();
// 					let mname=$("#mname").val();
// 					let lname=$("#lname").val();
// 					let email=$("#email").val();
// 					let phno=$("#ph").val();
// 					let admno=$("#admno").val();
// 					let gender=$("#gender").val();
// 					let rollno=$("#rollno").val();
// 					let address=$("#address").val();
// 					let regno=$("#regno").val();

// 					$.ajax({
// 						type: 'post',
// 						url: 'http://localhost/dashboard/datalyst2/datalyst/pages/Student_Login/pages/student_dashboard/php/edit_details.php',
// 						data: {fname:fname,mname:mname,lname:lname,email:email,ph_no:phno,admno:admno,gender:gender,rollno:rollno,address:address,regno:regno,},
// 						success: function(response3){
// 							console.log(response3);
// 							let response_status="";
// 							response3.forEach((item3)=>{
// 								response_status= item3.status;
// 							});
// 							if(response_status=='success'){
// 								Swal.fire({
// 									icon: 'success',
// 									title: 'Profile Updated',
// 									text: '',
// 									footer: '<h6>Reloading Page in 2 Seconds</h6>'
// 								});
// 								setInterval(function(){
// 									location.reload(true);
// 								},2000);
// 							}
// 							else{
// 								Swal.fire({
// 									icon: 'warning',
// 									title: 'Update Error',
// 									footer: '<h6>Please Try Again</h6>'
// 								});
// 							}
// 						}
// 					});
// 				}
				
// 			});
// 		}
// 	});









	$("#submit-btn").on("click", function(e){
		e.preventDefault();
		var v=$("#submit-btn").html();
		console.log(v);
		var $this = $(this);
		var url = $this.attr("action");
		var method = $this.attr("method");
		if(v=="Edit"){
			$("#submit-btn").html('Update');
			$(".form-control").removeAttr("readonly");	
		}
		else if(v=="Update"){
			
			$.ajax({
				type: 'POST',
				url: 'http://127.0.0.1:8000/student/profile_update',
				data: $(this).serialize(),
				success: function(response3){
					console.log(response3);
					let response_status="";
					response3.forEach((item3)=>{
						response_status= item3.status;
					});
					if(response_status=='success'){
						Swal.fire({
							icon: 'success',
							title: 'Profile Updated',
							text: '',
							footer: '<h6>Reloading Page in 2 Seconds</h6>'
						});
						setInterval(function(){
							location.reload(true);
						},2000);
					}
					else{
						Swal.fire({
							icon: 'warning',
							title: 'Update Error',
							footer: '<h6>Please Try Again</h6>'
						});
					}
				}
			});
		}
		
	});

});

