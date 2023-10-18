



import { Link } from 'react-router-dom';
import './Signin.css';
export default function Signin() {
    
    return (
        <section className='signin-section'>
            <div className='signin container'>
                <div className='signin-wrapper'>
                    <h1>Log in to Podia</h1>
                    <form>
                        <label htmlFor='user_email'>
                            Email
                            <input
                                type='email'
                                required
                                name='user_email'
                                id='user_email'
                                autoFocus={true}
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
                        </label>
                        <button className='btn-signin'>
                            <span>Login</span>
                        </button>
                    </form>
                    <div className='forgot-your-password'>
                        <p>Forgot your password</p>
                        <u><Link to={'/forgot-password'}>Reset it</Link></u>
                    </div>
                </div>
            </div>
        </section>
    )
}