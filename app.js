populeazaPagina(staff, 1);


let paging = document.querySelector(".paging");

let modal= document.querySelector(".modal-container");

let m= document.querySelector(".modal");

let edit = document.getElementById("edit");


paging.addEventListener("click", (a) => {
    let obj = a.target;
    if(obj.classList.contains("pagina")){

        populeazaPagina(staff,+obj.textContent);
    }
})



let population = document.querySelector(".population");

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

let search = document.querySelector(".search");
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

let newElInput = document.querySelector(".newentry");
let addBtn = document.querySelector(".newentrybutton");

addBtn.addEventListener("click",()=>{

    let name = newElInput.value;
    
    let newEmp = newObj(name);
    staff.unshift(newEmp);
    populeazaPagina(staff,1)

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



let filter = document.querySelector(".filters");
filter.addEventListener("change",(g)=>{
    
    let obj = g.target;
    
    if(obj.checked==true){
        paging.innerHTML="";
        populeazaPagina(filtrare(staff,obj.id),1)
        // creazaButoane(filtrare(staff,obj.id).length/12+1);
        // console.log(filtrare(staff,obj.id))
    }else if(obj.checked==false){
        populeazaPagina(staff,1);
    }

})


edit.addEventListener("click",(h)=>{

    let obj = h.target;

    if(obj.id=="edit"){
        obj.id=="save";
        console.log(obj)
    }


})





// nu se populeaza total daca sunt mai multe filtre active
// functia de search nu cauta cu filtrele active, cauta in tot arrayul
// daca avem un filtru activ, si apasam pe pagina, ne repopuleaza pagina fara filtre 
// daca adaugam un element nou, sagetile sunt inactive pe modalul nou creat 

