// DAY-1


let pname=document.querySelector("#pname")
let pcategory=document.querySelector("#pcategory")
let pdesc=document.querySelector("#pdesc")
let pprice=document.querySelector("#pprice")
let addpro=document.querySelector("#addpro")
let formdata=document.querySelector(".form-data")
let backbtn=document.querySelector("#backbtn")
let card="";

addpro.addEventListener("submit",(e) =>{
    e.preventDefault()
    let newproduct={
        name:pname.value,
        category:pcategory.value,
        description:pdesc.value,
        price:pprice.value
    }  
    let product=JSON.parse(localStorage.getItem('product'))||[];
    product.push(newproduct);
    localStorage.setItem("product",JSON.stringify(product));
    addpro.reset()
    loadData()
    alert("Product added successfully");
})


let loadData = () => {
    let cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = ""; 

    let data = JSON.parse(localStorage.getItem('product')) || [];

    data.forEach((card, index) => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
          <h3>Product-Name=${card.name}</h3>
          <p>Category=${card.category}</p>
          <p>Description=${card.description}</p>
          <h5>Price=${card.price}</h5>
          <button id="addbtn-${index}" class="add-btn" onclick="addToCart(${index})">Add to Cart</button>
        `;
        cardContainer.appendChild(cardElement);
    });

};

loadData()

// DAY-2(ADD TO CART)
const addToCart = (index) => {
    const data = JSON.parse(localStorage.getItem('product')) || [];
    let product = data[index];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartButton();
    alert("Product added to cart!");
};

const updateCartButton = () => {
    const cartButton = document.getElementById('cart-btn');
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartButton.textContent = `Cart (${cartData.length})`;
};

const showCart = () => {
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items-container');

    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = ''; 

    cartData.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>${product.description}</p>
            <h5>${product.price}</h5>
            <button class="removebtn" onclick="removeData(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    cartContainer.style.display ='block'; 
    formdata.style.display='none';
   
};

const clearCart = () => {
    localStorage.removeItem('cart');
    updateCartButton();
    document.getElementById('cart-items-container').innerHTML = ''; 
    document.getElementById('cart-container').style.display = 'none';
};

document.getElementById('cart-btn').addEventListener('click', showCart);


const removeData = (index) => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartData));
    updateCartButton();
    showCart();
    alert("Product removed successfully!");
};

loadData();
updateCartButton();



