
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';
export default function Navbar() {


  const [toggleSubnav, settoggleSubnav] = useState(false);
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [toggleFeatures,setToggleFeatures] = useState(false);
  const [toggleResources,setToggleResources] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleToggleSubnav() {
    settoggleSubnav((state) => !state);

  }
  function handleMobileNav() {
    setToggleMobileNav((state) => !state);

  }

  function handleFeatures(){
    setToggleFeatures((state) => !state);
  }

  function handleResources() {
    setToggleResources((state) => !state);
  }


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const elementStyle =  windowWidth < 1065 ? 'flex' : 'grid';
  return (
    <nav className='container' role='navigation'>
      <NavLink className={'brand-name'}>xodia</NavLink>
      <ul className='left-nav' style={{ display: toggleMobileNav ? 'flex' : 'none' }}>
        <div className='mobile-menu' style={{ display: toggleMobileNav ? 'flex' : 'none' }}>
          <h2 className='mobile-menu-header' >Menu</h2>
          <p className='btn-close-menu' onClick={handleMobileNav}>X</p>
        </div>
        <li className='nav-item'>
          <button className='btn-dropdown btn-features' onClick={handleFeatures}>
            Features
            <svg width={16} height={16} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24'>
              <path d='m6 9 6 6 6-6'></path>
            </svg>
          </button>
          <div className='dropdown-content' style={{ display: toggleFeatures ? elementStyle  : 'none' }} >
            <div className='menu-content left'>
              <h1 className='menu-title'>Platform</h1>
              <ul className='menu-links'>
                <li><a href='#'>Website builder</a></li>
                <li><a href='#'>Digital products</a></li>
                <li><a href='#'>Community</a></li>
                <li><a href='#'>Email marketing</a></li>
              </ul>
            </div>
            <div className='menu-content right'>
              <h1 className='menu-title'>Features</h1>
              <ul className='menu-links'>
                <li><a href='#'>Online courses</a></li>
                <li><a href='#'>Digital downloads</a></li>
                <li><a href='#'>Webinars & workshops</a></li>
                <li><a href='#'>Coaching & consultations</a></li>
                <li><a href='#'>Affialte marketing</a></li>
                <li><a href='#'>Embeds</a></li>
                <li><a href='#'>Integrations</a></li>
              </ul>
            </div>
            <div className='nav-features'>
              <a href='#'>Features overview →</a>
            </div>
          </div>
        </li>
        <li className='nav-item'>
          <NavLink>Examples</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink>Pricing</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink>Demo</NavLink>
        </li>
        <li className='nav-item'>
          <button className='btn-resources' onClick={handleResources}>
            Resources
            <svg width={16} height={16} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24'>
              <path d='m6 9 6 6 6-6'></path>
            </svg>
          </button>
          <div className='dropdown-resources-content' style={{ display: toggleResources ? elementStyle : 'none' }}>
            <h3 className='resources-header'>Free Resources</h3>
            <div className='resources-content'>
              <ul className='resources-left-content'>
                <li>
                  <NavLink to={'#'}>Resources Center</NavLink>
                </li>
                <li>
                  <NavLink to={'/#'}>Hire a Xodia pro</NavLink>
                </li>
                <li>
                  <NavLink to={'#'}>Creator advice</NavLink>
                </li>
                <li>
                  <NavLink to={'/#'}>Win $2000</NavLink>
                </li>
              </ul>
              <ul className='resources-right-content'>
                <li>
                  <NavLink to={'/#'}>Creator stories</NavLink>
                </li>
                <li>
                  <NavLink to={'/#'}>Free Tools</NavLink>
                </li>
                <li>
                  <NavLink to={'/#'}>Xodia creator community</NavLink>
                </li>
                <li>
                  <NavLink>Help Center</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <ul className='right-nav'>
        <li className='nav-item'>
          <NavLink to={'/signin'}>Login</NavLink>
        </li>
        <li className='nav-item signup-btn'>
          <NavLink to={'/signup'}>Signup for free</NavLink>
        </li>
        <li>
          <button className='menu-btn' onClick={handleMobileNav}>
            Menu
            <svg width={16} height={16} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24'>
              <path d='m6 9 6 6 6-6'></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
};
