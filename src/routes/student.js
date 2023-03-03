import { Router } from "express";
import { createStudent, delStudent, getAllStudents, getStudent, updateStudent, registerCourseController, getRegisterCourses, delRegister, delAllRegister } from "../controllers/student.js";

const router = Router()

router
    .get('/register/:studentId', getRegisterCourses)
    .post('/deleteReg', delRegister)
    .post('/register', registerCourseController)
    .delete('/register/:studentId', delAllRegister)
    .get('/', getAllStudents)
    .get('/:studentId', getStudent)
    .post('/', createStudent)
    .patch('/:studentId', updateStudent)
    .delete('/:studentId', delStudent);

export default router;
