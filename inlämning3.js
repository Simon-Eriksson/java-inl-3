const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.romove();
    }
},false)







//Följande funktionalitet måste implementeras:
//
//Skapa todo med titel och beskrivning
//Lista upp färdiga- och ofärdiga todos
//Avklara todo (check av)
//Ta bort todo
//
//
//En todo ska minst bestå av:
//
//Titel
//Beskrivning
//Avklarad (boolean)
//Skapad datum
//Avklarad datum