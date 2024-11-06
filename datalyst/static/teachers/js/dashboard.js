

$(window).on("load",function(){
  $(".wrapper").hide();
 
  
});

$(document).ready(function() {
	$.ajax({
		type: 'POST',
		url: 'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/php/teacher_details.php',
		data: $(this).serialize(),
		success: function(response3){
			console.log(response3);
			let form="";
			response3.forEach((items3)=>{
				form+=`
				<div class="row gutters">
									
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="form-group">
						<label for="fName">First Name</label>
						<input type="text" name="fname" value="${items3.first_name}" class="form-control" id="fname" placeholder="Enter First name">
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="form-group">
						<label for="mname">Middle Name</label>
						<input type="text" name="mname" value="${items3.middle_name}" class="form-control" id="mname" placeholder="Enter Middle Name">
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="form-group">
						<label for="lname">Last Name</label>
						<input type="text" name="lname" value="${items3.last_name}" class="form-control" id="lname" placeholder="Enter Last Name">
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" name="email" value="${items3.teacher_email}" class="form-control" id="email" placeholder="Email">
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="form-group">
						<label for="pht">Phone Number</label>
						<input type="number" name="ph_no" value="${items3.phone_number}" class="form-control" id="ph" placeholder="Enter Phone Number">
					</div>
				</div>
			</div>
				`
			});
			$("div#form").html(form);
			$(".form-control").attr('readonly', 'readonly');
			$("#submit-btn").on("click",function(){
				var v=$("#submit-btn").html();
				console.log(v);
				if(v=="Edit"){
					$("#submit-btn").html('Update');
					$(".form-control").removeAttr("readonly");	
				}
				else if(v=="Update"){
					let fname=$("#fname").val();
					let mname=$("#mname").val();
					let lname=$("#lname").val();
					let email=$("#email").val();
					let phno=$("#ph").val();
					$.ajax({
						type: 'post',
						url: 'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/php/edit_details.php',
						data: {fname:fname,mname:mname,lname:lname,email:email,ph_no:phno},
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
		}
	});

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
	
	$.ajax({
		type: 'post',
		url: 'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/student_api.php',
		data: $(this).serialize(),
		success: function(response)
		{
			console.log(response);
			if(response==''){
				console.log("no response");
			}
			else{
				let html_items=""
				response.forEach((items) =>{
					let i=response.length;
					console.log(i);
					html_items+=` 	<li class="" id="modal-body">
										<a href="#">
											<div class="left">
												<img src="image/user-icon.png" alt="icon">
												<h4 class="name">${items.first_name} ${items.middle_name} ${items.last_name}</h4><br>

												<p>is requesting to join the class ${items.department_name} ${i}</p>
												
											</div>
										</a>	
											<div class="right">
												<p class="button1">
													<section class="button-new">
														<button type="button" class="btn btn-dark btn-sm">Approve</button>
														<div class="student_classid" id="id">${items.student_id}</div>
													</section>
													
												</p>
												<p class="button2">
													<section class="reject">
														<button type="button" class="btn btn-dark btn-sm">Reject</button>
														<div class="student_classid" id="id">${items.student_id}</div>
													</section>
												</p>
											</div>
									</li>`
					console.log(items.department_name)
				});
				$("ul.list").html(html_items);
				$("div.modal-body div.confirm-profile ul li div.right section.button-new").on("click", function(){
					$("div.modal-body div.confirm-profile ul li div.right section.button-new").removeClass(" notifications");
					$(this).addClass(" notifications");
					$("div.modal-body div.confirm-profile ul li div.right section.button-new.notifications div#id").toggleClass("student-id");
					var id=$("div.modal-body div.confirm-profile ul li div.right section.button-new.notifications div#id").html();
					$("div.modal-body div.confirm-profile ul li div.right section.button-new.notifications div#id").parents("li").hide();
					
					console.log(id);
					$.ajax({
						type: 'POST', 
						url :'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/student_request.php',
						data : {id : id},
						success: function(response2)
						{
							console.log(response2);
							
						}
						
					});
					
				});

				$("div.modal-body div.confirm-profile ul li div.right section.reject").on("click", function(){
					$("div.modal-body div.confirm-profile ul li div.right section.reject").removeClass(" notifications");
					$(this).addClass(" notifications");
					$("div.modal-body div.confirm-profile ul li div.right section.reject.notifications div#id").toggleClass("student-id");
					var id=$("div.modal-body div.confirm-profile ul li div.right section.reject.notifications div#id").html();
					$("div.modal-body div.confirm-profile ul li div.right section.reject.notifications div#id").parents("li").hide();
					
					console.log("Reject ID "+id);
					$.ajax({
						type: 'POST', 
						url :'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/reject_student.php',
						data : {id : id},
						success: function(response2)
						{
							console.log(response2);
							
						}
						
					});
					
				});

			}
			
			
			

				
				
		}
			
		
  	});
	 

  	// $("#main").on("click",()=>{
    // 	$("#nav").addClass("close");
  	// });
	  





//   let sidebar = document.querySelector(".sidebar");
//   let sidebarBtn = document.querySelector(".bx-menu");
//   console.log(sidebarBtn);
//   sidebarBtn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("close");
//   });

  let dropdown = document.querySelectorAll(".dropdownlink");
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", (e)=>{
  let dropdownBtn = e.target.parentElement.parentElement.parentElement;//selecting main parent of arrow
  console.log(dropdownBtn);
  dropdownBtn.classList.toggle("showMenu");
    });
  }

  $(function() {

    
  
    
  
  });
  

 
});

// $(window).on("load",(event)=>{
//   $("#menu").on("click",()=>{
//     $("#row").toggleClass(".active");
//     $("div.row div.col-xl-3.col-lg-6.mb-4").toggleClass("active");
//   });
// });

