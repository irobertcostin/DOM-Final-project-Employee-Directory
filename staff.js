const staff = [];

fetch("https://randomuser.me/api/?results=100")
.then(data=>data.json())
.then(data=>{
    return data.results})
.then(data=>{
    for (i in data){
        staff.push(data[i]);
    }
    return staff;
})
.then(data=>{
    populeazaPagina(data,1);
})