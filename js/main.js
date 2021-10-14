//imports

(() => {

function getData(){
    
    fetch("../data.json")
    .then(res => res.json()) //unpack the API response
    .then(data => {
        console.log(data);
    })
    //find and report any errors
    .catch(error => console.error(error));
}

//get the data upon page load
getData();
})()