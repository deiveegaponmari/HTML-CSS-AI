const addedProducts = [];
function addCart(button) {
  const card = button.closest(".product-card");
  //console.log("card-----", card);
  const name = card.querySelector("h3").innerText;
  const priceText = card.querySelector("p").innerText;
  const price = parseFloat(priceText.replace("$", ""));
 // console.log("price----", price);
  const qty = parseInt(card.querySelector(".qty").value);
  if (!qty || qty <= 0) {
    alert("Enter Valid Quantity");
    return;
  }
  const product = {
    name: name,
    price: price,
    quantity: qty,
  };
  addedProducts.push(product);
 // console.log("added products------", addedProducts);
  displayCart();
}

function displayCart() {
  const mainsection = document.getElementById("main-section");
  let totalamount = 0;
  addedProducts.forEach((item) => {
    const total = item.price * item.quantity;
    totalamount += total;
    console.log("total---------", total);
    const cart = document.createElement("section");
    cart.innerHTML = `
   <h3>Product name:${item.name}</h3>
   <h3>Price:${item.price}</h3>
   <h3>Quantity:${item.quantity}</h3>
   <h3>Total Price:${total}</h3>`;
    mainsection.appendChild(cart);
  });
}
