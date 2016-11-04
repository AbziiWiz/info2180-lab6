//JavaScript for lab 6 

window.onload= function (){

    document.getElementById("Btn").addEventListener("click", function(){
          var x = new XMLHttpRequest();
           x.onreadystatechange = function(){
               if(x.readyState === XMLHttpRequest.DONE) {
                    if(x.status === 200){
                        
                        alert(x.responseText); 
                    }
                    else {
                           alert("Issues with request");
                    }
               } 
           };
           
              x.open("GET", "request.php?q=definition", true);
              x.send();
    });
        
     
};
