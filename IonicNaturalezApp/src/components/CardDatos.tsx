import React from "react";
import { CardInterface } from "../utils/CardInterface";
import './CardDatos.css';

const CardDatos : React.FC<{c:CardInterface}> = ({c}) =>{

    return(
        <div className="containerJqn">
            {console.log(c.image)}
            <img src={c.image ? c.image.split(',')[0] : "assets/placeholder/placeholder-image.jpg"} alt="placeholder"/>
            <div className="cardContent">
                <h2 className="subtitulo">{c.title}</h2>
                <p className="bajada">{c.description}</p>
            </div>
        </div>
    );
}


export default CardDatos;