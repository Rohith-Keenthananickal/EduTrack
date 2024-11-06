$(window).on("load",function(){
  $(".wrapper").hide();
  $("#login").click(function(event){
    // event.preventDefault();
    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true 
    });
   
});
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function () {
      console.log("Service worker registered!");
  });
}
else{
  console.log("error");
}

const installApp = () => {
  if (askPrompt) {
      askPrompt.prompt();
      askPrompt.userChoice.then((result) => {
          console.log(result.outcome);
          if (result.outcome === "dismissed") {
              console.log("User dismissed");
          } else {
              console.log("installed");
          }

          askPrompt = null;
      });
  }
};







