import { IonItemDivider, IonPage } from '@ionic/react';
import React from 'react';
import '../theme/bootstrap.css';


import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';

const Buscar: React.FC =()=>{

    return(
        <IonPage>
        <div className="container-fluid busqueda">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Ingrese su búsqueda..." aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
        <IonItemDivider className='hr'>
            <div className="container px-4 py-4 bg-white caja-resultados">

            </div>
        </IonItemDivider>
        <FooterN/>
        </IonPage>
    );
}

export default Buscar;