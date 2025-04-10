


const urlParams = new URLSearchParams(window.location.search);
const mobileId = urlParams.get('id');


document.querySelectorAll('.thumb-img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      document.getElementById('preview-image').src = img.src;
    });
  });


async function previewLoad(){

    try{

        
        const response = await fetch(`/api/preview/${mobileId}`)
        
        const data = await response.json()
        
        let container = document.getElementById('preview-container')

        
        let str = ""

        data.forEach((item)=>{
            str+=``
        })
        
    }

    catch(error){
        console.log(error)
    }

}


previewLoad()





