import poolSQL from '../tools/connection.js'

const findAll = async () => {
    const sqlQuery = 'call spGetAllCourses()'
    const [rows] = await poolSQL.query(sqlQuery)
    return rows[0]
}

const findByOne = async (id) => {
    const sqlQuery = 'call spGetCourse(?)'
    const [rows] = await poolSQL.query(sqlQuery, [id])
    return rows[0]
}

const update = async (id, name) => {
    const sqlQuery = 'call spUpdateCourse(?,?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [id, name])
    return ResultSetHeader
}

const insert = async (name) => {
    const sqlQuery = 'call spRegisterCourse(?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [name])
    return ResultSetHeader
}

const deleteCourse = async (id) => {
    const sqlQuery = 'call spDeleteCourse(?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [id])
    return ResultSetHeader
}

export {
    findAll,
    findByOne,
    update,
    insert,
    deleteCourse
}