const { Student } = require("../model/student");

exports.getAllStudents= async (req,res,next)=>{
    try{
        const students=await Student.find();
        return res.json(students);
    }catch{
        return res.status(400).json({message:"Something went wrong"})
    }
   
}


exports.getStudentById= async (req,res,next)=>{
    try{
        const student=await Student.findOne({_id:req.params.id});
        return res.json(student);
    }catch{
        return res.status(400).json({message:"Either id is wrong or something went wrong."})
    }
    
}

exports.createStudent=async (req,res,next)=>{
    const data = req.body
    console.log(data)

    const newStudent=new Student(data)
    try{
        await newStudent.save()
        return res.json({message:"New student Created."});
    }catch{
        return res.status(400).json({message:"Something went wrong."})
    }
}

exports.updateStudentById=async (req,res,next)=>{
    const id=req.params.id
    const data=req.body

    console.log(data)
 
    try{
        await Student.updateOne({_id:id},{$set:data})
        return res.json({mesage:"Student updated successfully."})
    }catch{
        return res.status(400).json({message:"Bad request."})
    }
}


exports.deleteStudentById=async (req,res,next)=>{
    const id=req.params.id
    try{
        await Student.deleteOne({_id:id})
        return res.json({mesage:"Student deleted successfully."})
    }catch{
        return res.status(400).json({mesage:"Something went wrong."})
    }
}

