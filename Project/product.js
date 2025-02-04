// DAY-1


let pname=document.querySelector("#pname")
let pcategory=document.querySelector("#pcategory")
let pdesc=document.querySelector("#pdesc")
let pprice=document.querySelector("#pprice")
let addpro=document.querySelector("#addpro")


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





