import { Component } from 'react'
import { Link, NavLink } from "react-router-dom"
import img2 from "../../img/logo-nav.webp"

class Navbar extends Component {
    render() {
        return (
          <nav id="main-nav" className="navbar navbar-expand-lg fixed-top ">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="frist-img">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                  <img src={img2} width="30px" alt="img in home" />
                  Breast Cancer Detection
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item position-relative">
                    <NavLink
                      className="nav-link active text-light"
                      aria-current="page"
                      to="Home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item ms-lg-4 position-relative">
                    <NavLink className="nav-link text-light" to="/Symptoms">
                      Symptoms
                    </NavLink>
                  </li>
                  <li className="nav-item ms-lg-4 position-relative">
                    <NavLink className="nav-link text-light" to="Treatment">
                      Treatment
                    </NavLink>
                  </li>
                  <li className="nav-item ms-lg-4 position-relative">
                    <NavLink className="nav-link text-light" to="FAQs">
                      FAQs
                    </NavLink>
                  </li>
                  {/* <li className="nav-item ms-lg-4 position-relative">
                    <NavLink className="nav-link text-light" to="">
                      Contact
                    </NavLink>
                  </li> */}
                  <li className="nav-item ms-lg-4 position-relative">
                    <NavLink className="nav-link text-light" to="Cheek">
                      Check
                    </NavLink>
                  </li>
                  <li className="nav-item ms-lg-4 position-relative">
                    <NavLink className="nav-link text-light" to="Login">
                      DashBord
                    </NavLink>
                  </li>
                  <button className="go  mx-4 btn btn-outline-light">
                    <NavLink to="Signup">Signup</NavLink>
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar