const axios = require('axios')

const studentsAction = {

    addStudent:(data) =>{
        return async(dispatch)=>{
            try {
                const student = await axios.post('http://localhost:4000/api/student',data)
                return {response: student.data}
            } catch (error) {
                
            }
        }
    },

    getStudents:() =>{
        return async()=>{
            try {
                const students = await axios.get('http://localhost:4000/api/student')
                return {response: students.data.response}
            } catch (error) {
                
            }
        }
    }

}

export default studentsAction