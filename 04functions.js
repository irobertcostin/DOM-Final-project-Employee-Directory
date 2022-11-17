// functie ce primeste un array si creaza un card 

function creazaCard (obj) {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("maindiv")

    let image = document.createElement("img");
    mainDiv.appendChild(image)
    image.classList.add("portrait")
    image.src = obj.picture.large;

    let name =document.createElement("p")
    mainDiv.appendChild(name)
    name.classList.add("nume")
    name.textContent=obj.name.first + " " + obj.name.last;

    let age = document.createElement("p");
    mainDiv.appendChild(age);
    age.classList.add("age");
    age.textContent="Age: " + obj.registered.age;

    let expand = document.createElement("div");
    mainDiv.appendChild(expand)
    expand.classList.add("expand")
    expand.textContent = "More info"
    expand.classList.add("hide")

    return mainDiv;
}


// functie ce primeste ca parametru un vector nr carduri si nr de pagini
// aceasta functie va publica elementele din arrayul respectiv
// nrCarduri se refera la carduri pe pagina 
//nr Pagini se refera la pagina care contine 12 elemente din array

function definestePagina (arr,nrCarduri,nrPagini){

    let filter = [];

    for(i=nrCarduri*(nrPagini-1);i<arr.length&&i<nrCarduri*nrPagini;i++){
        filter.push(arr[i]);
    }
return filter;
}


// functie ce primeste ca parametru un arr si un obj, si returneaza arrayul

function populeazaPagina (arr,nrPagina) {

    arr = definestePagina(arr,12,nrPagina);
    let population = document.querySelector(".population")
    
    for(i=0;i<arr.length;i++){
        population.appendChild(creazaCard(arr[i]));
    }

    return arr;

}

// functie ce creaza butoane
function creazaButoane(numar) {
    let paginatie = document.querySelector(".paging");
    paginatie.innerHTML="";
    for(i=1;i<numar;i++){

        let buton = document.createElement("button");
        buton.textContent=i;
        paginatie.appendChild(buton);
    }
    
}


// functie ce primeste un array si un parametru si returneaza un object 

function retrieveInfo (arr,param){

    let x = "";

    for(i=0;i<arr.length;i++){
        if( param == arr[i].picture.large){
            x = arr[i]
        }
    }

    return x;

}



// functie ce primeste un array si un parametru si returneaza elementul precedent

function previous(arr,param) {

    let x = "";

    for(i=0;i<arr.length;i++){
        if(arr[i].email.toLowerCase() == param.toLowerCase()) {
            x = arr.indexOf(arr[i])-1;
            
        }
    }
    return arr[x];
}


function next (arr,param) {
    let  x = "";

    for(i=0;i<arr.length;i++){
        if(arr[i].email.toLowerCase() == param) {
            x = arr[arr.indexOf(arr[i])+1];
        }
    }

    return x;
}


// functie ce primeste un array si parametru, si cauta obiecte in array

function cautare(arr,obj){
    let searched = [];
    for(i=0;i<arr.length;i++){
        if(arr[i].name.first.toLowerCase().includes(obj) || arr[i].name.last.toLowerCase().includes(obj)){
            searched.push(arr[i]);
        }
    }
    return searched;
}