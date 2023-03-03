import { Router } from "express";

const router = Router()

router
    .get('/', () => {console.log('Hola')});
    // .get('/:studentid')
    // .post('/')
    // .patch('/:studentid')
    // .delete('/:studentid');

export default router;

// app.post('/register', (req, res) => {
//     const sqlQuery = 'call registerCourse(?,?)';
//     connection.query(sqlQuery, [1,1], (err, row) => {
//         if(err) console.log(err)
//     })

//     res.status(200).end()

// })