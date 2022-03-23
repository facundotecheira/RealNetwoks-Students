import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import toasty from "../components/Toast";
import Swal from 'sweetalert2'

import Nav from './Nav'
import studentsAction from '../redux/action/studentsAction'

const ListStudents = () => {

    const [lista, setLista] = useState([])

    const Dispatch = useDispatch()

    const  students = useSelector(state =>state.studentsReducer.students)

    console.log(students)

    useEffect(() => {
        if(students.length>0){
            setLista(students)
        }else{
           getAllStudents() 
        }
        
    }, [students])

    const getAllStudents = async () => {
        let resultado = await Dispatch(studentsAction.getStudents())
        setLista(resultado.response) 
        
        
    }


    const confirmAlert = async (id) => {
        let resultado = await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (resultado.isConfirmed) {
            await Dispatch(studentsAction.deleteStudent(id))
            Swal.fire(
                'Deleted!',
                'Your comment has been deleted.',
                'success'
            )
        }

    }


    return (
        <>
            <Nav />
            {
                lista.length == 0 ? <h1 className="titleForm">no student registration</h1>
                :( 
                <h1 className='titleForm'>list of students</h1>,
                
                <div className='containerList'>
    
                    <table class="table table-dark table-hover">
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Student number</th>
                            <th>Phone number</th>
                            <th colSpan="2">Options</th>
                        </thead>
                        <tbody>
                            {
                                 lista.map((x) => {
    
                                    return (
                                        <tr>
                                            <td>{x.name}</td>
                                            <td>{x.email}</td>
                                            <td>{x.studentNumber}</td>
                                            <td>{x.phoneNumber}</td>
    
                                            <td>
                                                <Link className='btn btn-info' to={`/editstudent/${x._id}`}>
                                                    Edit
                                                </Link>
    
                                            </td>
                                            <td>
                                                <i className='btn btn-danger' onClick={() => confirmAlert(x._id)}>Delete</i>
                                            </td>
    
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>)
            }
           

        </>

    )

}

export default ListStudents