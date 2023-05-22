const exp = require('express')
const cors = require('cors')
const toConnect = require('./students')
const app = exp()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.listen(3000, ()=>console.log("Server Started"))

app.post('/addStudents', async (req, res)=>{
    try {
        let result = await toConnect.createStudents(parseInt(req.body._id), req.body.name, req.body.rollno, req.body.branch, req.body.email, parseInt(req.body.phone))
    } catch (error) {
        console.log(error)
    }
})

app.get('/readStudents', async(req, res) => {
    let result = await toConnect.readStudents()
    res.json(result)
})

app.put('/updateStudents', async(req, res) => {
    try {
        let result = await toConnect.updateStudents(parseInt(req.body._id), req.body.name, req.body.rollno, req.body.branch, req.body.email, parseInt(req.body.phone))
    } catch (error) {
        console.log(error)
    }
})

app.delete('/deleteStudents/:_id', async(req, res)=>{
    try {
        let result = await toConnect.deleteStudents(parseInt(req.params._id))
    } catch (error) {
        console.log(error)
    }
})