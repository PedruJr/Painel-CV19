import React, {useState, useEffect} from 'react'
import './map.scss';
import ponte from '../../assets/mapa0.png';
import {FiMap} from "react-icons/fi";

export default function Map() {
    const fetch = require('node-fetch');
    const token="c9d23b109021e3a78170b8d02e5014a21bb7a571";
    const datasetSlug="covid19";
    const tableName="caso_full";
    const filters = {state: "SC", is_last: "True"};
    const url=`https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`;

    const fetchData = [fetch,token,url];

    const [biguaçu, setBiguaçu] = useState('');
    const [palhoça, setPalhoça] = useState('');
    const [saoJose, setSaoJose] = useState('');
    const [floripa, setFloripa] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [show, setShow] = useState('infosCard-text');
    const [showMap, setShowMap] = useState(false);

    const data = {
        biguaçu,
        palhoça,
        saoJose,
        floripa
    };

    useEffect(() => {
        fetch(
            url,
            {
                method: 'get',
                headers: {
                Authorization: `Token ${token}`,
                },
            }
            ).then(res => res.json())
            .then(json => {
                console.log(json);
                setBiguaçu(json.results[38]);
                console.log(biguaçu);
                setFloripa(json.results[90]);
                console.log(floripa);
                setPalhoça(json.results[184]);
                console.log(palhoça);
                setSaoJose(json.results[251])
                console.log(saoJose);
            });
    },fetchData) 

    function setCity(value){

        switch(value){
            case "biguaçu":
                setCurrentCity(biguaçu);
                setShow("infosCard-show");
                break;
            case "floripa":
                setCurrentCity(floripa);
                setShow("infosCard-show");
                break;
            case "palhoça":
                setCurrentCity(palhoça);
                setShow("infosCard-show");
                break;
            case "saoJose":
                setCurrentCity(saoJose);
                setShow("infosCard-show");
                break;
        }

    }

    return (
        <div className="container main-background">
            <div className="map-content">

                <div >
                    <h1>
                        <FiMap style={{marginRight:'0.3em'}}/>
                         Mapa Informativo
                        <FiMap style={{marginLeft:'0.3em'}}/>
                    </h1>
                </div>

                <p>Em um click em sua cidade o mapa apresentara dados vindos diretamente da secretaria de saude regional,
                    assim voce se mantem antenado e informa a populaçao local sobre nossa atual situaçao,
                    podendo evitar possiveis riscos ou informaçoes falsas!
                </p>
                <button type="submit" id="showmap-btn" onClick={()=> setShowMap(!showMap)}> Ver mapa... </button>

                <hr></hr>
                <div className={`map-container ${showMap ? 'showMap' : ''}`}>
                    <img className="map-img" src={ponte} alt="logo"/>

                    <button type="submit" id="biguaçu-btn" onClick={()=> setCity("biguaçu")}>Biguaçu</button>
                    <button type="submit" id="floripa-btn" onClick={()=> setCity("floripa")}>Florianopolis</button>
                    <button type="submit" id="palhoça-btn" onClick={()=> setCity("palhoça")}>Palhoça</button>
                    <button type="submit" id="saoJose-btn" onClick={()=> setCity("saoJose")}>São Jose</button>

               <div className={`infosCard ${show}`}>
                            <h3>Cidade:</h3>
                            <p>{currentCity.city}</p>
                            <h3>Data</h3>
                            <p>{currentCity.date}</p>
                            <h3>População estimada:</h3>
                            <p>{currentCity.estimated_population}</p>
                            <h3>Casos confirmados:</h3>
                            <p>{currentCity.last_available_confirmed}</p>
                            <h3>Taxa de mortalidade:</h3>
                            <p>{currentCity.last_available_death_rate}</p>
                            <h3>Ultimas mortes:</h3>
                            <p>{currentCity.last_available_deaths}</p>
                            <h3>Novos confirmados:</h3>
                            <p>{currentCity.new_confirmed}</p>
                            <h3>Novas mortes:</h3>
                            <p>{currentCity.new_deaths}</p>
                            <button type="submit" id="hidePainel-btn" onClick={()=> setShow(" ")}></button>
                </div>
                </div>
            </div>
        </div>
    )
}
