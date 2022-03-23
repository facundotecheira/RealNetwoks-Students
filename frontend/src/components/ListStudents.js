import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Nav from './Nav'
import studentsAction from '../redux/action/studentsAction'

const ListStudents = () => {

    const [lista, setLista] = useState([])

    const Dispatch = useDispatch()

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        let resultado = await Dispatch(studentsAction.getStudents())
        setLista(resultado.response)
    }

    return (
        <>
            <Nav />
            <h1 className='titleForm'>list of students</h1>
            <div className='containerList'>
               
                <table class="table table-dark table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Student number</th>
                        <th>Phone number</th>
                        <th colSpan="2">Opciones</th>
                    </thead>
                    <tbody>
                        {
                            lista && lista.map((x) => {

                                return (
                                    <tr>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td>{x.studentNumber}</td>
                                        <td>{x.phoneNumber}</td>
                                        
                                        <td>
                                <Link className='btn btn-info' to={`/editNotas/${x._id}`}>
                                    Editar
                                </Link>

                            </td>
                            <td>
                                <i className='btn btn-danger' 
                                // onClick={() => confirmAlert(x._id)}
                                >Eliminar</i>
                            </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>

    )

}

export default ListStudents