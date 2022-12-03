// functie ce primeste un array si creaza un card 

function creazaCard(obj) {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("maindiv")

    let image = document.createElement("img");
    mainDiv.appendChild(image)
    image.classList.add("portrait")

    if (obj.picture == undefined) {
        image.src = "data:image/jpeg;base64,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"
    } else {
        image.src = obj.picture.large
    }
    image.style.height = "128px"
    image.style.width = "128px"

    let name = document.createElement("p")
    mainDiv.appendChild(name)
    name.classList.add("nume")
    if (obj.name == undefined) {
        name.textContent = "test";
    } else {
        name.textContent = obj.name.first + " " + obj.name.last;
    }


    let age = document.createElement("p");
    mainDiv.appendChild(age);
    age.classList.add("age");
    if (obj.registered == undefined) {
        age.textContent = "Age: "
    } else {
        age.textContent = "Age: " + obj.dob.age;
    }

    let remove = document.createElement("img");
    remove.classList.add("modal-delete")
    remove.src="./images/buttons/icons8-remove-32.png";
    mainDiv.appendChild(remove)

    let button = document.createElement("button");
    button.textContent = "More info";
    button.classList.add("expand");
    mainDiv.appendChild(button);

    return mainDiv;
}

// function creazaNewEmp(obj){
//     let mainDiv = document.createElement("div");
//     mainDiv.classList.add("maindiv")

//     let image = document.createElement("img");
//     mainDiv.appendChild(image)
//     image.classList.add("portrait")


//     let name =document.createElement("p")
//     mainDiv.appendChild(name)
//     name.classList.add("nume")
//     name.textContent=obj;

//     let age = document.createElement("p");
//     mainDiv.appendChild(age);
//     age.classList.add("age");
//     age.textContent="Age: "

//     let expand = document.createElement("div");
//     mainDiv.appendChild(expand)
//     expand.classList.add("expand")
//     expand.textContent = "More info"
//     expand.classList.add("hide")

//     return mainDiv;
// }


// functie ce primeste ca parametru un vector nr carduri si nr de pagini
// aceasta functie va publica elementele din arrayul respectiv
// nrCarduri se refera la carduri pe pagina 
//nr Pagini se refera la pagina care contine 12 elemente din array

function definestePagina(arr, nrCarduri, nrPagini) {

    let filter = [];

    for (i = nrCarduri * (nrPagini - 1); i < arr.length && i < nrCarduri * nrPagini; i++) {
        filter.push(arr[i]);
    }
    return filter;
}


// functie ce primeste ca parametru un arr si un obj, si returneaza arrayul

function populeazaPagina(arr, nrPagina) {
    creazaButoane(arr.length / 12 + 1);
    arr = definestePagina(arr, 12, nrPagina);
    let population = document.querySelector(".population")

    population.innerHTML = "";

    for (i = 0; i < arr.length; i++) {
        population.appendChild(creazaCard(arr[i]));
    }

    return arr;

}



// functie ce creaza butoane
function creazaButoane(numar) {
    let paginatie = document.querySelector(".paging");
    paginatie.innerHTML = "";
    for (i = 1; i < numar; i++) {

        let buton = document.createElement("button");
        buton.classList.add("pagina");
        buton.textContent = i;
        paginatie.appendChild(buton);
    }

}


// functie ce primeste un array si un parametru si returneaza un object 

function retrieveInfo(arr, param) {
    for (i = 0; i < arr.length; i++) {
        let nume = arr[i].name.first+" "+ arr[i].name.last;
        if (nume.includes(param)){
            return arr[i];
        }
    }

    return null;
}



// functie ce primeste un array si un parametru si returneaza elementul precedent

function previous(arr, param) {

    let x = "";
    for (i = 0; i < arr.length; i++) {
            if (arr[i].email == param) {
                x = arr[arr.indexOf(arr[i]) - 1];
            }
        
    }
    return x;
}


function next(arr, param) {
    let x = "";

    for (i = 0; i < arr.length; i++) {
            if (arr[i].email.toLowerCase() == param) {
                x = arr[arr.indexOf(arr[i]) + 1];
            }
        
    }
    return x;
}


// functie ce primeste un array si parametru, si cauta obiecte in array

function cautare(arr, obj) {
    let searched = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].name != undefined) {
            if (arr[i].name.first.toLowerCase().includes(obj) || arr[i].name.last.toLowerCase().includes(obj)) {
                searched.push(arr[i]);
            }
        }

    }
    return searched;
}


function cautareEmail (arr,obj) {
    let searched = {};
    for (i = 0; i < arr.length; i++) {
        if (arr[i].name != undefined) {
            if (arr[i].email.toLowerCase().includes(obj) || arr[i].email.toLowerCase().includes(obj)) {
                searched = arr[i];
            }
        }

    }
    return searched;
}


//functie ce primeste ca parametru un atribut si creaza un obiect
function newObj(param){
    let x = {
        name: {
        title: "",
        first: "",
        last: param,
        },
        email: param+"@example.com",
        registered: {
        date: "",
        age: 18,
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/99.jpg",
        medium: "",
        thumbnail: "",
        },
    }

    return x;
}

//functie ce primeste un array si parametru , si returneaza un nou arr

function filtrare(arr,param){

    let filtered=[];

    for(i=0;i<arr.length;i++){
        if(arr[i].empType==param){
            filtered.push(arr[i])
        }
    }
    return filtered
}

// function care lucreaza cu doua arrayuri
function filtrareCumulat(arr, types){

    let filtered = [];

    for(i=0;i<arr.length;i++){
        if(types.includes(arr[i].empType)){
            filtered.push(arr[i]);
        }

    }

    return filtered;

}


function createInputs() {
    
    
    let info = document.querySelector(".info");

    let input = document.createElement("input");
    let input1=document.createElement("input");
    let input2=document.createElement("input");
    let input3=document.createElement("input");

    info.removeChild(info.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
    info.removeChild(info.firstElementChild.nextElementSibling.nextElementSibling);
    info.removeChild(info.firstElementChild.nextElementSibling);
    info.removeChild(info.firstElementChild);
    

    info.appendChild(input);
    info.appendChild(input1);
    info.appendChild(input2);
    info.appendChild(input3);
    
    input.id = "fullname mark";
    input1.id="email";
    input2.id="regdate";
    input3.id="age";
    return info;

}

function populateInputs(obj){

    let info = document.querySelector(".info");

    // if(info.children[0].id.includes("mark")){
    info.children[0].value = obj.name.first + " " + obj.name.last;
    info.children[1].value = obj.email;
    info.children[2].value = obj.registered.date;
    info.children[3].value = obj.registered.age;

    // } else {
    // info.children[0].textContent = obj.name.first + " " + obj.name.last;
    // info.children[1].textContent = obj.email;
    // info.children[2].textContent = obj.registered.date;
    // info.children[3].textContent = obj.registered.age;
    // }

    



}


function returnCheckedTypes(){

    let checkes=document.querySelector(".filters").querySelectorAll(".type");


    let types=[];
    checkes.forEach(e=>{

        if(e.checked){

            types.push(e.id);
        }
    })

    

    return types;


}


function createParagraf() {

    let info = document.querySelector(".info");

    let p = document.createElement("p");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p");
    
    p.id = "fullname";
    p1.id="email";
    p2.id="regdate";
    p3.id="age";

    for(i=0;i<info.children.length;i++){
        if(info.children[i].value==""){

            return alert("err")
        
            }else {
                p.textContent = info.children[0].value;
                p1.textContent = info.children[1].value;
                p2.textContent = info.children[2].value;
                p3.textContent = info.children[3].value;
                
            
            
                
                info.removeChild(info.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
                info.removeChild(info.firstElementChild.nextElementSibling.nextElementSibling);
                info.removeChild(info.firstElementChild.nextElementSibling);
                info.removeChild(info.firstElementChild);
                
            
                info.appendChild(p);
                info.appendChild(p1);
                info.appendChild(p2);
                info.appendChild(p3);
                
                
                    return info;
            }

    }
    }


function editedItem () {
    let info = document.querySelector(".info");
    let obj = {
        name: {
            title: "Ms/Mrs",
            first: info.children[0].textContent,
            last: "",
        },
        email: "terra.franklin@example.com",
        registered: {
            date: "12-24-2008",
            age: 23,
        },
        empType: "floor",
        picture: {
            large: "https://randomuser.me/api/portraits/women/22.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    }
}
}

function noInput(obj) {
    if(obj.value===""){
        alert(`no valid input`)
    }
}

