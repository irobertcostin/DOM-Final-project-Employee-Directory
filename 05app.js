

//concatenare arrays 
let whole = staff.concat(floor,managers);
let search = document.querySelector(".search")
let body = document.querySelector(".body");
let population = document.querySelector(".population")
let addNewInput=document.querySelector(".newentry");
let addNew= document.querySelector(".newentrybutton");


addNew.addEventListener("click",(e)=>{
    let obj=e.target;
    population.innerHTML="";
    // add object to position 0 of array
    whole.unshift(creazaCard(addNewInput.value))
    populeazaPagina(whole,1);

    let addedEl = population.children[0];
    addedEl.firstElementChild.nextElementSibling.textContent = addNewInput.value;
    population.children[0].firstElementChild.nextElementSibling.id = "memorize";
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



    return whole;
})

populeazaPagina(whole,1);
creazaButoane(Math.ceil(whole.length/population.children.length+1));

let mainDiv=document.querySelectorAll(".maindiv");
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

    let obj = e.target;
    let divRoot = obj.parentNode;

    let edit = document.getElementById("edit");
    let save = document.getElementById("save");
    
    
    if(obj.id == "esc"){
        let inputMemory=document.getElementById("inputmodify");
        // let aux = inputMemory.value;
        // if(aux===""){
        //     alert("no valid input")
        // }else if(aux!==""){
            
        // }

        body.removeChild(myModal)
        
        
        
    }else if(obj.textContent=="More info"){
        let companyName = document.getElementById("companyName");
        body.insertBefore(myModal,companyName);
        let fiu = body.firstElementChild;
        let nepot = fiu.firstElementChild;
        let employee = nepot.firstElementChild;
        let pfp = employee.firstElementChild.nextElementSibling;
        pfp.src = divRoot.firstElementChild.src;
        pfp.style.width = "128px";
        pfp.style.height="128.px";
        
        let retrievedObject = retrieveInfo(whole,pfp.src);
        let data = document.querySelector(".info").children;
        
        
        
        if(population.children[0].firstElementChild.nextElementSibling.id == "memorize"){
            data[0].textContent ="Mr/Mrs " + population.children[0].firstElementChild.nextElementSibling.textContent;
            data[1].textContent = "click to modify";
            data[2].textContent = "Age: " ;
            data[3].textContent = "Reg.date ";
            
        }
        
        if(retrievedObject.name != undefined && retrievedObject.registered!=undefined && retrievedObject.email!=undefined){
        pfp.nextElementSibling.firstElementChild.textContent=retrievedObject.name.title + " "+retrievedObject.name.last + " "+ retrievedObject.name.first; 
        pfp.nextElementSibling.firstElementChild.nextElementSibling.textContent = retrievedObject.email;
        pfp.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent ="Reg.date: "+ retrievedObject.registered.date;
        pfp.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent ="Age: "+ retrievedObject.registered.age;
            }
        
        

        


        
        
    }else if (obj.id == "left") {
        let inputMemory=document.getElementById("inputmodify");
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
        let inputMemory=document.getElementById("inputmodify");
        let employee = obj.parentNode.parentNode;
        let empObjArr = employee.children;
        let cardData = empObjArr[2].children
        let nextEmp = next(whole,cardData[1].textContent)
        empObjArr[1].src=nextEmp.picture.large;
        cardData[1].textContent=nextEmp.email;
        cardData[0].textContent=nextEmp.name.title+ " "+nextEmp.name.first+" "+nextEmp.name.last;
        cardData[2].textContent="Reg.date: "+nextEmp.registered.date;
        cardData[3].textContent="Age: "+nextEmp.registered.age;
    } else if(obj.id=="edit"){
        edit.id="save";
        edit.textContent="Save";
        let dataToModify = document.querySelector(".info")
        let arr = dataToModify.children;
        for(i=0;i<arr.length;i++){
            arr[i].classList.add("circle");
        }
        let newInput=document.createElement("input");

        dataToModify.addEventListener("click",(c)=>{
            let obj = c.target;
            if (obj.id==="fullname"){
                let arr = dataToModify.children;
                let intermediate = arr[0].textContent;
                dataToModify.removeChild(arr[0]);
                dataToModify.insertBefore(newInput,arr[0]);
                arr[0].id="inputmodify"
                arr[0].placeholder=intermediate;
                
            }
            if(obj.id==="email"){
                let arr = dataToModify.children;
                let intermediate = arr[1].textContent;
                dataToModify.removeChild(arr[1]);
                dataToModify.insertBefore(newInput,arr[1]);
                arr[1].id="inputmodify"
                arr[1].placeholder=intermediate;
            }


        })
        
        

    }else if(obj.id=="save"){
        let dataToModify = document.querySelector(".info");
        obj.id="edit";
        obj.textContent="Edit"
        let arr = dataToModify.children;
        for(i=0;i<arr.length;i++){
            arr[i].classList.remove("circle");
        }

        if(dataToModify.firstElementChild.id==="inputmodify"){

            let inputMemory=document.getElementById("inputmodify");
            let aux = inputMemory.value;
            if (aux!==""){
            dataToModify.removeChild(dataToModify.children[0]);
            
            let p = document.createElement("p");
            p.textContent=aux;
            p.id="fullname";
            
            dataToModify.insertBefore(p,dataToModify.firstElementChild);
            save.id="edit";
            save.textContent="Edit"
            }else if(aux===""){
                alert("no valid input")
            }
            

            
        }else if (dataToModify.firstElementChild.nextElementSibling.id==="inputmodify"){
            let inputMemory=document.getElementById("inputmodify");
            let aux = inputMemory.value;
            if (aux!==""){
            dataToModify.removeChild(dataToModify.children[1]);
            
            let p = document.createElement("p");
            p.textContent=aux;
            p.id="email";
            
            dataToModify.insertBefore(p,dataToModify.firstElementChild.nextElementSibling);
            save.id="edit";
            save.textContent="Edit"
            }else if(aux===""){
                alert("no valid input")

            }
        }

        

        
        
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




search.addEventListener("input",(e)=>{
    population.innerHTML="";
    paging.innerHTML="";

    
    populeazaPagina(cautare(whole,search.value.toLowerCase()),1);
    let a = cautare(whole,search.value.toLowerCase()).length;
    let b = population.children.length;
    creazaButoane(a/b+1);

    // console.log(cautare(whole,search.value.toLowerCase()))
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

    paging.addEventListener("click",(e)=>{
        let obj = e.target;
        population.innerHTML="";
        populeazaPagina(cautare(whole,search.value.toLowerCase()),obj.textContent);

        
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
    })
    

    
})



let filters = document.querySelector(".filters");
filters.addEventListener("change",(g)=>{
    let population = document.querySelector(".population")
    let floorArr=document.getElementById("floorfilter");
    let staffArr=document.getElementById("stafffilter");
    let managersArr = document.getElementById("managersfilter");
    let obj = g.target;
    console.log(obj)

    if(floorArr.checked == true){
        population.innerHTML="";
        populeazaPagina(floor,1);
        let mainDiv=document.querySelectorAll(".maindiv");
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
        
        
    }}else if (floorArr.checked==false){
        population.innerHTML="";
        populeazaPagina(whole,1);
        for(i=0;i<mainDiv.length;i++){
            let mainDiv=document.querySelectorAll(".maindiv");
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

    }
    
    
    
    else if (staffArr.checked==true){
        console.log("test2");
    }
    
    
    
    else if (managersArr.checked==true){
        // let population = document.querySelector(".population")
        // population.innerHTML="";
        // populeazaPagina(managers,1);
        console.log(managersArr);
        
        let mainDiv=document.querySelectorAll(".maindiv");
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
        
    }
    
    
    
})



