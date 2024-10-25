import React, { useState } from 'react';
import { 
  IonContent,
  IonPage, 

} from '@ionic/react';
import './Parque_Natural_Gomez_Carreño.css';
import '../theme/bootstrap.css';

//Importar componentes
import FooterN from '../components/FooterN';
import HeaderN from '../components/HeaderN';

const Parque_Natural_Gomez_Carreño: React.FC = () => {
    return (
        <IonPage id="main-content">
        <HeaderN/>
        <IonContent id='main' fullscreen className="ion-padding">
          <h2 className="NombreParque">Parque Natural Gomez Carreño</h2>

          <div className="card">
            <div className="card-image-container">
              <img className="card-image" src="assets/images/Parque_Natural_Gómez_Carreño.jpg" alt="Parque Natural Gómez Carreño" />
            </div>
            <div className="card-content">
              <p>El Parque Natural de Gómez Carreño es un refugio de belleza natural y biodiversidad, ubicado en una región privilegiada que destaca por su rica flora y fauna. Este parque, conocido por sus paisajes variados y su entorno prístino, ofrece a los visitantes un escape del bullicio urbano y una inmersión en la naturaleza.</p>
            </div>
          </div>

          <hr />

          <h2 className="fauna-heading">Fauna</h2>
          <div className="fauna-grid">
            <img src="assets/images/aguilucho.jpg" alt="Una imagen de un Aguilucho" />
            <img src="assets/images/picaflor.jpg" alt="Una imagen mostrando un Picaflor" />
            <img src="assets/images/piden.jpg" alt="Imagen mostrando un Piden" />
          </div>

          <hr />

          <h2 className="flora-heading">Flora</h2>
          <div className="flora-grid">
            <img src="assets/images/Chagual Azul.jpg" alt="Una imagen de un Chagual Azul" />
            <img src="assets/images/Flor de la Culebra.jpeg" alt="Una imagen mostrando una Flor de la Culebra" />
            <img src="assets/images/Oreja de Zorro.jpg" alt="Imagen mostrando una flor llamada Oreja de Zorro" />
          </div>

          <hr />
        </IonContent>
        <FooterN/>
        </IonPage>

    );
}

export default Parque_Natural_Gomez_Carreño;