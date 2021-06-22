import React, {useState, useEffect} from 'react'
import './map.scss';
import ponte from '../../assets/mapa0.png';
import {FiMap} from "react-icons/fi";
import {IoArrowBackCircle, IoArrowDownCircleSharp, IoSkull} from "react-icons/io5";

export default function Map() {
    const fetch = require('node-fetch');
    const token="c9d23b109021e3a78170b8d02e5014a21bb7a571";
    const datasetSlug="covid19";
    const tableName="caso_full";
    const filters = {state: "SC", is_last: "True"};
    const url=`https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`;

    const fetchData = [fetch,token,url];

    const [biguacu, setBiguacu] = useState('');
    const [palhoca, setPalhoca] = useState('');
    const [saoJose, setSaoJose] = useState('');
    const [floripa, setFloripa] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [show, setShow] = useState('infosCard-text');
    const [showMap, setShowMap] = useState(false);

    const data = {

        biguacu,
        palhoca,
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
                setBiguacu(json.results[38]);
                console.log(biguacu);
                setFloripa(json.results[90]);
                console.log(floripa);
                setPalhoca(json.results[184]);
                console.log(palhoca);
                setSaoJose(json.results[251])
                console.log(saoJose);
            });
    },fetchData)

    function setCity(value){

        switch(value){
            case "biguacu":
                setCurrentCity(biguacu);
                setShow("infosCard-show");
                break;
            case "floripa":
                setCurrentCity(floripa);
                setShow("infosCard-show");
                break;
            case "palhoca":
                setCurrentCity(palhoca);
                setShow("infosCard-show");
                break;
            case "saoJose":
                setCurrentCity(saoJose);
                setShow("infosCard-show");
                break;
        }

    }

    function CardValues(props){
        return(
            <div className="cardValues-box">
                <span>{props.title}</span>
                <h3>{props.info}</h3>
            </div>
        )
    }

    function CardPercentages(props) {

        return (
            <div>
                <span>{props.title}</span>
                <h3>
                    <IoSkull size={35} style={{color: 'black'}}></IoSkull>
                    %{props.value}
                </h3>
            </div>
        )
    }

    function RenderCard(props) {
        return(
            <div className="rendercard-container">
                <h3>{props.city}</h3>
                <div className="rendercard-row1">
                    <CardValues title="Casos confirmados" info={currentCity.last_available_confirmed}></CardValues>
                    <CardValues title="Casos recentes" info={currentCity.new_confirmed}></CardValues>
                    <CardValues title="Mortes confirmadas" info={currentCity.last_available_deaths}></CardValues>
                </div>
                
                <div className="rendercard-row2" >
                    <CardPercentages title="Taxa de mortalidade" value={currentCity.last_available_deaths}></CardPercentages>
                </div>

                <button type="submit" id="hidePainel-btn" onClick={()=> setShow(" ")}><IoArrowBackCircle ></IoArrowBackCircle></button>

            </div>
        )
    }


    return (
        <div id="map" className="container main-background">
            <div className="map-content">

                <div >
                    <h1>
                        <FiMap style={{marginRight:'0.3em'}}/>
                        Mapa Informativo
                        <FiMap style={{marginLeft:'0.3em'}}/>
                    </h1>
                </div>

                <p>
                    Clique em sua cidade no mapa e se antene sobre a situação do covid em sua cidade!
                </p>
                <h3>Mostrar mapa</h3>

                <button type="submit" id="showmap-btn" onClick={()=> setShowMap(!showMap)}>
                    <IoArrowDownCircleSharp></IoArrowDownCircleSharp>
                </button>

                <hr></hr>
                <div className={`map-container ${showMap ? 'showMap' : ''}`}>
                    <img className="map-img" src={ponte} alt="logo"/>

                    <button type="submit" id="biguacu-btn" onClick={()=> setCity("biguacu")}>Biguaçu</button>
                    <button type="submit" id="floripa-btn" onClick={()=> setCity("floripa")}>Florianopolis</button>
                    <button type="submit" id="palhoca-btn" onClick={()=> setCity("palhoca")}>Palhoça</button>
                    <button type="submit" id="saoJose-btn" onClick={()=> setCity("saoJose")}>São Jose</button>

                    <div className={`infosCard ${show}`}>
                        <RenderCard city={currentCity.city}></RenderCard>
                    </div>

                </div>
            </div>
        </div>
    )
}

/*

<h2>{currentCity.city}</h2>


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
                    
 */