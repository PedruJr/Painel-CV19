import React,{useState} from 'react'
import './aboutus.css';

import {FiMenu, FiHome, FiInfo} from 'react-icons/fi';

export default function AboutUs() {
    const [showAbout, setShowAbout] = useState();
    return (
        <div className="aboutus-container main-background">
                <h1>
                    <FiInfo style={{marginRight: ''}}></FiInfo>
                    Sobre Nós
                </h1>
            <p>
                Quem somos? Nosso grupo é composto de três acadêmicos de análise e desenvolvimento de sistemas e estamos juntos pois adotamos a mesma ideia para a construção do projeto de término de curso.

                O que é o Covid-Rescuers ? Este projeto faz parte do nosso trabalho de conclusão de curso, pensamos nele como uma ferramenta que disseminasse a informação legitima sobre a covid na região metropolitana de Florianópolis.

                Como o nosso projeto irá ajudar a sociedade? Em tempos de crise, a falta de informação tem se tornado um enorme monstro para boa parte da população do brasil, onde temos notícias falsas até mesmo na televisão, nosso compromisso com o povo é disponibilizar acesso à informação da forma mais limpa e transparente, para que todos consigam entender a nossa situação para vencermos essa pandemia de forma mais amigável.
            </p>

        </div>
    )
}
