import mongoose from "mongoose";



const mobileSchema = new mongoose.Schema({
    name:{type:String,required:true},
    brand:{type:String,required:true},
    rom:{type:String,required:true},
    ram:{type:String,required:true},
    price:{type:String,required:true},
    qty:{}
   
})


export default mongoose.model.Users || mongoose.model("Users",userSchema)


