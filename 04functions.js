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
    expand.textContent = "EXPAND"

    return mainDiv;
}

