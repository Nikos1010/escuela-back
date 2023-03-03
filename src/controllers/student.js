import { deleteAllRegisterStudent, deleteRegisterCourse, deleteStudent, findAll, findByOne, getRegisterCourse, insert, registerCourse, update } from "../services/student.js"
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

const getRegisterCourses = async (req, res) => {
    const id = req.params.studentId

    const courses = await getRegisterCourse(id)

    const { content, statusCode } = notFoundData(courses)
    
    res.status(statusCode).json(content)
}

const registerCourseController = async (req, res) => {
    const { studentId, courseId } = req.body

    const result = await registerCourse(studentId, courseId)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const delRegister = async (req, res) => {
    const { studentId, courseId } = req.body
    
    const result = await deleteRegisterCourse(studentId, courseId)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const delAllRegister = async (req, res) => {
    const id = req.params.studentId;

    const result = await deleteAllRegisterStudent(id)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

export {
    getAllStudents,
    getStudent,
    createStudent,
    updateStudent,
    delStudent,
    registerCourseController,
    getRegisterCourses,
    delRegister,
    delAllRegister
}