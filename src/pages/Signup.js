

import { Link } from 'react-router-dom';
import './Signup.css';
export default function Signup() {


    return (
        <section className='signup-section'>
            <div className='signup container'>
                <div className='signup-wrapper'>
                    <h1>Sign up for Xodia</h1>
                    <p className='signup-subtitle'>Join for free forever. Upgrade anytime!</p>
                    <form>
                        <label htmlFor='user_name'>
                            Name
                            <input
                                type='text' placeholder='e.g. Jean-Luc Picard'
                                autofocus='autofocus'
                                name='user_name'
                                id='user_name'
                            ></input>
                        </label>
                        <label htmlFor='user_email'>
                            Email
                            <input
                                type='email'
                                required
                                name='user_email'
                                id='user_email'
                                pattern='^[+\w.-]+@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$'
                            ></input>
                        </label>
                        <label htmlFor='user_password'>
                            Password
                            <input
                                placeholder='••••••••'
                                minlength='6'
                                maxlength='65'
                                required
                                type='password'
                                name='user_password'
                                id='user_password'
                            >
                            </input>
                            <small>Minimum 6 characters</small>
                        </label>
                        <button className='btn-signup'>
                            Get Started
                        </button>
                    </form>
                    <p className='have-an-account'>Already have an account? <Link to={'/signin'}>Log in.</Link></p>
                </div>
            </div>
        </section>
    )
}