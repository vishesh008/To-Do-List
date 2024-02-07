const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputbox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);// listcontainer-> li-> span
    }
    inputbox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();//remove the li which the parent of span
        saveData();
    }
},false);


//to store data on browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//to display the data after every refresh
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();