import React from 'react'
// import img3 from "../../img/Poorti-17"
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
export default function Login() {
    return (
        <>
        <div className="home-img vh-100 d-flex justify-content-evenly align-item-cente">
        <div className="bac-blur w-50 px-3 d-flex justify-content-evenly flex-column">
            <h2>"Welcome Where Care Meet technology."</h2>
            <div className="home-img-input">
            <form className="w-100 ">
                
                <input type="email" className="form-control w-50 m-auto my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                <div className="mb-3">
                <input type="password" className="form-control  w-50 m-auto" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button className="alon1 w-25 mx-auto fs-5">
                <NavLink to="Login" className="text-decoration-none">login</NavLink>
                </button>
                <button className="alon3 w-25 mx-auto fs-6">
                                <NavLink to="singnup.html" className="text-decoration-none">
                                    {/* <i class="fa-solid fa-envelope"></i> */}
                    forget password?</NavLink>
                </button>
            </form>
            <h2 className='text-decoration-underline'>
            <NavLink to="singnup.html">
                    Create Account
            </NavLink>
            </h2>
        </div>
        </div>
        </div>
        </>
    )
}
