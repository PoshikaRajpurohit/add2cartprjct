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
})


let loadData = () => {
    let cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = ""; 

    let data = JSON.parse(localStorage.getItem('product')) || [];

    data.forEach((card, index) => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
          <h3>${card.name}</h3>
          <p>${card.category}</p>
          <p>${card.description}</p>
          <h5>${card.price}</h5>
          <button class="add-btn">Add to Cart</button>
        `;
        cardContainer.appendChild(cardElement);
    });
};
loadData()


