

import { NavLink } from 'react-router-dom';
import './AuthNavbar.css';
export default function AuthNavbar(){

    return(
        <nav className='container'>
            <h2 className='auth-nav-header'>
                <NavLink to={'/'}>
                    Xodia
                </NavLink>
            </h2>
            <ul className='auth-nav-items'>
                <li>
                    <NavLink to={'/signup'}>
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/signin'}>Log in</NavLink>
                </li>
            </ul>
        </nav>
    )
}