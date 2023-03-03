import poolSQL from '../tools/connection.js'

const findAll = async () => {
    const sqlQuery = 'call spGetAllProfessors()'
    const [rows] = await poolSQL.query(sqlQuery)
    return rows[0]
}

const findByOne = async (id) => {
    const sqlQuery = 'call spGetProfessor(?)'
    const [rows] = await poolSQL.query(sqlQuery, [id])
    return rows[0]
}

const update = async (id, name, courseId) => {
    const sqlQuery = 'call spUpdateProfessor(?,?,?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [id, name, courseId])
    return ResultSetHeader
}

const insert = async (name, courseId) => {
    const sqlQuery = 'call spRegisterProfessor(?,?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [name, courseId])
    return ResultSetHeader
}

const deleteProfessor = async (id) => {
    const sqlQuery = 'call spDeleteProfessor(?)'
    const [ResultSetHeader] = await poolSQL.query(sqlQuery, [id])
    return ResultSetHeader
}

export {
    findAll,
    findByOne,
    update,
    insert,
    deleteProfessor
}