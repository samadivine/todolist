let lightmood=document.querySelector(".switchmode img");
let body=document.querySelector("body");
let form=document.querySelector("form");
let todolist=document.querySelector(".todolist");
let checkbtn=document.querySelector(".form-check-input");
let deletebtn=document.querySelector(".bgcolor span")
let menu=document.querySelector(".ourmenu ul")





// design manipulation 
lightmood.addEventListener("click" , e=>{
    if(body.classList.contains("displaylayout")){
        body.classList.remove("displaylayout");
        body.classList.add("bright");
        lightmood.setAttribute("src", "images/icon-sun.svg");
    } else{
        body.classList.remove("bright");
       body.classList.add("displaylayout");
       lightmood.setAttribute("src", "images/icon-moon.svg");
        
    }  
});


// add value of input to the list 

form.addEventListener("submit", e=>{
    e.preventDefault();

    let myhtml=`<li class="list-group-item d-flex justify-content-between align-items-center draggable bgcolor">
       <div class="listitem">
        <input class="form-check-input me-1" type="radio" name="mytodos" aria-label="...">
        ${ form.nameofnewtodo.value.trim()}
       </div>
        <span class=""><img src="images/icon-cross.svg" alt=""></span>
       </li>`

    todolist.innerHTML+=myhtml;
    form.reset();
    

    
});

// cancel todos and delete to do
todolist.addEventListener("click", e=>{
    if(e.target.tagName=="IMG"){
        e.target.parentNode.parentNode.remove()
    } 
    if(e.target.tagName=="INPUT"){
        if(!e.target.parentNode.parentNode.classList.contains("completed")) {
             e.target.parentNode.parentNode.classList.add("completed");
         }else{e.target.parentNode.parentNode.classList.remove("completed")}
    } 
})

// menu setup 

menu.addEventListener("click", e=>{
    if (e.target.classList.contains('active')) {
       let test= document.querySelectorAll(".todolist li");
       for(var i=0; i<test.length; i++){
        if(test[i].classList.contains("completed")){
            test[i].classList.add("hidden");
        }else{
            test[i].classList.remove("hidden");
        }
       
       }
    }
      
})

menu.addEventListener("click", e=>{
    if (e.target.classList.contains('Completed')) {
       let test= document.querySelectorAll(".todolist li");
       for(var i=0; i<test.length; i++){
        if(!test[i].classList.contains("completed")){
            test[i].classList.add("hidden");
        }else{
            test[i].classList.remove("hidden");
        }
       
       }
    }
      
})

menu.addEventListener("click", e=>{
    if (e.target.classList.contains('all')) {
       let test= document.querySelectorAll(".todolist li");
       for(var i=0; i<test.length; i++){
           test[i].classList.remove("hidden");
       
       }
    }
      
})

// drag and drop todos 
