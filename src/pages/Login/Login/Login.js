import React from 'react';
import useFirebase from '../../../Hooks/useFirebase/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const { signInWithGoogle, setUser } = useFirebase();

    const googleHandler = e => {
        e.preventDefault();
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
            })
    }

    return (
        <div style={{ backgroundColor: '#e7edf7' }}>
            <Navigation></Navigation>

            <div className='p-5 text-light mx-auto mt-5 rounded border border-primary mb-5' style={{ width: '400px', backgroundColor: '#3d4f5f' }}>

                <form >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-warning"

                    >Login</button>
                </form>
                <p className='m-3'>----------------------------------------</p>
                <button
                    onClick={googleHandler}
                    className="btn text-light" style={{ backgroundColor: '#ed4c21' }}>Sign In with Google</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;