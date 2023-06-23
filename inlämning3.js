const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        let timeStamp = document.createElement("timeStamp");
        li.innerText = inputBox.value + " ";
        calcTime(timeStamp);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(timeStamp);
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const timeStamp = e.target.querySelector("timeStamp");
        calcTime(timeStamp);
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function calcTime(timeStamp) {
    var d = new Date().toLocaleString("en-GB", {timeZone: "CET"})
    timeStamp.innerText = d;
}

showTask();


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