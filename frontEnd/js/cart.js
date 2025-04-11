
// Dummy items (load once if cart is empty)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cart = [
    {
      name: "iPhone 15",
      price: 80000,
      image: "https://via.placeholder.com/100x100?text=iPhone+15",
      quantity: 1,
    },
    {
      name: "Samsung Galaxy S23",
      price: 75000,
      image: "https://via.placeholder.com/100x100?text=Galaxy+S23",
      quantity: 1,
    },
    {
      name: "OnePlus 12",
      price: 60000,
      image: "https://via.placeholder.com/100x100?text=OnePlus+12",
      quantity: 1,
    },
  ];
  localStorage.setItem("cart", JSON.stringify(cart));
}

const cartContainer = document.getElementById("cartContainer");
const totalAmount = document.getElementById("totalAmount");

function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalAmount.textContent = "₹0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <div class="cart-controls">
          <button onclick="updateQuantity(${index}, -1)">➖</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)">➕</button>
          <button onclick="removeItem(${index})">❌ Remove</button>
        </div>
        <p><strong>Total: ₹${itemTotal}</strong></p>
      </div>
    `;

    cartContainer.appendChild(itemDiv);
  });

  totalAmount.textContent = `₹${total}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQuantity(index, change) {
  const newQty = cart[index].quantity + change;
  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = newQty;
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// Initial render
renderCart();
