import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
export default function Signup() {
    return (
        <>
        <div className="home-img">
        <div className="bac-blur w-50 px-3 d-flex justify-content-evenly flex-column">
        <h2>"Welcome Where Care Meet technology."</h2>
        <div className="home-img-input">
        <form className="w-100">
            <div className="mb-3">
            <label className='lable-icon'>
                <FontAwesomeIcon icon={faUser} />
            </label>
            <input type="text" className="form-control w-50 m-auto mb-3" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="User Name" />
                                
            <label  className='lable-icon'>
            <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Email address" />
            
            <label  className='lable-icon'>
            <FontAwesomeIcon icon={faLock} />                        
            </label>
            
            <input type="password" className="form-control  w-50 m-auto" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button className="alon1 w-25 mx-auto mb-3 fs-5">
            <a href="login.html" className="text-decoration-none">singup</a>
            </button>
            <button className="alon2 w-25 mx-auto fs-5">
            <a href="login.html" className="text-decoration-none">Login</a>
            </button>
        </form>
        </div>
        </div>
    </div>
</>
    )
}
