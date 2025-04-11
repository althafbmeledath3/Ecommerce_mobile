import cartModel from "../models/cart-model.js";



export const addCart = async function addCart(req,res){

    try{
        // const {name,price,selected_color} = req.body
        
        const data = await cartModel.create(req.body)

        res.status(200).send(data)
    }

    catch(err){

        res.status(500).json({error:err})
    }
    
}


export const loadCart = async function loadCart(req,res){

    try{
       
        
        const data = await cartModel.find()

        res.status(200).send(data)
    }

    catch(err){

        res.status(500).json({error:err})
    }
    
}

export const deleteCart = async function deleteCart(req,res){

    try{
       
        
        const data = await cartModel.deleteMany({});


        res.status(200).send(data)
    }

    catch(err){

        res.status(500).json({error:err})
    }
    
}



















