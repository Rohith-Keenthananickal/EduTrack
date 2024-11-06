$(document).ready(function(){
    
    function compile(){
        var html = document.getElementById("html");
        var css = document.getElementById("css");
        var js = document.getElementById("js");
        var code = document.getElementById("code").contentWindow.document;
    
        document.body.onkeyup = function(){
            code.open();
            code.writeln(html.value+"<style>"+css.value+"</style>" + "<script>"+js.value+"</script>")
            code.close();
        }
    }
    compile();
    function compile(){
        let htmlContent = document.getElementById('html')
        let cssContent = document.getElementById('css')
        let jsContent = document.getElementById('js')
        let output = document.getElementById('code')
        output = output.contentWindow || output.contentDocument.document || output.contentDocument
    
        document.body.onkeyup= function(){
            let doc = output.document;
    
            doc.open();
            doc.write(
                `
                 <style>${cssContent.value}</style>
                 <body>${htmlContent.value}</body>
                 <script>${jsContent.value}</script>   
                `
            )
            doc.close()
    
        }
    
    }
    compile();
    
});
    

