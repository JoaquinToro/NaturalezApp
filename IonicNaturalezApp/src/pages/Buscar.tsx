import { IonCol, IonContent, IonItemDivider, IonPage, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';


import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';
import Resultado from '../components/Resultado';
import { CardInterface } from '../utils/CardInterface';
import { ResultInterface } from '../utils/ResultInterface';
import './Buscar.css';


const Buscar: React.FC =()=>{

    const [busqueda,setBusqueda] = useState('');
    const [resultados,setResultados] = useState([]);

    const realizarBusqueda = async (cosaABuscar:string) =>{
        try {
            const response = await axios.post('http://localhost:3001/buscar-cosa',{
                "name":cosaABuscar
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
            <IonContent id="main" placeholder={undefined}>
                <div className="container-fluid busqueda">
                    <form className="d-flex">
                        <input id="cajaBusqueda"className="form-control me-2" type="search" value={busqueda} onChange={(e)=>{setBusqueda(e.target.value)}} placeholder="Ingrese su búsqueda..." aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button" onClick={()=>realizarBusqueda(busqueda)}>Buscar</button>
                    </form>
                </div>
                <IonItemDivider className='hr' placeholder={undefined}></IonItemDivider>
                    <div className="container px-4 py-4 bg-white caja-resultados">
                    {
                        resultados.length > 0 ? resultados.map( (r: ResultInterface, index:number) => (
                            <IonRow key={r.id || index}>
                                <IonCol>
                                    <Resultado r={r} />
                                </IonCol>
                            </IonRow>
                        )) : <></>
                    }
                    </div>
            </IonContent>
        <FooterN/>
        </IonPage>
    );
}

export default Buscar;