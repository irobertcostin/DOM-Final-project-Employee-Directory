let population = document.querySelector(".population")
populeazaPagina(staff,1);

let mainDiv=document.querySelectorAll(".maindiv")
for(i=0;i<mainDiv.length;i++){

    if(mainDiv[i].classList.contains("maindiv")){

        mainDiv[i].addEventListener("mouseenter", (e)=> {
            let obj=e.target
            // console.log(obj)
                if(obj.classList.contains("maindiv")){
                    obj.lastElementChild.classList.remove("hide")
        
                }
            
        })

        mainDiv[i].addEventListener("mouseleave", (e)=> {
            let obj=e.target;
            obj.lastElementChild.classList.add("hide")
        
        })

    }


}

let body = document.querySelector(".body");
let x = body.firstElementChild;
// body.removeChild(x)
let esc = document.getElementById("esc");
esc.addEventListener("click", () => { 
    
    body.removeChild(x)


})






// event listener pe hover 

