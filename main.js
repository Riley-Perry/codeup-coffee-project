"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6 d-flex mb-3 p-2">';
    html += '<img src=' + coffee.imgURL + ' class="image" height="30px" mr-2 />';
    html += '<h3 id="name" class="ml-2">' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';


    return html;
}

function renderCoffees(coffees) {
    var html = '';
    if(localStorage.getItem("newCoffee")){
        coffees.push(JSON.parse(localStorage.getItem('newCoffee')))
    }
    for(var i = coffees.length - 1; i >= 0; i--) {

        html += renderCoffee(coffees[i]);
    }
    return html;

}


function pushFunction(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var roastAndName = {
        id: coffees.length += 1,
        name :  inputCoffee.value,
        roast : roastSelection2.value
    }
    localStorage.setItem("newCoffee", JSON.stringify(roastAndName));
    var newestCoffee = JSON.parse(localStorage.getItem('newCoffee'));
    coffees.pop();
    coffees.push(newestCoffee);
    coffeeBody.innerHTML = renderCoffees(coffees);
}



function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let coffeeName = search.value;
    console.log(coffeeName);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().indexOf(coffeeName.toUpperCase()) > -1) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    coffeeBody.innerHTML = renderCoffees(filteredCoffees)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', imgURL: "images/img.png"},
    {id: 2, name: 'Half City', roast: 'light', imgURL: "images/img.png"},
    {id: 3, name: 'Cinnamon', roast: 'light', imgURL: "images/img.png"},
    {id: 4, name: 'City', roast: 'medium', imgURL: "images/img_1.png"},
    {id: 5, name: 'American', roast: 'medium', imgURL: "images/img_1.png"},
    {id: 6, name: 'Breakfast', roast: 'medium', imgURL: "images/img_1.png"},
    {id: 7, name: 'High', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 8, name: 'Continental', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 9, name: 'New Orleans', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 10, name: 'European', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 11, name: 'Espresso', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 12, name: 'Viennese', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 13, name: 'Italian', roast: 'dark', imgURL: "images/img_2.png"},
    {id: 14, name: 'French', roast: 'dark', imgURL: "images/img_2.png"},
];

var coffeeBody = document.querySelector('#coffees');
var submitButton1 = document.querySelector('#submit1');
let submitButton2 = document.querySelector("#submit2");
let roastSelection1 = document.querySelector("#roast-selection1");
let roastSelection2 = document.querySelector('#roast-selection2');
let search = document.querySelector("#searchCoffee");
let inputCoffee = document.querySelector("#input-coffee");


coffeeBody.innerHTML = renderCoffees(coffees);

submitButton1.addEventListener('click', searchCoffees);
submitButton2.addEventListener('click', pushFunction);

roastSelection1.addEventListener("change", function() {
    let selectedRoast = roastSelection1.value;
    let html = '';
    coffees.forEach(coffee => {
        if (selectedRoast === coffee.roast) {
            console.log(renderCoffee(coffee));
            coffeeBody.innerHTML = html += renderCoffee(coffee);

        } else if (selectedRoast === "all") {
            coffeeBody.innerHTML = renderCoffees(coffees);
        }
    })
})

search.addEventListener('keyup', searchCoffees)




