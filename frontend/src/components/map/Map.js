import React, {useState, useEffect} from 'react'
import './map.scss';

export default function Map() {
    const fetch = require('node-fetch');
    const token="c9d23b109021e3a78170b8d02e5014a21bb7a571";
    const datasetSlug="covid19";
    const tableName="caso_full";
    const filters = {state: "SC", is_last: "True"};
    const url=`https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`;

    const [biguacu, setBiguacu] = useState('');
    
    let data;

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
                console.log(json.results[38]);
            });
    },token,fetch,url) 

    return (
        <div className="infosCard">
            <div className="infosCard-text">
                <h3>Cidade:</h3>
                <p>Floripa</p>
                <h3>Data</h3>
                <p>30/03/3333</p>
                <h3>População estimada:</h3>
                <p>30.000</p>
                <h3>Casos confirmados:</h3>
                <p>300.000</p>
                <h3>Taxa de mortalidade:</h3>
                <p>300.000</p>
                <h3>Ultimas mortes:</h3>
                <p>300.000</p>
            </div>
        </div>
    )
}
