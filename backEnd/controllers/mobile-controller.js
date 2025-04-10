import mobileSchema from "../models/mobile-model.js"


export const addMobile = async function addMobile(req,res) {

    console.log("Inside add mobile")
    
    try{

        const {name,brand,rom,ram,price,qty,color,image_arr} = req.body

        if (!name || !brand || !rom || !ram|| !price || !qty || !color || !image_arr) {
            return res.status(404).send({ error: "please fill all fields" })
        }


        const data = await mobileSchema.create({ name, brand, rom, ram, price, qty, color, image_arr });


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








