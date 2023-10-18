import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Signin from '../pages/Signin';
import './Rootlayout.css';
import { useEffect, useState } from 'react';
import AuthNavbar from '../components/AuthNavbar';
export default function RootLayout() {
    const [isAuthSection, setIsAuthSection] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.split('/');
        if (currentPath[currentPath.length -1 ] === 'signin' || currentPath[currentPath.length -1] === 'signup') {
            setIsAuthSection(true);
        } else {
            setIsAuthSection(false);
        }
    }, [location.pathname]);

    console.log(isAuthSection)
    return (
        <div className='root-layout'>
            <header>
                {isAuthSection === true && (
                    <AuthNavbar />
                )}
                {isAuthSection === false && (
                    <Navbar />
                )}
            </header>
            <main>
                <Outlet />
            </main>

            <footer>
                {isAuthSection === true && (
                    <div></div>
                )}
                {isAuthSection === false && (
                    <Footer />
                )}
            </footer>
        </div>
    )
};

