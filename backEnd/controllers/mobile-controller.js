import mobileSchema from "../models/mobile-model.js"


export const addMobile = async function addMobile(req,res) {

    console.log("Inside add mobile")
    
    try{

        const {name,brand,rom,ram,price,qty,color,img_arr} = req.body

        if (!name || !brand || !rom || !ram|| !price || !qty || !color || !img_arr) {
            return res.status(404).send({ error: "please fill all fields" })
        }

        res.status(201).json("data Added Successfully")

    }
    catch(err){
        res.status(500).send({error:err})
    }
    
}