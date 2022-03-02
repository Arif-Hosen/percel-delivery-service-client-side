import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from './../../../Hooks/useFirebase/useFirebase';
import './Navigation.css'

// color code: #ed4c21
const Navigation = () => {
    const { logOut, user } = useFirebase();

    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand fs-2" to='/home'><span style={{ color: '#ed4c21' }}>P</span>DS</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlink-style">
                            <li className="nav-item ms-3">
                                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link active" aria-current="page" to='/about'>About Us</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link active" aria-current="page" to='/mypercel'>My percel</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav '>
                            {user.email ?
                                <>


                                    <li className='nav-item mt-1 text-warning bg-dark rounded border ms-2 p-1'><span>{user.displayName}</span></li>
                                    <li className="nav-item">

                                        <Link
                                            onClick={logOut}
                                            className="nav-link active" to='/login'>Logout</Link>

                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/login'>Login</Link>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;