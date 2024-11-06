$(window).on("load",function(){
  $(".wrapper").hide();
  
});
$(document).ready(function() {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
  let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
  console.log(arrowParent);
  arrowParent.classList.toggle("showMenu");
    });
  }


  $("#main").on("click",()=>{
    $("#nav").addClass("close");
  });
  




  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });

  let dropdown = document.querySelectorAll(".dropdownlink");
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", (e)=>{
  let dropdownBtn = e.target.parentElement.parentElement.parentElement;//selecting main parent of arrow
  console.log(dropdownBtn);
  dropdownBtn.classList.toggle("showMenu");
    });
  }

  

});

$(window).on("load",(event)=>{
  $("#menu").on("click",()=>{
    $("#row").toggleClass(".active");
    $("div.row div.col-xl-3.col-lg-6.mb-4").toggleClass("active");
    
  });
});


$(document).ready(function(){
		$.ajax({
			type:"GET",
			url: "http://127.0.0.1:8000/view_seat",
			success:function(response){
			  let html_items=""
			  console.log(response);
			  response.data.forEach((items)=>{
				console.log(items.department__department_name)
				percentage=(items.available_seat/items.total_seat)*100;
				  html_items+=` 	<div class="col-xl-3 col-lg-6 mb-4">
									  <div class="bg-white rounded-lg p-5 shadow">
										  <h2 class="h6 font-weight-bold text-center mb-4">${items.department__department_name}</h2>
										  <div class="progress mx-auto" data-value='66'>
											  <span class="progress-left">
												  <span class="progress-bar border-primary"></span>
											  </span>
											  <span class="progress-right">
												  <span class="progress-bar border-primary"></span>
											  </span>
											  <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
												  <div class="h2 font-weight-bold">${Math.round(percentage)}<sup class="small">%</sup></div>
											  </div>
										  </div>
	  
										  <div class="row text-center mt-4">
											  <div class="col-6 border-right">
												  <div class="h4 font-weight-bold mb-0">${items.total_seat}</div><span class="small text-gray">Total</span>
											  </div>
											  <div class="col-6">
												  <div class="h4 font-weight-bold mb-0">${items.available_seat}</div><span class="small text-gray">Left</span>
											  </div>
										  </div>
									  </div>
								  </div>`
			});
			$(".row").html(html_items);
			$(function() {
	  
			  $(".progress").each(function() {
			
				var value = $(this).attr('data-value');
				var left = $(this).find('.progress-left .progress-bar');
				var right = $(this).find('.progress-right .progress-bar');
			
				if (value > 0) {
				  if (value <= 50) {
					right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
				  } else {
					right.css('transform', 'rotate(180deg)')
					left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
				  }
				}
			
			  });
			
			  function percentageToDegrees(percentage) {
			
				return percentage / 100 * 360
			
			  }
			
			});
			},
			error:function(error){
			  console.log("Error");
			}
		});
});
