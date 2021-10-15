//imports
//This import will ensure the data is loaded and able to use in this file on page load
//import {getThings} from "./components/loadData.js";

(() => {
const   ccrButton = document.querySelector("#first"),
        coffeeButton = document.querySelector("#second"),
        bopButton = document.querySelector("#third"),
        thingImg = document.querySelector(".itemImg"),
        thingName = document.querySelector(".itemTitle"),
        thingFact = document.querySelector(".itemFact"),
        thingDesc = document.querySelector(".itemDesc"),
        container = document.querySelector(".favoriteContainer"),
        template = document.querySelector("#itemTemplate").content;

    
function getThings(){
        
    fetch("./data.json")//Get the data from JSON file
        .then(res => res.json())//unpack the API response
        .then(data => {
            console.table(data);//Send to console
            buildModal(data);
            })
        .catch(error => console.error(error));//find and report any errors into the console window
    }
        // get data on page load
        getThings();

              
function buildModal(info){
    //This will take the information from the data object
    const favorites = Object.keys(info);

    favorites.forEach(favorite => {
        //Make a copy of the template container
        let modal = template.cloneNode(true);
        //Entrance point of the template content
        let information = modal.firstElementChild.children;

        //Pop in the info for my favorite things.
        information[0].textContent = info[favorite].name;
        information[1].textContent = info[favorite].desc;
        information[2].textContent = info[favorite].fact;
        information[3].querySelector("img").src =`images/${info[favorite].pic}`;

        container.appendChild(modal)
    })

}

//ccrButton.addEventListener("click", getThings);


})()