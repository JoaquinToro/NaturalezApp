import React from "react";
import { ResultInterface } from "../utils/ResultInterface";
import { IonItem } from "@ionic/react";

import './Resultado.css';

const Resultado : React.FC<{r:ResultInterface}> = ({r}) =>{
    
    return(

            <div className="container px-4 py-4 bg-white caja-resultados">
                <div className="resultado">
                    <img src={r.image} alt="Imagen de placeholder"/>
                    <div className="info">
                        <h3 id="nombre-resultado">{r.title}</h3>
                        <p>{r.description}</p>
                    </div>
                </div>
            </div>

    );
}

export default Resultado;