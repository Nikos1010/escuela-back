import mysql from 'mysql';
import * as dotenv from 'dotenv' //Por ahora esta funcionando asi DOTENV, configurar mañana
dotenv.config()

const { DB_USER, DB_NAME, DB_HOST, DB_PASSWORD } = process.env

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
})

export default connection