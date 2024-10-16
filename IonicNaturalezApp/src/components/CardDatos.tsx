import React from "react";
import { CardInterface } from "../utils/CardInterface";


const CardDatos : React.FC<CardInterface> = ({image,title,description}) =>{

    return(
        <div className="containerJqn">
            <img src={image} alt="placeholder"/>
            <h2 className="subtitulo">{title}</h2>
            <p className="bajada">{description}</p>
        </div>
    );
}


export default CardDatos;