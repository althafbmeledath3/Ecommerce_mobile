const urlParams = new URLSearchParams(window.location.search);
const mobileId = urlParams.get('id');
let images = document.getElementById('image_display');

let color = [];

    function addColor() {
      const name = document.getElementById("colorName").value.trim();
      const qty = parseInt(document.getElementById("colorQty").value.trim());

      if (!name || isNaN(qty) || qty <= 0) {
        alert("Please enter a valid color name and quantity.");
        return;
      }

      color.push({ color: name, quantity: qty });
      updateColorList();

      // Clear inputs
      document.getElementById("colorName").value = "";
      document.getElementById("colorQty").value = "";
    }

    function updateColorList() {
      const list = document.getElementById("colorList");
      list.innerHTML = "";

      color.forEach((c, index) => {
        const li = document.createElement("li");
        li.textContent = `${c.color} - ${c.quantity}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.onclick = () => {
          colors.splice(index, 1);
          updateColorList();
        };
        li.appendChild(removeBtn);
        list.appendChild(li);
      });

      // Update hidden input
      document.getElementById("colorData").value = JSON.stringify(color);
    }



async function loadData() {
  const response = await fetch(`/api/loadOne/${mobileId}`);
  const data = await response.json();

  console.log(data);

  // Fill inputs
  document.getElementById('mobile-name').value = data.name;
  document.getElementById('brand').value = data.brand;
  document.getElementById('rom').value = data.rom;
  document.getElementById('ram').value = data.ram;
  document.getElementById('price').value = data.price;
  images.innerHTML = `<img src=${data.image_arr[0]}></img>`

  // Load color data
  if (data.color && Array.isArray(data.color)) {
    color = data.color; // 
    updateColorList();  // 
  }
}

loadData();


function updateColorList() {
    const list = document.getElementById("colorList");
    list.innerHTML = "";
  
    color.forEach((c, index) => {
      const li = document.createElement("li");
      li.textContent = `${c.color} - ${c.quantity}`;
      
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.onclick = () => {
        color.splice(index, 1);
        updateColorList();
      };
      
      li.appendChild(removeBtn);
      list.appendChild(li);
    });
  
    // Update hidden input
    document.getElementById("colorData").value = JSON.stringify(color);
  }
  



  function convertBase64(file){

    return new Promise((resolve,reject)=>{
        //create object of file reader class
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        //when reading is done
        fileReader.onload = ()=>{
            resolve(fileReader.result)
        }

        //if error then reject with error
        fileReader.onerror = ()=>{
            reject(fileReader.error)
        }
    })
}



//store the inner html of image dsiplay
let str = ""

document.getElementById('images').addEventListener('change', async (e) => {
    const files = e.target.files;
    for (const file of files) {
        const base64 = await convertBase64(file);
        str+=`<img src=${base64}></img><br>`
        

    }
    
    images.innerHTML = str
});



async function sendBackEnd(e) {
    e.preventDefault();
  
    let name = document.getElementById('mobile-name').value;
    let brand = document.getElementById('brand').value;
    let rom = document.getElementById('rom').value;
    let ram = document.getElementById('ram').value;
    let price = document.getElementById('price').value;
  
    const files = document.getElementById('images').files;
    let image_arr = [];
  
    for (const file of files) {
      const base64 = await convertBase64(file);
      image_arr.push(base64);
    }
  
    // 'color' is already populated globally
    let data = { name, brand, rom, ram, price, color, image_arr };

    console.log(data)
    try {
      let options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data)
      };
  
      const response = await fetch(`/api/edit/${mobileId}`, options);

      console.log(response)
      if (response.status == 201) {
        alert("Data Updated Successfully");
      } else {
        alert("Please fill all the fields");
       
      }
    } catch (error) {
      console.log(error);
    }
  }
  
