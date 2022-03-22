import { Link } from "react-router-dom"
const Hero = () => {

    return (
        <div className="containerHero">
            <video className="video" src="./assets/education.mp4" autoPlay loop muted></video>
            <h1>Real Network Students</h1>
            <div className = "containerH3">
                <h3 className = "heroH3">Student management system.</h3>
                <h3>Manage in an agile way the students of your institution.</h3>
            </div>
            <div>
                <Link to= "/register" className = "buttonHero">GET STARTED</Link>
            </div>
        </div>
    )

}

export default Hero