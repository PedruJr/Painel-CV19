import React,{useState} from 'react'

export default function AboutUs() {
    const [showd, setShowd] = useState();
    return (
        <div className="aboutus-container">
            <div> Saiba mais sobre o movimento!</div>
            <button>Descubra mais...</button>     
            <div className="aboutus-content">
                show content
            </div>
        </div>
    )
}
