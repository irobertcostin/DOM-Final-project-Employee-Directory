

let search = document.querySelector(".search");
let paging = document.querySelector(".paging");
let modal= document.querySelector(".modal-container");
let m= document.querySelector(".modal");
let edit = document.getElementById("edit");
let newElInput = document.querySelector(".newentry");
let addBtn = document.querySelector(".newentrybutton");
let population = document.querySelector(".population");

populeazaPagina(staff, 1);

addBtn.addEventListener("click",()=>{

    let name = newElInput.value;
    
    let newEmp = newObj(name);
    staff.unshift(newEmp);
    populeazaPagina(staff,1)

})

paging.addEventListener("click", (a) => {
    let obj = a.target;
    if(obj.classList.contains("pagina")){

        populeazaPagina(staff,+obj.textContent);
    }
})


// modal unhide and populated
population.addEventListener("click",(b)=>{
    let obj=b.target;

    if(obj.classList.contains("expand")){
        m.classList.remove("hide");
        modal.classList.remove("hide");

        let name=obj.parentNode.querySelector(".nume").textContent;
        let expanded = retrieveInfo(staff,name);
        // console.log(expanded)

        let employeeCard = modal.firstElementChild.firstElementChild;
        // console.log(employeeCard)
        employeeCard.children[1].src=expanded.picture.large;
        employeeCard.children[2].children[0].textContent=expanded.name.first + " " + expanded.name.last;
        employeeCard.children[2].children[1].textContent=expanded.email;
        employeeCard.children[2].children[2].textContent="Reg.date: "+expanded.registered.date;
        employeeCard.children[2].children[3].textContent="Age: "+expanded.registered.age;
    } 
})


m.addEventListener("click",(e)=>{

    e.preventDefault;
    let obj=e.target;

    if(obj.classList.contains("esc")){
        m.classList.add("hide");
    }


})


search.addEventListener("input",()=>{

    let arr = cautare(staff,search.value.toLowerCase());
    creazaButoane(arr.length/12+1);
    populeazaPagina(arr,1);

    paging.addEventListener("click",(d)=>{
        let obj = d.target;
        if(obj.classList.contains("pagina")){
            populeazaPagina(arr,obj.textContent)
        }
    })


})






let arrows=document.querySelector(".arrows");
arrows.addEventListener("click",(f)=>{
    let obj=f.target;
    let email = document.getElementById("email").textContent;
    let employeeCard = modal.firstElementChild.firstElementChild;

    if(obj.id=="left"){
        let preObj = previous(staff,email);
        employeeCard.children[1].src=preObj.picture.large;
        employeeCard.children[2].children[0].textContent=preObj.name.first + " " + preObj.name.last;
        employeeCard.children[2].children[1].textContent=preObj.email;
        employeeCard.children[2].children[2].textContent="Reg.date: "+preObj.registered.date;
        employeeCard.children[2].children[3].textContent="Age: "+preObj.registered.age;

        
    }else if(obj.id=="right"){
        let nexObj = next(staff,email);
        // console.log(employeeCard)
        // console.log(nexObj)
        employeeCard.children[1].src=nexObj.picture.large;
        employeeCard.children[2].children[0].textContent=nexObj.name.first + " " + nexObj.name.last;
        employeeCard.children[2].children[1].textContent=nexObj.email;
        employeeCard.children[2].children[2].textContent="Reg.date: "+nexObj.registered.date;
        employeeCard.children[2].children[3].textContent="Age: "+nexObj.registered.age;


    }


})
let moreFilters = [];


let filter = document.querySelector(".filters");
filter.addEventListener("change",(g)=>{
    
    let obj = g.target;
    
    moreFilters=returnCheckedTypes();
    populeazaPagina(filtrareCumulat(staff,moreFilters),1)

    paging.innerHTML="";
    creazaButoane(filtrareCumulat(staff,moreFilters).length/12+1);
    paging.addEventListener("click",(d)=>{
        let obj = d.target;
        if(obj.classList.contains("pagina")){
            populeazaPagina(filtrareCumulat(staff,moreFilters),obj.textContent)
        }
    })



})


edit.addEventListener("click",(h)=>{
    let obj = h.target;

    let infoStorage = obj.previousElementSibling.previousElementSibling;
    let name = infoStorage.firstElementChild.textContent;
    let email = infoStorage.children[1].textContent;
    let regiDate = infoStorage.children[2].textContent;
    let age = infoStorage.children[3].textContent;
    
    console.log(name);
    console.log(email);

    if(obj.id=="edit"){
        obj.id="save";
        obj.textContent="Save";
        createInputs();
        
    } else if(obj.id=="save"){
        
        for(i=0;i<infoStorage.children.length;i++){

            if(infoStorage.children[i]===""){
                return "Invalid inputs";
            }else {

            }

        }
        

        createParagraf();
        
        obj.id="edit"
        obj.textContent="Edit"
    }


})



// functia de search nu cauta cu filtrele active, cauta in tot arrayul
// swipe left/right nu functioneaza dupa editarea obiectului
// 
