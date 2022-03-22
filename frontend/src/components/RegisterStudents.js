import Nav from "./Nav"
const RegisterStudents = () =>{

    const HandleSubmit = (e) =>{

    }

    return(
        <>
            <Nav/>
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