let cart =[];

const products=[
    { name: "Chicken", vegetarian:false, glutenFree:true,organic:false, price: 9.99},
    { name: "Broccoli", vegetarian:true, glutenFree:true,organic:true, price: 1.99},
    { name: "Bread", vegetarian:true, glutenFree:false,organic:false, price: 2.35},
    { name: "Salmon", vegetarian:false, glutenFree:true,organic:true, price: 10.00},
    { name: "Apples", vegetarian:true, glutenFree:true,organic:true, price: 3.00},
    { name: "Cheese", vegetarian:true, glutenFree:true,organic:false, price: 4.25},
    {name: "Milk", vegetarian:true, glutenFree:true,organic:false, price: 2.50},
    {name: "Eggs", vegetarian:true, glutenFree:true,organic:false, price: 2.75},
    {name: "Gluten-Free Pasta", vegetarian:true, glutenFree:true,organic:false, price: 3.50},
    {name: "Orange Juice", vegetarian:true, glutenFree:true,organic:false, price: 3.00}
];

function openMenu(tabName){
    const tabs = document.getElementsByClassName("tabContent");
    for(let i=0; i<tabs.length; i++){
        tabs[i].style.display="none";
    }
    const clickedTab=tabName;
    document.getElementById(clickedTab).style.display="block";

    if (clickedTab==="products"){
        showProducts();
    }

}

function showProducts(){
    const diet=document.getElementById("diet").value;
    const productType = document.getElementById("productType").value;
    let filteredProducts=products.filter(product =>{
        if (diet === "vegetarian" && !product.vegetarian) {
            return false;
        }
        if (diet === "gluten-free" && !product.glutenFree) {
            return false;
        }
        if (productType === "organic" && !product.organic) {
            return false;
        }
        if (productType === "non-organic" && product.organic) {
            return false;
        }
        return true;
    });

    filteredProducts.sort((a,b) => a.price - b.price);
    const productDiv=document.getElementById("showProducts");
    productDiv.innerHTML="";

    filteredProducts.forEach((product,index) =>{
        productDiv.innerHTML += `
        <input type="checkbox" id="product${index}"value="${product.name}">
        ${product.name} - $${product.price.toFixed(2)}<br>
        `;
    });

}

function addToCart(){
    const productDiv=document.getElementById("showProducts");
    const checkbox=productDiv.getElementsByTagName("input");
    for (let i=0; i<checkbox.length; i++){
        if (checkbox[i].checked){
            const productName=checkbox[i].value;
            const product=products.find(p => p.name===productName);
            cart.push(product);
        }
    }
    displayCart();
}

function displayCart(){
    const cartDiv=document.getElementById("showCart");
    cartDiv.innerHTML="";
    let total=0;
    cart.forEach((item) =>{
        cartDiv.innerHTML += `${item.name} - $${item.price.toFixed(2)}<br>`;
        total += item.price;
    });
    cartDiv.innerHTML += `<strong>Total: $${total.toFixed(2)}</strong>`;
}



    
