import { React, useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CounterContext } from '../App';
var root = document.querySelector(':root');
export function DarkMode() {
  root.style.setProperty('--brandColor', '#fff');
  root.style.setProperty('--backgrandColor', 'hsl(207, 26%, 17%)');
  root.style.setProperty('--navbarColor', 'hsl(209, 23%, 22%)');
}
export function LightMode() {
  root.style.setProperty('--brandColor', '#000');
  root.style.setProperty('--backgrandColor', 'hsl(0, 0%, 98%)');
  root.style.setProperty('--navbarColor', '#fff');
}

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(CounterContext);

  function Mode() {
    if (isDarkMode) { DarkMode() } else { LightMode() }
  }
  useEffect(() => { Mode() }, [isDarkMode])
  return (
    <div >
      <nav className="navbar  navbar-light ">
        <div className='col-lg-2 col-md-2'><a className="navbar-brand" >Where in the world?</a></div>
        <div className='col-lg-7 col-md-7'></div>
        <div className='col-lg-2 col-md-2'>
          <button className='dark-light' onClick={() => setIsDarkMode(!isDarkMode)}>
            <span ><FontAwesomeIcon icon={faMoon} className='moon' /> Dark Mode</span>
          </button>

        </div>
        <div className='col-lg-1 col-md-1'></div>


      </nav>

    </div>
  )
}

export default NavBar;

