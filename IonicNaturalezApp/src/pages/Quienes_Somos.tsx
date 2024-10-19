import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonFooter,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonImg
} from '@ionic/react';
import './Quienes_Somos.css';
import '../theme/bootstrap.css';

//Importar componentes
import FooterN from '../components/FooterN';
import HeaderN from '../components/HeaderN';

const Quienes_Somos: React.FC = () => {
    return(
        <IonPage>
            <HeaderN/>
            <IonContent id='main' fullscreen className="ion-padding">
            <h2 className="tituloPag">Quienes Somos?</h2>
            <IonImg src="assets/images/paisajeParque.jpg" alt="Foto de naturaleza" className="main-image" />
            
            <div className="content-box">
                <p>Somos un grupo de estudiantes de la PUCV que tienen una gran pasion por crear nuevas maneras de dar oportunidades de contectarse con la naturaleza. Como estudiantes vimos que mucha gente tiene lugares hermosos, fauna y flora que no se llega a apreciar por la falta de informacion local. Nuestro equipo esta formado por tres estudiantes de universidad que estan en su tercer año.</p>
            </div>
            <div className="content-box">
                <p>Nuestra meta es dar un sitio web y aplicacion que deje tener mas informacion cercana al usuario solamente a un click. Queremos promover la visita de parques naturales y areas protejidas para que estos panoramas naturales sean aprovechados.</p>
            </div>
            </IonContent>

            <FooterN/>
        </IonPage>
    );
}
export default Quienes_Somos;