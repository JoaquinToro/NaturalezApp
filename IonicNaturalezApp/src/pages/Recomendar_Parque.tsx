import { IonCol, IonContent, IonPage, IonRow } from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";

import './Recomendar_Parque.css';
import '../theme/bootstrap.css';
import FooterN from "../components/FooterN";
import HeaderN from "../components/HeaderN";
import { CardInterface } from "../utils/CardInterface";
import { ResultInterface } from "../utils/ResultInterface";
import Resultado from "../components/Resultado";


const Recomendar_Parque: React.FC = () =>{

    const [busqueda,setBusqueda] = useState('');
    const [parqueRecomendado,setParqueRecomendado] = useState('')
    const [filtros,setFiltros] = useState([])
    const [filtroActual,setFiltroActual] = useState('')
    const [resultados,setResultados]=useState([])

    const realizarBusqueda = async (cosaABuscar:string) =>{
        try {
            const response = await axios.get('http://localhost:3001/buscar-cosa',{
                params: {
                    name: cosaABuscar,
                    table: filtroActual
                }
            });
            
            setResultados(response.data);
            
            console.log(resultados);
        } catch (error) {
            console.log("Error");
        }
        return;
    }

    return(
        <IonPage>
            <HeaderN/>
            <IonContent id="main">
                <div className="menu-botones">
                    <h2>Elija la categoría que desea Buscar</h2>
                <div className="row align-items-center">
                    <div className="col-6 mb-2 tabla">
                        <button title="Seleccionar flora" type="button" className="btn btn-primary" onClick={()=>{setFiltroActual('flora')}}>Flora</button>
                    </div>
                    <div className="col-6 mb-2 tabla">
                        <button title="Seleccionar fauna" type="button" className="btn btn-primary" onClick={()=>{setFiltroActual('fauna')}}>Fauna</button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div title="Seleccionar ubicación" className="col-6 mb-2 tabla">
                        <button className="btn btn-primary" onClick={()=>{setFiltroActual('region')}}>Ubicacion</button>
                    </div>
                    <div title="Seleccionar tipo de área" className="col-6 mb-2 tabla">
                        <button className="btn btn-primary" onClick={()=>{setFiltroActual('tipo')}}>Tipo</button>
                    </div>
                </div>
                </div>
                <div className="container-fluid busqueda">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Ingrese su búsqueda..." aria-label="Search"/>
                         <button className="btn btn-outline-success" type="button" onClick={()=>realizarBusqueda(busqueda)}>Buscar</button>
                    </form>
                </div>
                <div className="container px-4 py-4 bg-white caja-resultados">
                    {
                        resultados.length > 0 ? resultados.map((r : ResultInterface, index:number)=>{
                            <IonRow key={r.id || index}>
                                <IonCol>
                                    <Resultado r={r} />
                                </IonCol>
                            </IonRow>
                        })
                        :<></>
                    }
                </div>
                <FooterN/>
            </IonContent>
        </IonPage>
    );
}

export default Recomendar_Parque;