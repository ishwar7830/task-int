var json;
function time() {
    debugger
    setTimeout(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => console.log(json))

        // var jsondata = json;



    }, 3000);
    adData(json);
}
var data;
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        data = await response.json();

        // Now 'data' contains the parsed JSON response
        // console.log(data);

        // You can use the 'data' variable here for further processing
        // For example, if the response has an array of products, you can iterate over them
        // data.forEach(product => {
        //     // Do something with each product
        //     console.log(product);
        // });

        // Or you can pass the 'data' to another function for processing
        adData(data);
    } catch (error) {

    }
    // adData(data);
}


function adData(data) {
    debugger

    for (let index = 0; index < data.products.length; index++) {
        const element = data.products[index];
        var tablerows = document.getElementById("tablerows");
        var Ghayal = document.getElementById("Ghayal");

        var clone = tablerows.cloneNode(true);
        // clone.innerHTML='';
        var clonedDiv = tablerows;

        var td = tablerows.getElementsByTagName('td');

       td[0].innerHTML=data.products[index].id;
       td[1].innerHTML=data.products[index].brand;
       td[2].innerHTML=data.products[index].category;
       tablerows.appendChild(td);
    //    tablerows.appendChild(td[1]);

    //    tablerows.appendChild(td[2]);

    //    clone.appendChild(td);
        // var Brand = clonedDiv.getElementById("Brand");
        // var category = clonedDiv.getElementById("category");

        // id.innerHTML = data.id;
        // Brand.innerHTML = data.Brand;
        // category.innerHTML = data.category;

        Ghayal.appendChild(tablerows);



    }
}
fetchData();
// time();