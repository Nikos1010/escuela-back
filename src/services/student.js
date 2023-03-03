import poolSQL from '../tools/connection.js'

const findAll = async () => {
    const sqlQuery = 'call spGetAllStudents()'
    const [rows] = await poolSQL.query(sqlQuery)
    return rows[0]
}

const findByOne = async (id) => {
    const sqlQuery = 'call spGetStudent(?)'
    const [rows] = await poolSQL.query(sqlQuery, [id])
    return rows[0]
}

const update = async (id, name) => {
    const sqlQuery = 'call spUpdateStudent(?,?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [id, name])
    return ResultSetHeader
}

const insert = async (name) => {
    const sqlQuery = 'call spRegisterStudent(?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [name])
    return ResultSetHeader
}

const deleteStudent = async (id) => {
    const sqlQuery = 'call spDeleteStudent(?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [id])
    return ResultSetHeader
}

const registerCourse = async (studentId, courseId) => {
    const sqlQuery = 'call registerCourse(?,?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [studentId, courseId])
    return ResultSetHeader
}

const getRegisterCourse = async (studentId) => {
    const sqlQuery = 'call getStudentCourse(?)'
    const [rows] = await poolSQL.query(sqlQuery, [studentId])
    return rows[0]
}

const deleteRegisterCourse = async (studentId, courseId) => {
    const sqlQuery = 'call deleteRegisterCourse(?,?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [studentId, courseId])
    return ResultSetHeader
}

const deleteAllRegisterStudent = async (studentId) => {
    const sqlQuery = 'call spDeleteAllRegisterStudent(?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [studentId])
    return ResultSetHeader
}

export {
    findAll,
    findByOne,
    update,
    insert,
    deleteStudent,
    registerCourse,
    getRegisterCourse,
    deleteRegisterCourse,
    deleteAllRegisterStudent
}