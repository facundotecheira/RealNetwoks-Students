const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {type:String,required:true},
  email:{type:String,required:true},
  studentNumber:{type:String,required:true},
  phoneNumber:{type:String,required:true}

})

const Studentmodel = mongoose.model('student',studentSchema)

module.exports = Studentmodel;