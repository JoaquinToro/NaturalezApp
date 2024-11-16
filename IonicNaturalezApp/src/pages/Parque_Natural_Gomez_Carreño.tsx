// src/pages/[parkName].tsx
import React, { useState, useEffect } from 'react';
import { 
  IonContent,
  IonPage,
  IonImg,
  useIonViewWillEnter
} from '@ionic/react';
import { useParams } from 'react-router';
import axios from 'axios';  // Make sure to install axios: npm install axios
import './Parque_Natural_Gomez_Carreño.css';
import '../theme/bootstrap.css';

// Import components
import FooterN from '../components/FooterN';
import HeaderN from '../components/HeaderN';

interface ParkData {
  name: string;
  description: string;
  images: string;
  fauna: Array<{ name: string; description: string; images: string }>;
  flora: Array<{ name: string; description: string; images: string }>;
}

const ParkPage: React.FC = () => {
  const { parkName } = useParams<{ parkName: string }>();
  const [parkData, setParkData] = useState<ParkData | null>(null);

  useIonViewWillEnter(() => {
    axios.get(`http://localhost:3001/getParque/${parkName}`)
      .then(response => setParkData(response.data))
      .catch(error => console.error('Error fetching park data:', error));
  });

  if (!parkData) {
    return <IonPage><IonContent>No esta el parque</IonContent></IonPage>;
  }

  return (
    <IonPage id="main-content">
      <HeaderN/>
      <IonContent id='main' fullscreen className="ion-padding">
        <h2 className="NombreParque">{parkData.name}</h2>

        <div className="card">
          <div className="card-image-container">
            <IonImg className="card-image" src={parkData.images} alt={parkData.name} />
          </div>
          <div className="card-content">
            <p>{parkData.description}</p>
          </div>
        </div>

        <hr />

        <h2 className="fauna-heading">Fauna</h2>
        <div className="fauna-grid">
          {parkData.fauna.map((animal, index) => (
            <div key={`fauna-${index}`} className="fauna-item">
              <IonImg src={animal.images} alt={`Una imagen de un ${animal.name}`} />
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          ))}
        </div>

        <hr />

        <h2 className="flora-heading">Flora</h2>
        <div className="flora-grid">
          {parkData.flora.map((plant, index) => (
            <div key={`flora-${index}`} className="flora-item">
              <IonImg src={plant.images} alt={`Una imagen de un ${plant.name}`} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
            </div>
          ))}
        </div>

        <hr />
      </IonContent>
      <FooterN/>
    </IonPage>
  );
}

export default ParkPage;