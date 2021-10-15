//imports
import {getData} from "./components/loadData.js";

(() => {
const   ccrButton = document.querySelector("#first"),
        coffeeButton = document.querySelector("#second"),
        bopButton = document.querySelector("#third"),
        theTemplate = document.querySelector(".modal-panel");
        //modal = document.querySelector(".modal-panel").content;

function buildModal(info){
    let item = Object.keys(info);
        //item.forEach(favorite => {
            //let panel = theTemplate;
           // favoriteInfo = panel.firstElementChild.children;

           //I was trying to configure the above code ^ to work with my json file but I get some errors when changing things.
           //I cant figure out how to get this info to fill into the modal.

            favoriteInfo[0].querySelector('img').src = `images/${info[favorite].pic}`;
            favoriteInfo[1].querySelector.textContent = info[favorite].name;
            favoriteInfo[2].textContent = info[favorite].description;
            favoriteInfo[3].textContent = info[favorite].fact;

            theTemplate.appendChild(panel);
       // })
}

ccrButton.addEventListener("click", buildModal);


})()