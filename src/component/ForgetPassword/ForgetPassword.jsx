import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ForgetPassword() {
    return (
        <>
        <div className="home-img text-left">
    <div className="bac-blur w-50 px-3 d-flex justify-content-evenly flex-column">
        <h2>"Welcome Where Care Meet technology."</h2>
        <div className="home-img-input">
        <form className="w-100">
            <div className="mb-3">
            <label  className="text-light w-50 ">Email</label>
            <input  type="text" className="form-control w-50 m-auto mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
            <label className="w-50  text-left text-light">New password</label>
            <input type="email" className="form-control w-50 m-auto mb-3" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="Creat password" />
            <label className="w-50 text-light">Confirm password</label>
            <input type="password" className="form-control  w-50 m-auto" id="exampleInputPassword1" placeholder="Repeat password" />
            </div>
            <button className="alon1 w-25 mx-auto mb-3 fs-5">
            <NavLink to="login.html" className="text-decoration-none">Reset Password</NavLink>
            </button>
            </form>
        </div>
    </div>
    </div>
        </>
    )
}
