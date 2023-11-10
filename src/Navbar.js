import React from "react";
import logo from "./logo-filtered.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    let logoWidth = 150;
    logoWidth = logoWidth + "px";
    let icons = faBars;
    
    const [iconClicked, setIconClicked] = useState(false);
    
    if(iconClicked){
        icons = faBarsStaggered;
    }
    
    function checkIconClick(e) {
        const listNav = document.getElementById('listNav');
        listNav.classList.toggle("hidden")
        iconClicked === true ? setIconClicked(false) : setIconClicked(true);
    }

    return (
        <nav className='flex justify-around items-center relative'>
            <div className="logo-container"><img src={logo} alt="logo" width={logoWidth} /></div>
            <FontAwesomeIcon icon={icons} className="cursor-pointer md:hidden" onClick={(e) => {checkIconClick(e)}}/>
            <div className="list-container w-1/3 items-center absolute md:static top-16 left-12 text-left md:flex hidden md:top-0 md:left-0" id="listNav">
                <ul className='md:flex justify-around items-center font-playPen w-full'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#referral">Clients</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;