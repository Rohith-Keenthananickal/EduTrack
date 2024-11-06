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
