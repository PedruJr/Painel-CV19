import React from 'react';
import './covidCard.css';


export default function CovidCard(props) {
    
    return(
        <div className="container">
            <div className="content">
                <strong>Cidade:</strong>
                <p>{props.city}</p>

                <strong>Confirmados:</strong>
                <p>{props.confirmed}</p>

                <strong>Taxa de mortalidade:</strong>
                <p>{props.death_rate}</p>

            </div>
        </div>
    );
}
