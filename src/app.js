import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config()

import studentRoute from './routes/student.js'
import courseRoute from './routes/course.js'
import professorRoute from './routes/professor.js'


const app = express()

app.use(cors());
app.use(express.json())

app.get('/api', (req, res) => {
    res.json({'msg': "Bienvenidos a la API"})
})

app.use('/api/student' ,studentRoute)
app.use('/api/course' ,courseRoute)
app.use('/api/professor' ,professorRoute)

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

