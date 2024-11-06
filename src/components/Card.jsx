import React from "react"
import '../styles/Card.css'

function Card(props){
    return(
        <div className="pom-card">
            <div className="pom-img">
                <img src={props.img} alt="" />
            </div>
            <div className="pom-description">
                <h1>{props.header}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card;
