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

export {getData}