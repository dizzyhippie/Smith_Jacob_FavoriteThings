//imports
//This import will ensure the data is loaded and able to use in this file on page load
//import {getThings} from "./components/loadData.js";

(() => {
const   ccrButton = document.querySelector("#first"),
        coffeeButton = document.querySelector("#second"),
        bopButton = document.querySelector("#third"),
        buttons = document.querySelectorAll("button"),
        thingName = document.querySelector(".fav-name"),
        thingFact = document.querySelector(".fav-fact"),
        thingDesc = document.querySelector(".fav-desc"),
        container = document.querySelector(".favoriteContainer"),
        template = document.querySelector("#itemTemplate").content;


let favorites = {
        "CCR": {
            "name":"Creedence Clearwater Revival",
            "description":"The greatest band to ever do it.",
            "fact":"While their musical style is Louisiana Swamp Rock, the band members are from California.",
            "pic":"CCR.png"
        },
        "Coffee": {
            "name":"Iced Shaken Espresso",
            "description":"A dangerous amount of caffeine.",
            "fact":"It is expensive.",
            "pic":"Coffee.png"
        },
        "BOP": {
            "name":"Birds of Paradise",
            "description":"The favourite of my plant collection, a beautiful addition to my living room.",
            "fact":"The flower resembles a bird, and symbolizes ultimate freedom.",
            "pic":"BOP.png"
        }
};
    
function getThings(){
        
    fetch("./data.json")//Get the data from JSON file
        .then(res => res.json())//unpack the API response
        .then(data => {
            console.table(data);//Send to console
            //buildModal(data);
            })
        .catch(error => console.error(error));//find and report any errors into the console window
    }
        // get data on page load
        getThings();
          
//function buildModal(info){
    //Take the information from the data object
    //const favorites = Object.keys(info);

    //favorites.forEach(favorite => {
        //Make a copy of the template container
        //let modal = template.cloneNode(true);
        //Entrance point of the template content
        //let information = modal.firstElementChild.children;

        //container.appendChild(modal);
    //})
//}

function showData(){
    let key = this.dataset.key;
    let picture = document.querySelector(".fav-img");

    picture.querySelector("img").src = `images/${favorites[key].pic}`;
    thingName.textContent = favorites[key].name;
    thingFact.textContent = favorites[key].fact;
    thingDesc.textContent = favorites[key].description;
}

buttons.forEach(button => button.addEventListener("click", showData));

})()