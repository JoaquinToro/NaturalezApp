import { IonContent, IonItemDivider, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import '../theme/bootstrap.css';


import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';
import axios from 'axios';

const Buscar: React.FC =()=>{

    const [busqueda,setBusqueda] = useState('');
    const [resultados,setResultados] = useState([]);

    const realizarBusqueda = async (cosaABuscar:string) =>{
        try {
            const response = await axios.post('http://localhost:3001/buscar-cosa',{
                "name":cosaABuscar
            });
            let resultadosBusqueda;
            
            console.log(resultadosBusqueda);
        } catch (error) {
            console.log("Error");
        }
        return;
    }



    return(
        <IonPage>
            <HeaderN/>
            <IonContent id="main">
                <div className="container-fluid busqueda">
                    <form className="d-flex">
                        <input id="cajaBusqueda"className="form-control me-2" type="search" value={busqueda} onChange={(e)=>{setBusqueda(e.target.value)}} placeholder="Ingrese su búsqueda..." aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button" onClick={()=>realizarBusqueda(busqueda)}>Buscar</button>
                    </form>
                </div>
                <IonItemDivider className='hr'>
                    <div className="container px-4 py-4 bg-white caja-resultados">
                        {resultados.map( () => (
                            <></>
                        ))}
                    </div>
            </IonItemDivider>
            </IonContent>
        <FooterN/>
        </IonPage>
    );
}

export default Buscar;