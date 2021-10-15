//imports
//This import will ensure the data is loaded and able to use in this file on page load
//import {getThings} from "./components/loadData.js";

(() => {
const   buttons = document.querySelectorAll(".nav-buttons"),
        thingName = document.querySelector(".fav-name"),
        thingFact = document.querySelector(".fav-fact"),
        thingDesc = document.querySelector(".fav-desc"),
        container = document.querySelector(".favoriteContainer"),
        template = document.querySelector("#itemTemplate").content,
        closeButton = document.querySelector(".close");


let favorites = {};
    
function getThings(){
        
    fetch("./data.json")//Get the data from JSON file
        .then(res => res.json())//unpack the API response
        .then(data => {
            console.table(data);//Send to console
            favorites = data;
            })
        .catch(error => console.error(error));//find and report any errors into the console window
    }
        // get data on page load
        getThings();

function showData(){
    let modal = document.querySelector(".modal-panel");
    modal.style.display = "block";

    let key = this.dataset.key;
    let picture = document.querySelector(".fav-img");

    picture.querySelector("img").src =`images/${favorites[key].pic}`;
    thingName.textContent = favorites[key].name;
    thingDesc.textContent = favorites[key].description;
    thingFact.textContent = favorites[key].fact;
}

function closeModal(){
    let modal = document.querySelector(".modal-panel");
    modal.style.display = "none";
}


buttons.forEach(button => button.addEventListener("click", showData));
closeButton.addEventListener("click",closeModal);

})()