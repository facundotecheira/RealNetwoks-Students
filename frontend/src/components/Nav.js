import {Link} from 'react-router-dom'
const Nav = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Real<span class="colorLogo">Networks-Students </span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-5">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Register a student</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/list">list of students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav