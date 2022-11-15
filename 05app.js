//concatenare arrays 

let whole = staff.concat(floor,managers);


let body = document.querySelector(".body");
let population = document.querySelector(".population")
populeazaPagina(staff,1);

// colored div on hover
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


let x = body.firstElementChild;
body.removeChild(x);

body.addEventListener("click",(e)=>{

    let obj = e.target
    

    let divRoot = obj.parentNode;
    
    
    if(obj.id == "esc"){
        body.removeChild(x)
    }else if(obj.textContent=="More info"){
        let companyName = document.getElementById("companyName");
        body.insertBefore(x,companyName);
        let fiu = body.firstElementChild;
        let nepot = fiu.firstElementChild;
        let employee = nepot.firstElementChild;
        let pfp = employee.firstElementChild.nextElementSibling;
        pfp.src = divRoot.firstElementChild.src;
        console.log(pfp.src)
        let retrievedObject = retrieveInfo(whole,pfp.src);

        pfp.nextElementSibling.firstElementChild.textContent=retrievedObject.name.title + " "+retrievedObject.name.last + " "+ retrievedObject.name.first; 
        pfp.nextElementSibling.firstElementChild.nextElementSibling.textContent = retrievedObject.email;
        pfp.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent ="Reg.date: "+ retrievedObject.registered.date;
        pfp.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent ="Age: "+ retrievedObject.registered.age;
        


    }
    
    
})

