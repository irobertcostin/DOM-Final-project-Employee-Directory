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
        let name=obj.parentNode.querySelector(".nume").textContent;
        let expanded = retrieveInfo(staff,name);
        modal.classList.remove("hide");
    } 
})


m.addEventListener("click",(e)=>{


    e.preventDefault;
    let obj=e.target;

    if(obj.classList.contains("esc")){
        m.classList.add("hide");
    }
})