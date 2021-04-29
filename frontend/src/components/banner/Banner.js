import React from 'react';
import './banner.scss';

export default function Banner() {
    return (
            <div className="banner-hero">
                <div className="banner-text">
                    <div className="circular-container">
                        <img className="logo-img" src="https://i.pinimg.com/originals/b7/82/87/b782875028b5c05ea5bef98c21482355.gif" alt="logo"/>
                    </div>
                    <h1>Movimento contra Covid!</h1>
                    <p> 
                        Com o proposito de manter a população da região metropolitada
                        antenada de maneira dinamica sobre o covid em suas cidades!
                    </p>
                    <button >
                        Saiba mais...
                    </button>
                </div>
            </div>
    )
}
