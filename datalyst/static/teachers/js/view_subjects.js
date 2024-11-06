$(document).ready(function () {
	$.ajax({
		type : 'POST',
		url:'http://127.0.0.1:8000/teacher/get_semester',
		// data:{sem:sem},
		success: function(response){
			console.log(response);
			let html_items=""
			response.forEach((items) =>{
				html_items+=`
				<option value="${items.pk}">${items.fields.semester_name}</option>
                `
            });
			$("#sem").html(html_items)
			let sem=$("#sem").val();
			console.log(sem);
			$.ajax({
				type : 'POST',
				url:'http://127.0.0.1:8000/teacher/get_subjects',
				data:{sem:sem},
				success: function(response){
					console.log(response);
					let html_items=""
						response.forEach((items) =>{
							html_items+=`
							<td>${items.fields.subjects}</td>
							`
						});
						$(".table-tr").html(html_items)
				}
			});


		}
	});

	$("#sem").on("change", function(){
		let sem=$("#sem").val();
		console.log(sem);
		$.ajax({
			type : 'POST',
			url:'http://127.0.0.1:8000/teacher/get_subjects',
			data:{sem:sem},
			success: function(response){
				console.log(response);
				let html_items=""
					response.forEach((items) =>{
						html_items+=`
						<td>${items.fields.subjects}</td>
						`
					});
					$(".table-tr").html(html_items)
			}
		});
	});
	
	$("#edit").on("click",function(){
		let sem=$("#sem").val();
		console.log(sem);
		$.ajax({
			type : 'POST',
			url:'http://127.0.0.1:8000/teacher/get_subjects',
			data:{sem:sem},

			success: function(response){
				console.log(response);
				let subjects=""
				response.forEach((items) =>{
					subjects+=`
					<div class="mb-3">
						<label for="subjects" class="form-label">Subject</label>
						<input type="text" name="sub" class="form-control" value="${items.fields.subjects}">
						<input type=number class="id form-control" id="test_id" value="${items.pk}" name="id">
                	</div>
					
					`
				});
				$("#modal-container").html(subjects);

					
			}
		});
		// console.log(id);
	});
	

	$("#save-changes").on("click",function(){
		var id = $('input[name="id"]').map(function(){
			return $(this).val();
		  }).get();
		console.log(id);
		var sub = $('input[name="sub"]').map(function(){
			return $(this).val();
		  }).get();
		$(document).on("submit","form.ajax",function(e){
			e.preventDefault();
			var $this = $(this);
			var url = $this.attr("action");
			var method = $this.attr("method");
		
			$.ajax({
				type: method,
				url: url,
				data: $(this).serialize(),
				success: function(response2){
					console.log(response2);
					var jsonData =response2
					const title=jsonData.title;
					const message=jsonData.message;
					const status=jsonData.status;
					if(status=="success"){
						Swal.fire({
						icon: status,
						title: title,
						text: message,
						footer: '<h6>Reloading Page in 2 Seconds</h6>'
						});
						window.setTimeout(function(){location.reload();},2000)
					}
						
				}
				,else:function(){
					console.log("Error");
				}

				
			});
		});
	});
	
	
});


	