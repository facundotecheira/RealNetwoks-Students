import Nav from "./Nav"
const RegisterStudents = () =>{

    const HandleSubmit = (e) =>{
        e.preventDefault()
        console.log('hola hola')
    }

    return(
        <>
            <Nav/>
            <h1 className="titleForm">Register a new student</h1>
            <div className="containerFormNotas" onSubmit={HandleSubmit}>
            <form className="form">
                <input type= "text" placeholder="Enter you Name"></input>
                <input type="email" placeholder="Enter you Email"></input>
                <input type= "text" placeholder="Enter you Student number"></input>
                <input type= "text" placeholder="Enter you phone number"></input>
                <input type="submit" className="formSubmit" value="Register student"></input>
            </form>
            </div>
        </>
    )
}

export default RegisterStudents