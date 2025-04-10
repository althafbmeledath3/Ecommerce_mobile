


let card = document.getElementById('productGrid')
let str = ""

async function loadData() {


    try{

        const response = await fetch('/api/load')

        const data = await response.json()
        console.log(data[0].image_arr[0])

        data.forEach(element => {

            str+=` <div class="card" id="card">
      <img src="${element.image_arr[0]}" alt="Mobile Image" />
      <div class="card-body">
        <h3>${element.name}</h3>
        <p class="price">₹${element.price}</p>
        <button>View Details</button>
      </div>
    </div>`
            
        });

        card.innerHTML = str
        

    }
    catch(err){
        console.log(err)
    }
    
}


loadData()