import { useParams, useNavigate } from 'react-router-dom'
import { useRef,useEffect,useState } from 'react';
import { useDispatch} from 'react-redux'
import toasty from "./Toast"
import Nav from './Nav';
import studentsAction from '../redux/action/studentsAction'

const EditStudent =  () => {

    const params = useParams()
    const Dispatch = useDispatch()

    let navigate = useNavigate()

    const name = useRef()
    const email = useRef()
    const studentNumber = useRef()
    const phoneNumber = useRef()
    
    const [lista, setLista] = useState([])

    let { id } = params



    useEffect(()=>{
        getOne()
    },[])

    const getOne = async () =>{

        let resultado = await Dispatch(studentsAction.getOneStudent(id))
        setLista(resultado.response)
        
    }



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

        let resultado = await Dispatch(studentsAction.updateStudent(id,data))

        if(resultado.response == 'database connection error'){
            return toasty('error',resultado.response) 
        }else{
            toasty('success','Student updated correctly') 
            return navigate("/list")
        }
         
        
    }



    return (
        <>
            <Nav />
            {
               lista !== 'database connection error' ?
               <div className="containerFormNotas" onSubmit={HandleSubmit}>
            <form className="form">
                <input ref={name} type= "text" defaultValue={lista.name}></input>
                <input ref={email} type="email" defaultValue={lista.email}></input>
                <input ref={studentNumber} type= "text"defaultValue={lista.studentNumber}></input>
                <input ref={phoneNumber} type= "text" defaultValue={lista.phoneNumber}></input>
                <input type="submit" className="formSubmit" value="Update student"></input>
            </form>
            </div>:
            <h1 className='titleForm'>No datos found</h1>
            }
             
            
            
        </>
    )
}

export default EditStudent