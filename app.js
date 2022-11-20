populeazaPagina(staff, 1);


let paging = document.querySelector(".paging");

let modal= document.querySelector(".modal-container");

let m= document.querySelector(".modal");



paging.addEventListener("click", (a) => {
    let obj = a.target;
    if(obj.classList.contains("pagina")){

        populeazaPagina(staff,+obj.textContent);
    }
})



let population = document.querySelector(".population");


population.addEventListener("click",(b)=>{
    let obj=b.target;

    if(obj.classList.contains("expand")){
        m.classList.remove("hide");
        modal.classList.remove("hide");

        let name=obj.parentNode.querySelector(".nume").textContent;
        let expanded = retrieveInfo(staff,name);
        console.log(expanded)

        let employeeCard = modal.firstElementChild.firstElementChild;
        console.log(employeeCard)
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

    let arr = cautare(staff,search.value);
    creazaButoane(arr.length/12+1);
    populeazaPagina(arr,1);

    paging.addEventListener("click",(d)=>{
        let obj = d.target;
        if(obj.classList.contains("pagina")){
            populeazaPagina(arr,obj.textContent)
        }
    })


})
