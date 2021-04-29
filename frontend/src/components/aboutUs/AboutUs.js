import React,{useState} from 'react'
import './aboutus.css';

export default function AboutUs() {
    const [showd, setShowd] = useState();
    return (
        <div className="aboutus-container">
            <p>
                Saiba mais sobre o movimento!
            </p>
            <button>Descubra mais...</button>
            <hr></hr>

            <div className="aboutus-hidden">
                show content
            </div>

        </div>
    )
}
