function getThings(){
        
    fetch("./data.json")//Get the data from JSON file
        .then(res => res.json())//unpack the API response
        .then(data => {
            console.table(data);//Send to console
            })
        .catch(error => console.error(error));//find and report any errors into the console window
    }
        // get data on page load
        getThings();