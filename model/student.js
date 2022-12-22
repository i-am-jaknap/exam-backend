const mongoose=require("mongoose")


const studentSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    address:String,
    dob:mongoose.Schema.Types.Date
},{versionKey:false,timestamps:true})


exports.Student=mongoose.model("student",studentSchema);