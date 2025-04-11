import mongoose from "mongoose";



const cartSchema = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    brand:{type:String,required:true},
    ram:{type:String,required:true},
    price:{type:String,required:true},
    selected_color:{type:String,required:true},
    qty:{type:String,required:true},})


export default mongoose.model.Cart || mongoose.model("Cart",cartSchema)

