//imports
import {getData} from "./components/loadData.js";

(() => {
    const theTeam = document.querySelector("#team-members"),
            theTemplate = document.querySelector("#bio-template").content;
            
    function buildTeam(info){
        
        let team = Object.keys(info);
        
        team.forEach(person => {
            let panel = theTemplate.cloneNode(true),
            memberInfo = panel.firstElementChild.children;        

            memberInfo[0].querySelector('img').src = `images/${info[person].pic}`;
            memberInfo[1].textContent = info[person].name;
            memberInfo[2].textContent = info[person].description;
            memberInfo[3].textContent = info[person].fact;

            //put it into the information section on the HTML page
            theTeam.appendChild(panel);

        })

    }

})();