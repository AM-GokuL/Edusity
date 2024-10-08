import React, { useEffect, useState } from 'react'
import "./Navbar.css" 
import logo from "../../Assets/logo.png"
import menu_icon from "../../Assets/menu-icon.png"
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky,setSticky]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[])
    const [mobileMenu,setmobileMenu]=useState(false);
    const toggleMenu = () => {
       mobileMenu?setmobileMenu(false):setmobileMenu(true);
    }
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />  
        <ul className={mobileMenu?"":"hide-mobile-menu"}> {/*to toggle the side menu bar during phone view */}
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar