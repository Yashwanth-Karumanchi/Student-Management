const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://0.0.0.0:27017/Studentsdb", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("Connection Successful")).catch((err)=>console.log(err))

const studentList = new mongoose.Schema({
    _id:Number,
    name:String,
    rollno:String,
    branch:String,
    email:String,
    phone:Number
})
const students = new mongoose.model("Student", studentList)

const createStudents=async(_id, name, rollno, branch, email, phone)=>{
    try {
        const student1 = new students({
            _id:_id,
            name:name,
            rollno:rollno,
            branch:branch,
            email:email,
            phone:phone
        })
        const result = await student1.save()
        return result
    } catch (error) {
        console.log(error)
    }
}

const readStudents=async()=>{
    try {
        const result = await students.find()
        return result
    } catch (error) {
        console.log(error)
    }
}

const updateStudents=async(_id, name, rollno, branch, email, phone)=>{
    try {
        const result = await students.findByIdAndUpdate({_id}, {$set:{name:name, rollno:rollno, branch:branch, email:email, phone:phone}})
        return result
    } catch (error) {
        console.log(error)
    }
}

const deleteStudents=async(_id)=>{
    try {
        const result = await students.deleteOne({_id})
        return result
    } catch (error) {
        console.log(error)
    }
}
module.exports.createStudents = createStudents
module.exports.readStudents = readStudents
module.exports.updateStudents = updateStudents
module.exports.deleteStudents = deleteStudents