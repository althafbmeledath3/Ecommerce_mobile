import mongoose from "mongoose";



const mobileSchema = new mongoose.Schema({
    name:{type:String,required:true},
    brand:{type:String,required:true},
    rom:{type:String,required:true},
    ram:{type:String,required:true},
    price:{type:String,required:true},
    qty:{type:String,required:true},
    color:{type:[String],required:true},
    image_arr:{type:[String],required:true}
   
})


export default mongoose.model.Mobiles || mongoose.model("Mobiles",mobileSchema)


