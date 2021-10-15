//imports

(() => {
const   ccrButton = document.querySelector("#first"),
        coffeeButton = document.querySelector("#second"),
        bopButton = document.querySelector("#third"),
        thingImg = document.querySelector(".fav-img"),
        thingName = document.querySelector(".fav-name"),
        thingFact = document.querySelector(".fav-fact"),
        thingDesc = document.querySelector(".fav-desc");
       

let things = {
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
}

//Create a new function called getThings (or something similar). 
//Do an initial fetch call, and build the buttons with the data inside that function. JUST the buttons - not the modal stuff.

//you would add something like this
//: things = data; (goes inside the second .then part => .then(data => { ...other stuff; things = data})
function getData(){
        
    fetch("./data.json")
    .then(res => res.json())//unpack the API response
    .then(data => {
        console.table(data);//Send to console

        

    })
    .catch(error => console.error(error));//find and report any errors

}
// get data on page load, and export to main.js file
getData();




ccrButton.addEventListener("click", buildCCR);

})()