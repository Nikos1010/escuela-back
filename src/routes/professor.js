import { Router } from "express";
import { createProfessor, delProfessor, getAllProfessors, getProfessor, updateProfessor } from "../controllers/professor.js";

const router = Router()

router
    .get('/', getAllProfessors)
    .get('/:id', getProfessor)
    .post('/', createProfessor)
    .patch('/:id', updateProfessor)
    .delete('/:id', delProfessor);

export default router;