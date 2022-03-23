import Nav from "./Nav"
import { useRef } from "react"
import {useDispatch} from "react-redux"
import toasty from "./Toast"
import studentsAction from '../redux/action/studentsAction'

const RegisterStudents = () =>{

    const name = useRef()
    const email = useRef()
    const studentNumber = useRef()
    const phoneNumber = useRef()

    const Dispatch = useDispatch()

   


    const HandleSubmit = async (e) =>{
        e.preventDefault()
        if(name.current.value == "" || email.current.value == "" || studentNumber.current.value == "" || phoneNumber.current.value == ""){
            return toasty('error','The fields cannot be empty')
        }

        const data = {

            name: name.current.value,
            email: email.current.value,
            studentNumber: studentNumber.current.value,
            phoneNumber: phoneNumber.current.value
        }

        let resultado = await Dispatch(studentsAction.addStudent(data))
        
        if(resultado.response.success){
           return toasty('error',resultado.response.response) 
        }else{

            name.current.value = ""
            email.current.value = ""
            studentNumber.current.value = ""
            phoneNumber.current.value = ""
            return toasty('success',resultado.response.response) 
        }   
        
    }

    return(
        <>
            <Nav/>
            <h1 className="titleForm">Register a new student</h1>
            <div className="containerFormNotas" onSubmit={HandleSubmit}>
            <form className="form">
                <input ref={name} type= "text" placeholder="Enter you Name"></input>
                <input ref={email} type="email" placeholder="Enter you Email"></input>
                <input ref={studentNumber} type= "text" placeholder="Enter you Student number"></input>
                <input ref={phoneNumber} type= "text" placeholder="Enter you phone number"></input>
                <input type="submit" className="formSubmit" value="Register student"></input>
            </form>
            </div>
        </>
    )
}

export default RegisterStudents