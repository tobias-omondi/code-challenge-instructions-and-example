//get an argument by element id;

const animalList =document.getElementById("animal list");

//select the element,creat element , appendelement and add the data.

fetch("http://localhost:3000/characters")
.then (Response => Response.json())
.then (data => { 
    data.ForEach( i=> { 
        let li =document.createElement ("li")
        li.innerHTML =animal.Name;
        animalList.appendChild(li)
    });
})

