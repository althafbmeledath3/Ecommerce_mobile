



const urlParams = new URLSearchParams(window.location.search);
const mobileId = urlParams.get('id');


// document.querySelectorAll('.thumb-img').forEach(img => {
//     img.addEventListener('mouseenter', () => {
//       document.getElementById('preview-image').src = img.src;
//     });
//   });


  async function previewLoad() {
    try {
      const response = await fetch(`/api/preview/${mobileId}`);
      const data = await response.json();
  
      let container = document.getElementById('preview-container');
  
      container.innerHTML = `
        <div class="thumbnail-section">
          <img src="https://m.media-amazon.com/images/I/91W42b8YW+L._AC_UF1000,1000_QL80_.jpg" class="thumb-img" alt="Thumb 1">
          <img src="https://m.media-amazon.com/images/I/71p7-bRcb1L._AC_UF894,1000_QL80_.jpg" class="thumb-img" alt="Thumb 2">
          <img src="https://m.media-amazon.com/images/I/61xb8nM8j+L._AC_UF894,1000_QL80_.jpg" class="thumb-img" alt="Thumb 3">
        </div>
        
        <div class="image-section">
          <div class="menu-wrapper">
            <div class="menu-icon" id="menu-icon">
              <i class="fas fa-ellipsis-v"></i>
            </div>
            <div class="menu-dropdown" id="menu-dropdown">
              <a href="edit.html?id=${mobileId}"><button class="menu-btn">Edit</button></a>
              <button class="menu-btn delete">Delete</button>
            </div>
          </div>
          <img src="https://m.media-amazon.com/images/I/91W42b8YW+L._AC_UF1000,1000_QL80_.jpg" alt="Mobile Image" id="preview-image">
        </div>
  
        <div class="details-section">
          <h2 id="preview-name">Samsung Galaxy S24</h2>
          <p class="brand"><strong>Brand:</strong> Samsung</p>
          <p class="specs"><strong>RAM:</strong> 8GB | <strong>ROM:</strong> 128GB</p>
          <p class="colors"><strong>Available Colors:</strong> Black, Blue</p>
          <p class="price" id="preview-price">₹79,999</p>
  
          <div class="buttons">
            <button class="buy-btn">Buy Now</button>
            <button class="cart-btn"><i class="fas fa-cart-plus"></i> Add to Cart</button>
          </div>
        </div>
      `;
  
      document.getElementById("menu-icon").addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent event bubbling
        const dropdown = document.getElementById("menu-dropdown");
        dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
      });
  
      document.addEventListener("click", (e) => {
        const icon = document.getElementById("menu-icon");
        const dropdown = document.getElementById("menu-dropdown");
        if (!icon.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.style.display = "none";
        }
      });
  
    
      document.querySelectorAll('.thumb-img').forEach(img => {
        img.addEventListener('mouseenter', () => {
          document.getElementById('preview-image').src = img.src;
        });
      });
  
    } catch (error) {
      console.log(error);
    }
  }
  

previewLoad()







