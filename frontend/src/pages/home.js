import React,{useState,  useEffect} from 'react';
import './home.css';
import api from '../services/api';
import Menu from '../components/menu/menu';
import CovidCard from '../components/covid-card/covidCard';

export default function Home() {
    //State com as infos das cidades
    const [cityInfos, setCityInfos] = useState([]);

    //knex api utilizando a rota setada para buscar as infos da cidade e preenchendo o state
    /*
    useEffect( () => { 
        api.get('xxxx',)
        .then(  response => {  
            setCityInfos(response.data);
        })
    });
    */
  
    //Estrutura html do portal
    return (
        <div className="container">
            <div className="content">
                <h1>Teste</h1>

                <Menu />
                <CovidCard />
            </div>
        </div>

    )

}
