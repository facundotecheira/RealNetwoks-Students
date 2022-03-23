const Router = require('express').Router()

const studentControllers = require('../controllers/studentsControllers')

const {addStudent,getStudents,getOneStudent,updateStudent,deleteStudent} = studentControllers

// Routes

Router.route('/student')
.get(getStudents)
.post(addStudent)

Router.route('/student/:id')
.get(getOneStudent)
.put(updateStudent)
.delete(deleteStudent)

module.exports = Router