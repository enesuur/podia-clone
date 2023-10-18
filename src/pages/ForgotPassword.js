

import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import { useState } from 'react';
export default function ForgotPassword() {

    const [email,setEmail] = useState('');

    function handleEmailChange(event){
        const value = event.target.value;
        setEmail(value);
    }
    return (
        <section className='forgot-password-section'>
            <div className='forgot-password container'>
                <div className='forgot-password-wrapper'>
                    <h1 className='forgot-header'>Reset Password</h1>
                    <p className='forgot-subheader'>We'll send you password reset instructions.</p>
                    <form>
                        <label htmlFor='user_forgot_email'>
                            Email
                            <input
                                className={email.match(/^[+\w.-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/) ? 'btn-forgot-password' : 'btn-invalid'}
                                type='text'
                                minLength={11}
                                maxLength={64}
                                pattern='^[+\w.-]+@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$'
                                required
                                autoFocus={true}
                                id='user_forgot_email'
                                onChange={handleEmailChange}
                            />
                        </label>
                        <button className='btn-forgot-password' >
                            <span>Send Reset email</span>
                        </button>
                    </form>
                    <div >
                        <span>Remember your password?</span>
                        <u>
                            <Link>Log in</Link>
                        </u>
                    </div>
                </div>
            </div>
        </section>
    )
};