import { Router } from "express";
import { createCourse, delCourse, getAllCourses, getCourse, updateCourse } from "../controllers/course.js";

const router = Router()

router
    .get('/', getAllCourses)
    .get('/:courseId', getCourse)
    .post('/', createCourse)
    .patch('/:courseId', updateCourse)
    .delete('/:courseId', delCourse);

export default router;