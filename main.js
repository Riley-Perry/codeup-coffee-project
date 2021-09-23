"use strict"

function renderCoffee(coffee) {
    var html = '<div class="col-md-6 d-flex mb-3">';
    html += '<h3 id="name">' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';

    for(var i = coffees.length - 1; i >= 0; i--) {

        html += renderCoffee(coffees[i]);
    }
    return html;

}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast2 = roastSelection2.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast2) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeBody.innerHTML = renderCoffees(filteredCoffees)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeBody = document.querySelector('#coffees');
var submitButton1 = document.querySelector('#submit1');
let submitButton2 = document.querySelector("#submit2");
let roastSelection1 = document.querySelector("#roast-selection1");
let roastSelection2 = document.querySelector('#roast-selection2');

coffeeBody.innerHTML = renderCoffees(coffees);

submitButton1.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', updateCoffees);

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


const input = document.querySelector('input[type="search"]');
 const name = document.querySelector("#name");
input.addEventListener('search', () => {
    coffees.forEach(coffee => {
        if (input.value.toUpperCase() === coffee.name.toUpperCase()) {
            coffeeBody.innerHTML = renderCoffee(coffee);
        }
    })
})

// const input = document.querySelector('input[type="search"]');
// const log = document.getElementById('name');
// var a, coffeeValue, filter;
// input.addEventListener('input', () =>{
//     for(var i =0; i < name.length; i++){
//         a = coffees[i].input[0];
//         coffeeValue = a.textContent || a.innerText;
//         if (coffeeValue.toUpperCase().indexOf(filter) > -1) {
//             coffees[i].style.display = "";
//         } else{
//             coffees[i].style.display = "none";
//         }
//         }
//
// });



const input2 = document.querySelector('input[type="search"]')

input.addEventListener('search1')





// Loop through all list items, and hide those who don't match the search query
// for (i = 0; i < coffees.length; i++) {
//     a = coffees[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//     } else {
//         li[i].style.display = "none";
//     }
// }
// Tip: Remove toUpperCase() if you want to perform a case-sensitive search.
//Insert pics for each cup of coffee
