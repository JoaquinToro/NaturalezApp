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
import CardDatos from "../components/CardDatos";


const Recomendar_Parque: React.FC = () =>{
    const placeholder = {
        id:0,
        image:"assets/placeholder/placeholder-image.jpg",
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
                    "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun."
      };

    const [busqueda,setBusqueda] = useState('');
    const [parqueRecomendado, setParqueRecomendado] = useState<CardInterface>(placeholder);
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

    const buscarParque = async () =>{
        try{
            const response = await axios.get('http://localhost:3001/getParques');
            const randIndex = Math.floor(Math.random() * response.data.length);
            
            const temp = {
              id: response.data[randIndex].id,
              image:response.data[randIndex].images ? response.data[randIndex].images.split(',')[0] : "assets/placeholder/placeholder-image.jpg",
              title:response.data[randIndex].name,
              description:response.data[randIndex].description,
            };
      
            setParqueRecomendado(temp);
          }catch{
            console.log("Error");
          }
          return;
    }

    return(
        <IonPage>
            <HeaderN/>
            <IonContent id="main">
            {/* <div className="menu-botones">
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
                    <button className="btn btn-outline-success cbtutton" type="button" onClick={()=>realizarBusqueda(busqueda)}>Buscar</button>
                </div>
            ¨*/}
                <div className="container-fluid">
                    <h2>Presione RECOMENDAR para obtener su parque recomendado</h2>
                        <button title="Recomendar parque" type="button" className="btn btn-primary" onClick={buscarParque}>RECOMENDAR</button>
                    </div>
                
                <div className="container px-4 py-4 bg-white caja-resultados">
                    {
                        parqueRecomendado.title != "Lorem Ipsum" ?  
                        <div className="container px-4 py-4 bg-white caja-resultados">
                            <a href={`/Parques/${parqueRecomendado.title}`}>
                                <CardDatos c={parqueRecomendado}/>
                            </a>
                            
                        </div> : <></>
                    }
                    
                </div>
                <FooterN/>
            </IonContent>
        </IonPage>
    );
}

export default Recomendar_Parque;