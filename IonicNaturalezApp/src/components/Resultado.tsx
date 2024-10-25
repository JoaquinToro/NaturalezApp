import React from "react";
import { ResultInterface } from "../utils/ResultInterface";
import { IonItem } from "@ionic/react";


import './Resultado.css';

const Resultado : React.FC<{r:ResultInterface}> = ({r}) =>{
    
    console.log(r)
    return(
        <div className="container px-4 py-4 bg-white caja-resultados">
            <div className="resultado">
                <img src={r.images.split(',')[0]} alt="Imagen de placeholder"/>
                <div className="info">
                    <h3 id="nombre-resultado">{r.name}</h3>
                    <p>{r.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Resultado;