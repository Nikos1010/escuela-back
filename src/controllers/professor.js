import { deleteProfessor, findAll, findByOne, insert, update } from "../services/professor.js"
import { notFoundData } from "../middleware/notFoundFile.js"

const getAllProfessors = async (req, res) => {
    const professors = await findAll()

    const { content, statusCode } = notFoundData(professors)
    
    res.status(statusCode).json(content)
}

const getProfessor = async (req, res) => {
    const id = req.params.id

    const course = await findByOne(id)

    const { content, statusCode } = notFoundData(course)
    
    res.status(statusCode).json(content)
}

const createProfessor = async (req, res) => {
    const { professorName, courseId } = req.body
    
    const result = await insert(professorName, courseId)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const updateProfessor = async (req, res) => {
    const id = req.params.id
    const { professorName, courseId } = req.body

    const result = await update(id, professorName, courseId)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const delProfessor = async (req, res) => {
    const id = req.params.id
    
    const result = await deleteProfessor(id)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

export {
    getAllProfessors,
    getProfessor,
    createProfessor,
    updateProfessor,
    delProfessor
}