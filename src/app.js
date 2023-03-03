import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config()

import studentRoute from './routes/student.js' //Acomodar el crud y despues intentar añadir el barril
import connection from './tools/connection.js';
connection.connect();

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({'msg': "Hola mundo"})
})

app.use('/student' ,studentRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

