//JavaScript for lab 6 

window.onload= function (){

    

    document.getElementById("Btn").addEventListener("click", function(e){
          
          
          e.preventDefault();
          
          var x = new XMLHttpRequest();
           x.onreadystatechange = function(){
               //alert("So far so good");
               //alert(x.readyState + " " + x.status);
               if(x.readyState == XMLHttpRequest.DONE) {
                    if(x.status == 200){
                        
                        document.getElementById("definition").innerHTML = x.responseText;
                    }
                    else {
                           alert("Issues with request");
                    }
               }
           };
           
           var text =document.getElementById('word').value;
           var key = text;
           
              x.open("GET", "request.php?q=" + key, true);
              x.send();
    });
        
     
};
