import React,{useState} from 'react';
import './header.scss';
import {FiMenu,FiHome} from 'react-icons/fi';

export default function Header() {
    const [navbarOn, setNavbarOn] = useState(false);
    
    function toggleNavbar() {
        setNavbarOn(!navbarOn)
    }
    return (
        <div>
            <header className="main-color">
                <FiMenu onClick={toggleNavbar} className="icon" />

                <div className="flex">
                    <p>Mapa</p>
                    <p>Sobre o portal</p>
                    <p>Contato</p>
                    <p>Contato</p>
                </div>

                <div className={`navMenu ${navbarOn ? "navMenu-show" : ""}`}>
                    <button className="linkTo"><FiHome></FiHome>Index</button>
                    <button className="linkTo">Gerar Relatório</button>
                </div>

            </header>
        </div>
    )
}


/* para criar o header vou colocar uma tag header
um icon p puxar o side menu */