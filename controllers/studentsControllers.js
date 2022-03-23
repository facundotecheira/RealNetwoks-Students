const Students = require('../models/Students')

const studentControllers = {
    addStudent: async (req, res) => {
        let { email } = req.body

        try {
            const student = await Students.findOne({ email: email })
            if (student) {
                return res.json({ success: 'false', response: 'user already exists' })
            } else {
                const newStudent = await new Students(req.body).save()
                return res.json({ response: 'user successfully created' })
            }

        } catch (error) {
            res.json({ response: 'database connection error' })
        }

    },

    getStudents: async (req, res) => {
        try {
            const students = await Students.find()
            return res.json({ response: students })
        } catch (error) {
            res.json({ response: 'database connection error' })
        }
    },

    getOneStudent: async (req, res) => {

        let { id } = req.params

        try {
            const student = await Students.findOne({ _id: id })
            return res.json({ response: student })
        } catch (error) {
            res.json({ response: 'database connection error' })

        }
    },

    updateStudent: async (req, res) => {
        let { id } = req.params
        let student = req.body
        let actualizado

        try {
            actualizado = await Students.findOneAndUpdate({ _id: id }, student, { new: true })
            return res.json({ response: actualizado })
        } catch (error) {
            res.json({ response: 'database connection error' })

        }
    },

    deleteStudent: async (req, res) => {
        let { id } = req.params
        let students

        try {
            await Students.findOneAndDelete({ _id: id })
            students = await Students.find()
            return res.json({ response: students })
        } catch (error) {
            res.json({ response: 'database connection error' })

        }
    }

}


module.exports = studentControllers