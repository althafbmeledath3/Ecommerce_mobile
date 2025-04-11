let cart = [];

async function loadCart() {
  try {
    const response = await fetch(`/api/loadCart`);
    cart = await response.json();

    console.log("Fetched Cart Data:", cart);

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
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";

        itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />

          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p><strong>Brand:</strong> ${item.brand}</p>
            <p><strong>RAM:</strong> ${item.ram}</p>
            <p><strong>Selected Color:</strong> ${item.selected_color}</p>
            <p><strong>Price:</strong> ₹${item.price}</p>
            <p><strong>Available Stock:</strong> ${item.qty}</p>
            <div class="cart-controls">
              <button onclick="updateQuantity(${index}, -1)">➖</button>
              <span>${item.quantity || 1}</span>
              <button onclick="updateQuantity(${index}, 1)">➕</button>
              <button onclick="removeItem(${index})">❌ Remove</button>
            </div>
            <p><strong>Total: ₹${itemTotal}</strong></p>
          </div>
        `;

        cartContainer.appendChild(itemDiv);
      });

      totalAmount.textContent = `₹${total}`;
    }

    window.updateQuantity = function (index, change) {
      const newQty = (cart[index].quantity || 1) + change;

      if (newQty <= 0) {
        cart.splice(index, 1);
      } else if (newQty <= cart[index].qty) {
        cart[index].quantity = newQty;
      } else {
        alert(`Only ${cart[index].qty} in stock!`);
      }

      renderCart();
    };

    window.removeItem = function (index) {
      cart.splice(index, 1);
      renderCart();
    };

    // Initial render
    renderCart();
  } catch (err) {
    console.error("Error loading cart:", err);
    document.getElementById("cartContainer").innerHTML = "<p>Failed to load cart data.</p>";
  }
}

loadCart();



async function deleteCart() {
    try {
      const response = await fetch('/api/deleteCart');
  
      if (response.ok) {
        alert("Thanks for your purchase! 🛍️");
        window.location.href = "/";  // Redirect to homepage after alert
      } else {
        alert("Checkout failed!");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong during checkout.");
    }
  }
  
