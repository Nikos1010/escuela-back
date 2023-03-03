import { deleteStudent, findAll, findByOne, insert, update } from "../services/student.js"
import { notFoundData } from "../middleware/notFoundFile.js"

const getAllStudents = async (req, res) => {
    const students = await findAll()

    const { content, statusCode } = notFoundData(students)
    
    res.status(statusCode).json(content)
}

const getStudent = async (req, res) => {
    const id = req.params.studentId

    const student = await findByOne(id)

    const { content, statusCode } = notFoundData(student)
    
    res.status(statusCode).json(content)
}

const createStudent = async (req, res) => {
    const {studentName} = req.body
    
    const create = await insert(studentName)

    const statusCode = create.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const updateStudent = async (req, res) => {
    const id = req.params.studentId
    const { studentName } = req.body

    const result = await update(id, studentName)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const delStudent = async (req, res) => {
    const id = req.params.studentId
    
    const result = await deleteStudent(id)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

export {
    getAllStudents,
    getStudent,
    createStudent,
    updateStudent,
    delStudent
}