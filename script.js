var likeCount = 0;
 document.getElementById("likeNumer").innerHTML = likeCount +  ' likes';

function likeincrement(){
     likeCount = likeCount +1 ;
     document.getElementById("likeNumer").innerHTML = likeCount +  ' people liked';
     }

var likeCount1 = 0;
     document.getElementById("likeNumer1").innerHTML = likeCount1 +  ' likes';
function likeincrement1(){
         likeCount1 = likeCount1 +1 ;
         document.getElementById("likeNumer1").innerHTML = likeCount1 +  ' people liked';
         }
         
var likeCount2 = 0;
         document.getElementById("likeNumer2").innerHTML = likeCount2 +  ' likes';    
function likeincrement2(){
             likeCount2 = likeCount2 +1 ;
             document.getElementById("likeNumer2").innerHTML = likeCount2 +  ' people liked';
             }
function sucessfullySubmit(){
     document.getElementById("submit1").style.display="none";
     document.getElementById("submit12").innerHTML = "Thank you!I will contact you soon.";
     }

