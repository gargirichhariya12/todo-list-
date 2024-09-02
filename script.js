const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
//javascript for click function
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
//creating a function so that when ever we reached to a browser our list should be as it  is 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//for displaying the saved data in our website
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();