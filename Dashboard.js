
async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        console.log(data);
       
        let table= document.getElementById("Ghayal")
        data.map((product, index)=> {
            
            table.innerHTML +=`
                    <tr id="tablerows-${product.id}" class="border">
                        <td>${product.id}</td>
                        <td> ${product.title}</td>
                        <td>${product.description}</td>
                        <td>${product.category}</td>
                        <td>${product.price}</td>
                    </tr>
            `
        })
    } catch (error) {
        console.log("error :", error)
    }
    
}



fetchData();
