

//concatenare arrays 
let whole = staff.concat(floor,managers);


let body = document.querySelector(".body");
let population = document.querySelector(".population")
populeazaPagina(whole,1);
creazaButoane(Math.ceil(whole.length/population.children.length+1));
whole.length/(population.children.length)
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


let myModal = body.firstElementChild;
body.removeChild(myModal);

body.addEventListener("click",(e)=>{

    let obj = e.target
    let divRoot = obj.parentNode;
 
    
    
    
    if(obj.id == "esc"){
        body.removeChild(myModal)
    }else if(obj.textContent=="More info"){
        let companyName = document.getElementById("companyName");
        body.insertBefore(myModal,companyName);
        let fiu = body.firstElementChild;
        let nepot = fiu.firstElementChild;
        let employee = nepot.firstElementChild;
        let pfp = employee.firstElementChild.nextElementSibling;
        pfp.src = divRoot.firstElementChild.src;
        
        let retrievedObject = retrieveInfo(whole,pfp.src);
        

        pfp.nextElementSibling.firstElementChild.textContent=retrievedObject.name.title + " "+retrievedObject.name.last + " "+ retrievedObject.name.first; 
        pfp.nextElementSibling.firstElementChild.nextElementSibling.textContent = retrievedObject.email;
        pfp.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent ="Reg.date: "+ retrievedObject.registered.date;
        pfp.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent ="Age: "+ retrievedObject.registered.age;
        
        
        
    }else if (obj.id == "left") {
        let employee = obj.parentNode.parentNode;
        let empObjArr = employee.children;
        let cardData = empObjArr[2].children
        
        let previousEmp = previous(whole,cardData[1].textContent)
        empObjArr[1].src=previousEmp.picture.large;
        cardData[1].textContent=previousEmp.email;
        cardData[0].textContent=previousEmp.name.title+ " "+previousEmp.name.first+" "+previousEmp.name.last;
        cardData[2].textContent="Reg.date: "+previousEmp.registered.date;
        cardData[3].textContent="Age: "+previousEmp.registered.age;
        

    }else if (obj.id == "right"){
        let employee = obj.parentNode.parentNode;
        let empObjArr = employee.children;
        let cardData = empObjArr[2].children
        let nextEmp = next(whole,cardData[1].textContent)
        empObjArr[1].src=nextEmp.picture.large;
        cardData[1].textContent=nextEmp.email;
        cardData[0].textContent=nextEmp.name.title+ " "+nextEmp.name.first+" "+nextEmp.name.last;
        cardData[2].textContent="Reg.date: "+nextEmp.registered.date;
        cardData[3].textContent="Age: "+nextEmp.registered.age;
        
    }

        
    
})


let paging = document.querySelector(".paging");

paging.addEventListener("click",(e)=>{

    let obj = e.target;
    if (obj.tagName =="BUTTON"){
        population.innerHTML="";
        populeazaPagina(whole,obj.textContent);
    }
    

})