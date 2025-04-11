



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
      let str = ""
      data.color.forEach((item)=>{
        str+=`${item.color} Quantity ${item.quantity}, `
      })

      console.log(str)
      let container = document.getElementById('preview-container');
  
      container.innerHTML = `
        <div class="thumbnail-section">
          <img src=${data.image_arr[0]} class="thumb-img" alt="Thumb 1">
          <img src=${data.image_arr[1]} class="thumb-img" alt="Thumb 2">
          <img src=${data.image_arr[2]} class="thumb-img" alt="Thumb 3">
        </div>
        
        <div class="image-section">
          <div class="menu-wrapper">
            <div class="menu-icon" id="menu-icon">
              <i class="fas fa-ellipsis-v"></i>
            </div>
            <div class="menu-dropdown" id="menu-dropdown">
              <a href="edit.html?id=${mobileId}"><button class="menu-btn">Edit</button></a>
              <button class="menu-btn delete" onClick='delete_data("${mobileId}")' >Delete</button>
            </div>
          </div>
          <img src=${data.image_arr[0]} alt="Mobile Image" id="preview-image">
        </div>
  
        <div class="details-section">
          <h2 id="preview-name">${data.name}</h2>
          <p class="brand"><strong>Brand:</strong> ${data.brand}</p>
          <p class="specs"><strong>RAM:</strong> ${data.ram} | <strong>ROM:</strong>${data.rom}</p>
          <p class="colors"><strong>Available Colors:</strong> ${str.slice(0, -2)}</p>
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


async function delete_data(id){
  
  try{

    const response = await fetch(`/api/delete/${id}`)
    const data = response.json()

    if(response.status==200){
      alert("Data Deleted Succesfully")
      window.location.href = "/"
    }
  }
  catch(err){

    alert("Unable to delete Data ,Server Error")
    console.log(err)
  }
}






console.log()