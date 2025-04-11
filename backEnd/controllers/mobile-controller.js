import mobileSchema from "../models/mobile-model.js"


export const addMobile = async function addMobile(req,res) {

    console.log("Inside add mobile")

    console.log(req.body)
    
    try{

        const {name,brand,rom,ram,price,color,image_arr} = req.body

        if (!name || !brand || !rom || !ram|| !price || !color || !image_arr) {
            return res.status(404).send({ error: "please fill all fields" })
        }


        const data = await mobileSchema.create({ name, brand, rom, ram, price, color, image_arr });


        res.status(201).json("data Added Successfully")

    }
    catch(err){
        res.status(500).send({error:err})
    }
    
}


export const loadMobile = async function loadMobile(req,res){
   
    try{

        const data = await mobileSchema.find()
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send({error:err})
    }
}



export const previewLoad = async function previewLoad(req,res){

    const {id} = req.params
   
    try{

        const data = await mobileSchema.findById(id)
        

        if (!data) {
            return res.status(404).send({ error: 'Product not found' });
          }
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send({error:err})
    }
}




export const load_one = async function load_one(req,res){

    // console.log(req.params)

    const {id} = req.params

    console.log("Insisde loadone")
   
    try{

        const data = await mobileSchema.findById(id)
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send({error:err})
    }
}


export const edit = async function edit(req,res) {

    console.log("Inside edit mobile")

    // const{id} = req.params

    // console.log(req.body)
    
    // try{

    //     const {name,brand,rom,ram,price,color,image_arr} = req.body

    //     if (!name || !brand || !rom || !ram|| !price || !color || !image_arr) {
    //         return res.status(404).send({ error: "please fill all fields" })
    //     }


    //     const data = await mobileSchema.findByIdAndUpdate(id,{name, brand, rom, ram, price, color, image_arr },{new:true});


    //     res.status(201).json("data updated Successfully")

    // }
    // catch(err){
    //     res.status(500).send({error:err})
    // }
    
}



