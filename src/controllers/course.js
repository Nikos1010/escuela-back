import { deleteCourse, findAll, findByOne, insert, update } from "../services/course.js"
import { notFoundData } from "../middleware/notFoundFile.js"

const getAllCourses = async (req, res) => {
    const courses = await findAll()

    const { content, statusCode } = notFoundData(courses)
    
    res.status(statusCode).json(content)
}

const getCourse = async (req, res) => {
    const id = req.params.courseId

    const course = await findByOne(id)

    const { content, statusCode } = notFoundData(course)
    
    res.status(statusCode).json(content)
}

const createCourse = async (req, res) => {
    const {courseName} = req.body
    
    const result = await insert(courseName)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const updateCourse = async (req, res) => {
    const id = req.params.courseId
    const { courseName } = req.body

    const result = await update(id, courseName)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

const delCourse = async (req, res) => {
    const id = req.params.courseId
    
    const result = await deleteCourse(id)

    const statusCode = result.affectedRows ? 204 : 400

    res.status(statusCode).end()
}

export {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    delCourse
}