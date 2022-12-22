const {Router}=require('express');
const { getAllStudents, createStudent, updateStudentById, getStudentById } = require('../controller/studentController');

const studentRouter=Router();


studentRouter.get("/student",getAllStudents)
studentRouter.get("/student/:id",getStudentById)

studentRouter.post("/student",createStudent)
studentRouter.put('/student/:id',updateStudentById)
studentRouter.delete('/student/:id',updateStudentById)





exports.studentRouter=studentRouter;







