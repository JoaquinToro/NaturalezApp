import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import './Recomendar_Parque.css';
import '../theme/bootstrap.css';
import FooterN from "../components/FooterN";
import HeaderN from "../components/HeaderN";

const Recomendar_Parque: React.FC = () =>{

    return(
        <IonPage>
            <HeaderN/>
            <IonContent id="main">
                <div className="menu-botones">
                    <h2>Elija la categoría que desea Buscar</h2>
                <div className="row align-items-center">
                    <div className="col-6 mb-2 tabla">
                        <button title="Seleccionar flora" type="button" className="btn btn-primary">Flora</button>
                    </div>
                    <div className="col-6 mb-2 tabla">
                        <button title="Seleccionar fauna" type="button" className="btn btn-primary">Fauna</button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div title="Seleccionar ubicación" className="col-6 mb-2 tabla">
                        <button className="btn btn-primary">Ubicacion</button>
                    </div>
                    <div title="Seleccionar tipo de área" className="col-6 mb-2 tabla">
                        <button className="btn btn-primary">Tipo</button>
                    </div>
                </div>
                </div>
                <div className="container-fluid busqueda">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Ingrese su búsqueda..." aria-label="Search"/>
                    </form>
                </div>
                <div className="container px-4 py-4 bg-white caja-resultados">
                    <div className="resultado">
                        <img src="assets/placeholder/placeholder-image.jpg" alt="Imagen de placeholder"/>
                        <div className="info">
                            <h3 id="nombre-resultado">Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="container agregar">
                        <button title="Agregar decisión" type="button" className="btn-agregar">Agregar</button>    
                    </div>  
                </div>
            </IonContent>
            <FooterN/>
        </IonPage>
    );
}

export default Recomendar_Parque;