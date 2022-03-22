import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="navegation">
                    <Link to="/">Home</Link>
                    <Link to="/cities">Cities</Link>
                    <a href="#a">Sign in</a>
                    <a href="#a">Sign up</a>
                </div>

                <div className="copy">
                    Copyright © Techeira Facundo
                </div>
            </div>

        </footer>
    )
}

export default Footer