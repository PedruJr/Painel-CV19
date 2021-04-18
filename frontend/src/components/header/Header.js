import React,{useState} from 'react';
import './header.scss';
import {FiMenu,FiHome} from 'react-icons/fi';

export default function Header() {
    const [navbarOn, setNavbarOn] = useState(false);
    
    function toggleNavbar() {
        setNavbarOn(!navbarOn);
    }
    
    return (
        <div>
            <header>
                <FiMenu onClick={toggleNavbar} className="icon" />

                <div  className="circular-img">
                   <img src="https://media2.giphy.com/media/efdPsC5zF28Lu/giphy.gif"></img>
                </div>

                <div className={`navMenu ${navbarOn ? "navMenu-hidden" : "false"}`}>

                    <div className="circular-img nav-img">
                      <img src="https://media2.giphy.com/media/efdPsC5zF28Lu/giphy.gif"></img>
                    </div>

                    <button className="linkTo"><FiHome></FiHome>Index</button>
                    <button className="linkTo">Index</button>
                    <button className="linkTo">Index</button>
                    <button className="linkTo">Index</button>
                </div>
            </header>
        </div>
    )
}


/* para criar o header vou colocar uma tag header
um icon p puxar o side menu */