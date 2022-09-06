import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginInitiate, googleSignInInitiate } from '../redux/actions';
import "./Login.css";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const { email, password } = state
    const { currentUser } = useSelector(state => state.user);
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            history.push("/");
        }

    }, [currentUser, history])
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.priventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({
            email: "",
            password: ""
        })
    }
    const handleGoggleSignIn = () => {
        dispatch(googleSignInInitiate)
    }
    const handleFbSignIn = () => {

    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    return (
        <div>
            <div id='logreg-forms'>
                <form className='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAligh: "center" }}>
                        Sign in
                    </h1>
                    <div className='social-login'>
                        <button className='btn google-btn btn-danger ' type='button' onClick={handleGoggleSignIn}>
                            <span >
                                <i className='fab fa-google-plus-g ' > </i> Sign in with Google+
                            </span>
                        </button>
                        <button className='btn facebook-btn btn-primary ' type='button' onClick={handleFbSignIn}>
                            <span>
                                <i className="fab fa-facebook-f" > </i> Sign in with facebook
                            </span>
                        </button>

                    </div>
                    <p style={{ textAlign: "center" }}>OR</p>
                    <input
                        type='email'
                        id='inputEmail'
                        className='form-control'

                        placeholder='Email Address'
                        name='email'
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type='password'
                        id='inputPassword'
                        className='form-control'

                        placeholder='password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <button className='btn btn-secondary btn-block' type='submit'>
                        <i className='fas fa-sign-in-alt'></i>   Sign In</button>
                    <hr />
                    <p>Don't have an account</p>
                    <Link to='/register'>
                        <button className='btn btn-primary btn-block' type='button' id='btn-signup'>
                            <i className='fas fa-user-plus'></i>Sign up New account
                        </button>
                    </Link>
                </form>

            </div>
        </div>
    )
}

export default Login