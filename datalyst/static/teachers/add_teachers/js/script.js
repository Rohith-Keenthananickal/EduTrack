$(document).ready(function(){
    console.log("ready");
    $(document).on("submit",".ajax",function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr("action");
        var method = $this.attr("method");
        // console.log("success");
        $.ajax({
            type: method,
            url: url,
            data: $(this).serialize(),
            success:function(response){
                console.log(response);
                var jsonData =JSON.parse(response);
                console.log(typeof(jsonData));
                const title=jsonData.title;
                const message=jsonData.message;
                const status=jsonData.status;
                if (jsonData.status == "error")
                {
                    console.log("login failed")

                    Swal.fire({
                        icon: 'warning',
                        title: title,
                        text: message,
                        footer: '<h6>Please Try Again</h6>'
                    });
                }
                else if(jsonData.status=="success"){
                    Swal.fire({
                        icon: status,
                        title: title,
                        text: message,
                    });
                }
            }
        });
    });
    
});
    
