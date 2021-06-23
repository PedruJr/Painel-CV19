import React,{useState} from 'react';
import './header.scss';
import {FiMenu} from 'react-icons/fi';

export default function Header() {
    const [navbarOn, setNavbarOn] = useState(false);
    
    function toggleNavbar() {
        setNavbarOn(!navbarOn)
    }
    return (
        <div>
            <header>
                <FiMenu onClick={toggleNavbar} className="icon" />

                <div className="flex links">
                    <p onClick={() => window.location.replace("/#map")} >Mapa</p>
                    <p onClick={() => window.location.replace("/#cautions")} >Cuidados</p>
                    <p onClick={() => window.location.replace("/#aboutus")}> Sobre o portal</p>
                    <p onClick={() => window.location.replace("/#vacines")} >Datas vacinas</p>
                    <p onClick={() => window.location.replace("/#contactus")} >Contato</p>
                </div>

                <div className={`navMenu ${navbarOn ? "navMenu-show" : ""}`}>
                    <button className="btn-menu">Index</button>
                    <button className="btn-menu">Gerar Relatório</button>
                </div>

            </header>
        </div>
    )
}


/* para criar o header vou colocar uma tag header
um icon p puxar o side menu */