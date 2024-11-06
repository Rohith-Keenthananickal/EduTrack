$(document).ready(function(){
    
    function compile(){
        var php = document.getElementById("php");
        var code = document.getElementById("code").contentWindow.document;
    
        document.body.onkeyup = function(){
            code.open();
            code.writeln(php.value)
            code.close();
        }
    }
    compile();
    function compile(){
        let phpContent = document.getElementById('php')
        let output = document.getElementById('code')
        output = output.contentWindow || output.contentDocument.document || output.contentDocument
    
        document.body.onkeyup= function(){
            let doc = output.document;
    
            doc.open();
            doc.write(
                `
                
                 <body>${phpContent.value}</body>
                  
                `
            )
            doc.close()
    
        }
    
    }
    compile();
    
});
    

