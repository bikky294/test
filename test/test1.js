const body = document.querySelector("body");
const box = document.querySelectorAll(".box");

box.forEach(function(box){
    
   box.addEventListener("click",  (event)=>{
   body.style.backgroundColor=event.target.id;
    
   })
})
