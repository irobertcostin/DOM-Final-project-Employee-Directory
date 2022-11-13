let population = document.querySelector(".population")
populeazaPagina(staff,1);


population.addEventListener("mouseover", (e)=> {
    
    let obj=e.target
    
        if(obj.classList.contains("maindiv")){
            obj.lastElementChild.classList.remove("hide")
        }
    
})

population.addEventListener("mouseleave", (e)=> {
    let obj=e.target
    
        if(obj.classList.contains("maindiv")){
            obj.lastElementChild.classList.add("hide")
            
        }

})

// event listener pe hover 

