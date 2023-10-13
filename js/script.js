let list = document.querySelector(".list");
let addBtn = document.querySelector(".add-btn");
let inputText = document.querySelector(`input[type="text"]`);
let deleteBtn = document.querySelector(".delete-btn");


let deleteOngoing = false;
let numberOfSavedItems = 0;

let array = [
  
]

let savings = localStorage.getItem("Saved");
for(let i = 0; i<=savings; i++){
    array.push(localStorage.getItem(`${i}`));
}

array.forEach(e => {
    list.innerHTML += `<li>${e}</li>`;
}) 

list.addEventListener("click", (e) => {
    if(deleteOngoing === false){
    if(e.target.classList.contains("green")){
        targetString = e.target.innerHTML;
        let lastIndex = targetString.lastIndexOf(" ");
        e.target.innerHTML = targetString.substring(0, lastIndex);
        e.target.classList.remove("green");
        e.target.classList.add("grey");
    } else {
        e.target.classList.remove("grey");
        e.target.classList.add("green");
        e.target.innerHTML += " &#10003";
    }
} else {
    e.target.classList.add("removeEffect");
    setTimeout(function() {e.target.remove();}, 3000)
   
}
})

addBtn.addEventListener("click", () => {
    addNewToList();
});

document.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        addNewToList();
    }
})

function addNewToList() {
    if(inputText.value !== ""){
    list.innerHTML += `<li>${inputText.value}</li>`;
    localStorage.setItem(`${numberOfSavedItems}`, `${inputText.value}`);
    numberOfSavedItems++;
    localStorage.setItem(`${"Saved"}`, `${numberOfSavedItems}`);
    inputText.value = ""
    }
}

deleteBtn.addEventListener("click", () => {
    if(deleteOngoing === false){
        deleteBtn.classList.add("deleteEffect");
        deleteBtn.innerHTML = "Click item below to remove";
        deleteOngoing = true;
        let listitems = document.querySelectorAll("ul > li");
        listitems.forEach(e => {
            e.classList.add("hover");
        })
    } else {
        deleteBtn.classList.remove("deleteEffect");
        deleteBtn.innerHTML = "Remove";
        deleteOngoing = false;
        let listitems = document.querySelectorAll("ul > li");
        listitems.forEach(e => {
            e.classList.remove("hover");
        })
    }
})