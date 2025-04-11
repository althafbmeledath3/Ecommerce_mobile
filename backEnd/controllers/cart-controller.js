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
