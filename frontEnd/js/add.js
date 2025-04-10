

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



//function to convert image  to base64

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

let images = document.getElementById('image_display');

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



//function to send data to the backend

async function sendBackEnd(e) {


    e.preventDefault(); 

    //   const form = e.target;
    //   const formData = new FormData(form);

    //   console.log("Form Data:");
    //   for (const [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    //   }

   

    let name = document.getElementById('mobile-name').value
    let brand = document.getElementById('brand').value
    let rom = document.getElementById('rom').value
    let ram = document.getElementById('ram').value
    let price = document.getElementById('price').value
    // let qty = document.getElementById('qty').value
    // let color = document.getElementById('color').value

    const files = document.getElementById('images').files;
    let image_arr = [];

    for (const file of files) {
        const base64 = await convertBase64(file);
        image_arr.push(base64);
    }

    let data = {name,brand,rom,ram,price,color,image_arr}

    // request from post api
    try{

        let options = {
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(data)
        }

        const response = await fetch('/api/add',options)

        if(response.status==201){
            alert("Data Addded Successfully")
        }
        else{
            alert("Please fill all the fields")
            console.log(response.error)
        }

    }

    catch(error){
        console.log(error)

    }
   



    
}


