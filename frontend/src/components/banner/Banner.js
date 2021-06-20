import React from 'react';
import './banner.scss';
import Header from '../header/Header'

export default function Banner() {
    return (
            <div className="banner-hero">
                <Header></Header>
                <div className="banner-text">
                    <h1>Movimento contra Covid!</h1>
                    <p> 
                        Com o proposito de manter a população da região metropolitada
                        antenada de maneira dinamica sobre o Covid-19 em suas cidades!
                    </p>
                </div>
            </div>
    )
}
