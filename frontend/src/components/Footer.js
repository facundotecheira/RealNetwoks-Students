import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="navegation">
                    <Link to="/">Home</Link>
                    <Link to="/register">Register a student</Link>
                    <Link to="/list">list of students</Link>
                   
                </div>

                <div className="copy">
                    Copyright © Techeira Facundo
                </div>
            </div>

        </footer>
    )
}

export default Footer