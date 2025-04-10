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
let img_arr = []
document.getElementById('images').addEventListener('change', async (e) => {
    const files = e.target.files;
    for (const file of files) {
        const base64 = await convertBase64(file);
        str+=`<img src=${base64}></img><br>`
        
    }
    images.innerHTML = str
});



//function to send data to the backend

async function sendBackEnd() {

    let name = document.getElementById('mobile-name')
    let brand = document.getElementById('brand')
    let rom = document.getElementById('rom')
    let ram = document.getElementById('ram')
    let price = document.getElementById('price')
    let qty = document.getElementById('qty')
    let color = document.getElementById('color')


    
}


