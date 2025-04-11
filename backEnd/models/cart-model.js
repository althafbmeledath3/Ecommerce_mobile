import mongoose from "mongoose";



const cartSchema = new mongoose.Schema({
    selected_color:{type:String,required:true}})


export default mongoose.model.Cart || mongoose.model("Cart",cartSchema)

