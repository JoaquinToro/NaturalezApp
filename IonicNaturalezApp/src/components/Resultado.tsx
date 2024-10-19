import React from "react";
import { CardInterface } from "../utils/CardInterface";
import { IonItem } from "@ionic/react";

import '../theme/bootstrap.css';

const Resultado : React.FC<CardInterface> = (r:CardInterface) =>{
    
    return(
        <IonItem>
            <div className="container px-4 py-4 bg-white caja-resultados">
                <div className="resultado">
                    <img src={r.image} alt="Imagen de placeholder"/>
                    <div className="info">
                        <h3 id="nombre-resultado">{r.title}</h3>
                        <p>{r.description}</p>
                    </div>
                </div>
            </div>
        </IonItem>
    );
}

export default Resultado;