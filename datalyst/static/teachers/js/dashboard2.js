$(window).on("load",function(){
  $(".wrapper").hide();
 
  
});

$(document).ready(function() {
	$("div.modal-body div.confirm-profile ul li div.right section.button-new").on("click", function(){
		$("div.modal-body div.confirm-profile ul li div.right section.button-new").removeClass(" notifications");
		$(this).addClass(" notifications");
		$("div.modal-body div.confirm-profile ul li div.right section.button-new.notifications div#id").toggleClass("student-id");
		var id=$("div.modal-body div.confirm-profile ul li div.right section.button-new.notifications div#id").html();
		$("div.modal-body div.confirm-profile ul li div.right section.button-new.notifications div#id").parents("li").hide();
		
		console.log(id);
		$.ajax({
			type: 'POST', 
			url :'http://127.0.0.1:8000/teacher/approve',
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
			url :'http://127.0.0.1:8000/teacher/approve',
			data : {id : id},
			success: function(response2)
			{
				console.log(response2);
				
			}
			
		});
		
	});
	
	$(".form-control").attr('readonly', 'readonly');
	$("#submit-btn").on("click",function(e){
		e.preventDefault();
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
				url: 'http://127.0.0.1:8000/teacher/update_profile',
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

  $(function() {

    
  
    
  
  });
  

 
});


