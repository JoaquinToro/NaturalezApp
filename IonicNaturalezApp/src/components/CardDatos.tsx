import React from "react";
import { CardInterface } from "../utils/CardInterface";
import './CardDatos.css';

const CardDatos : React.FC<CardInterface> = ({image,title,description}) =>{

    return(
        <div className="containerJqn">
            <img src={image} alt="placeholder"/>
            <div className="cardContent">
                <h2 className="subtitulo">{title}</h2>
                <p className="bajada">{description}</p>
            </div>
        </div>
    );
}


export default CardDatos;