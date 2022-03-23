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
        return async(dispatch)=>{
            try {
                const students = await axios.get('http://localhost:4000/api/student')
                if (students.data.response !== 'database connection error'){
                    dispatch({type:'STUDENTS',payload: students.data.response})
                }
            
                return {response: students.data.response}
            } catch (error) {
                
            }
        }
    },

    getOneStudent: (id) =>{
        return async () =>{
            try {
                const student = await axios.get(`http://localhost:4000/api/student/${id}`)
                return {response: student.data.response}
            } catch (error) {
                
            }
        }
    },

    updateStudent: (id,data) =>{

        return async (dispatch) =>{
            try {
                const student = await axios.put(`http://localhost:4000/api/student/${id}`,data)
                if (student.data.response !== 'database connection error'){
                    dispatch({type:'STUDENTS',payload: student.data.response})
                }
                return {response: student.data.response}
            } catch (error) {
                
            }
        }
        
    },

    deleteStudent: (id) =>{
        return async (dispatch) =>{
            try {
                const student = await axios.delete(`http://localhost:4000/api/student/${id}`)
                if (student.data.response !== 'database connection error'){
                    dispatch({type:'STUDENTS',payload: student.data.response})
                }
                return {response: student.data.response}
            } catch (error) {
                
            }
        }
    }

}

export default studentsAction