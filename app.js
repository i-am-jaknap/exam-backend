const express=require("express")
const mongoose=require('mongoose')
const {studentRouter}=require('./route/studentRoute')
const cors=require('cors')


const dbConnection=mongoose.connect("mongodb://localhost:27017/student-db");
const port=process.env.PORT || 3001;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(studentRouter)


dbConnection.then(()=>{
    console.log("Database connected successfully")

    app.listen(port,()=>{
         console.log(`Server is up on port ${port}.`)    
    })
})
