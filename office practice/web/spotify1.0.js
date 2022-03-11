

 function myfunc1(){
        document.getElementById("demo").style.display="block";
         document.getElementById("dil").style.display="none";
      }
function myfunc2(){
        document.getElementById("dil").style.display="block";
        document.getElementById("demo").style.display="none";  
      }  

//scroll to top button//
var  mybutton=document.getElementById("mybtn");
//problem//
function topFunction(){
       if((document.getElementById('dil').style.display="block" )|| (document.getElementById('demo').style.display="block"))
              { mybutton.style.bottom="109px";}
       else{
              mybutton.style.bottom="16px";
       }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll=function(){scrollfunction()};

// When the user clicks on the button, scroll to the top of the document
function scrollfunction(){
       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              mybutton.style.display="block"}
              else{
                     mybutton.style.display="none"
              }
       };
function topFunction() {
window.scrollTo({top:0,behavior:'smooth'});
}


//onlick to close control//
       var x=document.getElementById("p");
function myfunc3(){
       document.getElementById("demo").style.display="none";
       x.pause();
}

       var y=document.getElementById("p1");
function demo(){
       if(document.getElementById('dil').style.display="block"){
              y.play();
       }
       if(document.getElementById("dil").style.display="none"){
       y.pause();}

}
function func4(){
       document.getElementById("myModal").style.display="block";}
       function func5(){
        document.getElementById("myModal").style.display="none";}