import { Router } from "express";
import { createStudent, delStudent, getAllStudents, getStudent, updateStudent } from "../controllers/student.js";

const router = Router()

router
    .get('/', getAllStudents)
    .get('/:studentId', getStudent)
    .post('/', createStudent)
    .patch('/:studentId', updateStudent)
    .delete('/:studentId', delStudent);

export default router;
