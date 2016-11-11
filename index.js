//JavaScript for lab 6 

$(document).ready(function(){
    
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
                   if(key == ""){
                       
                       alert("Text field must not be empty");
                   }
                   else{
                    
                      x.open("GET", "request.php?q=" + key, true);
                      x.send();
                   }
    });
    //Jquery for xml data request
    $('#dBtn').on('click', function(e) {
        e.preventDefault();
        $.ajax('request.php?q=&all=true',{
            method: "GET",
            dataType: "xml"
        }).done(function(response){
            var definition = $(response).find("definition");
            $("#result").append("<ol></ol>");
            $(definition).each(function(){
                        
            var title = "<h3>" + $(this).find("name").text() + "</h3>";
            var def = "<p>" + $(this).find("meaning").text() + "</p>";
            var owner = "<p>" + "-" + $(this).find("author").text() + "</p>";
            //Creating list elements for list
            $("#result ol").append("<li>" + title + def + owner + "</li>");
           });
        }).fail(function() {
            $("#result").append("Error!!:(");
        });
    });
});