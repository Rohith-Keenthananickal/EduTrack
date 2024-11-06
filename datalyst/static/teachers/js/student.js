$(document).ready(function(){
	$(".card-one").on("click",function(){	
		$(".card-one").removeClass("active");
		$(this).addClass("active");
		$(".form-control").readOnly = true;
		var id=$("div.active #roll").html();
		console.log(id);
		
		$.ajax({
			type: "POST",
			url:'http://127.0.0.1:8000/teacher/student_list',
			data:{id : id},
			success:function(response2){
				console.log(response2);

				
				let modal_data="";
				response2.forEach((modal)=>{
					modal_data+=`
					
					<div class="mb-3">
						<label  class="form-label">Admission No</label>
						<input type="number" value="${modal.fields.admno}" class="form-control" name="admno" aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">First Name</label>
						<input type="text" value="${modal.fields.first_name}" class="form-control form1" aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Middle Name</label>
						<input type="text" value="${modal.fields.middle_name}" class="form-control" name="middle_name" aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Last Name</label>
						<input type="text" value="${modal.fields.last_name}" class="form-control" name="last_name"  aria-describedby="readonly" readonly>
						
					</div>
					
					<div class="mb-3">
						<label  class="form-label">Gender</label>
						<input type="text" value="${modal.fields.gender}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Address</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" aria-describedby="readonly" readonly>${modal.fields.address}</textarea>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Email</label>
						<input type="email" value="${modal.fields.email}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Phone Number</label>
						<input type="number" value="${modal.fields.phone_number}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Father's Name</label>
						<input type="text" value="${modal.fields.father_name}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Father's Occupation</label>
						<input type="text" value="${modal.fields.father_occupation}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Father's Phone Number</label>
						<input type="number" value="${modal.fields.father_phone_number}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Mother's Name</label>
						<input type="text" value="${modal.fields.mother_name}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Mother's Occcupation</label>
						<input type="text" value="${modal.fields.mother_occupation}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Mother's Phone Number</label>
						<input type="number" value="${modal.fields.mother_phone_number}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">SSLC Percentage</label>
						<input type="number" value="${modal.fields.sslc_percents}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Plus Two Percentage</label>
						<input type="number" value="${modal.fields.plus_two_percent}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Extracaricular Activities</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" aria-describedby="readonly" readonly>${modal.fields.extracurricular_activities}</textarea>
						
					</div>
					<div class="mb-3">
						<label  class="form-label">Register Number</label>
						<input type="number" value="${modal.fields.register_number}" class="form-control"  aria-describedby="readonly" readonly>
						
					</div>
					<button type="submit" class="btn btn-primary save-changes">Save Changes</button>
					`
					
				});
				$("form.modal-main").html(modal_data);
				$(".save-changes").hide();
				$("#edit").on("click",function(e){
					e.preventDefault();
					$(".form-control").removeAttr("readonly");
					console.log("removed");
					$(".save-changes").show();
					
				});
				
				
				
			}
		});
	});
	
	  
	
})