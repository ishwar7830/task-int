

let data ;
async function deleteRow(id){
    console.log("deleting: ",id)
    data.splice(id-1, 1);
    console.log("data now : ", data)
    let table= document.getElementById("Ghayal")
    table.innerHTML= ""
    table.innerHTML+=`<tr class="bg-primary text-white ">
    <th>ID</th>
    <th>Title</th>
    <th>Description</th>
    <th>Category</th>
    <th>Price</th>
    <th>Actions</th>
</tr>`

        data.map((product, index)=> {
            
            table.innerHTML +=`
                    <tr id="tablerows-${product.id}" class="border">
                        <td>${product.id}</td>
                        <td> ${product.title}</td>
                        <td>${product.description}</td>
                        <td>${product.category}</td>
                       
                        <td>${product.price}</td>
                        <td>
                        <button class="btn-danger btn " onclick='deleteRow(${product.id})'>Delete</button>
                        </td>
                    </tr>
            `
        })
}

async function fetchData() {
    try {
        let URL = "https://fakestoreapi.com/products"
        const response = await fetch(URL);
         data = await response.json();
        console.log("Data : " , data);
       
        let username; 
        let userobject = JSON.parse(sessionStorage.getItem("user-object"))
        username= userobject.username
        document.getElementById("welcome-note").innerText = `Hi, ${username}`
        let table= document.getElementById("Ghayal")

        data.map((product, index)=> {
            
            table.innerHTML +=`
                    <tr id="tablerows-${product.id}" class="border">
                        <td>${product.id}</td>
                        <td> ${product.title}</td>
                        <td>${product.description}</td>
                        <td>${product.category}</td>
                       
                        <td>${product.price}</td>
                        <td>
                        <button class="btn-danger btn " onclick='deleteRow(${product.id})'>Delete</button>
                        </td>
                    </tr>
            `
        })
    } catch (error) {
        console.log("error :", error)
    }
    
}



fetchData();
