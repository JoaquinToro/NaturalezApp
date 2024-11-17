// src/pages/[parkName].tsx
import React, { useState, useEffect } from 'react';
import { 
  IonContent,
  IonPage,
  IonImg
} from '@ionic/react';
import { useParams } from 'react-router';
import axios from 'axios';
import './Parque.css';
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

const Parque: React.FC = () => {
  const { parkName } = useParams<{ parkName: string }>();
  const [parkData, setParkData] = useState<ParkData | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/getParque/${parkName}`)
      .then(response => {
        const temp = {
          name: response.data.name,
          description: response.data.description,
          images: response.data.images,
          fauna: response.data.fauna.map((f: any) => ({
            name: f.name,
            description: f.description,
            images: f.images
          })),
          flora: response.data.flora.map((f: any) => ({
            name: f.name,
            description: f.description,
            images: f.images
          }))
        };
        setParkData(temp)}
      )
      .catch(error => console.error('Error fetching park data:', error));
  },[]);

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
            <IonImg className="card-image" src={parkData.images.split(',')[0]} alt={parkData.name} />
          </div>
          <div className="card-content">
            <p>{parkData.description}</p>
          </div>
        </div>

        <hr />

        <h2 className="fauna-heading">Fauna</h2>
        <div className="fauna-grid">
        {
          parkData.fauna.length > 0 ? parkData.fauna.map((animal, index) => (
            <div key={`fauna-${index}`} className="fauna-item">
              <IonImg src={animal.images} alt={`Una imagen de un ${animal.name}`} />
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          )) : <h2 className='subtitulo'>No hay fauna disponible en este parque.</h2>
        }
        </div>

        <hr />

        <h2 className="flora-heading">Flora</h2>
        {
          parkData.flora.length > 0 ? parkData.fauna.map((flora, index) => (
            <div key={`flora-${index}`} className="flora-item">
              <IonImg src={flora.images} alt={`Una imagen de un ${flora.name}`} />
              <h3>{flora.name}</h3>
              <p>{flora.description}</p>
            </div>
          )) : <h2 className='subtitulo'>No hay flora disponible en este parque.</h2>
        }
        <hr />
        <FooterN/>
      </IonContent>
    </IonPage>
  );
}

export default Parque;