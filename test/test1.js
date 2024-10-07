const body = document.querySelector("body");
const box = document.querySelectorAll(".box");

box.forEach(function(box){
    
   box.addEventListener("click",  (event)=>{
  
    if(box.id==="red"){
       body.style.backgroundColor=box.id;
       
      
    }
    else if(box.id==="green")
    {
        body.style.backgroundColor=box.id;
    }
   else if(box.id==="blue")
    {
        body.style.backgroundColor=box.id;
    }
   else if(box.id==="pink")
    {
        body.style.backgroundColor=box.id;
    }
   
   })
})
