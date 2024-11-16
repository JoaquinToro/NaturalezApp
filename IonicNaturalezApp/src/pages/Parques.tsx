import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';
import { CardInterface } from '../utils/CardInterface';
import { IonPage,IonCol, IonGrid, IonRow, IonContent } from '@ionic/react';
import CardDatos from '../components/CardDatos';
import './Home.css';

const Parques : React.FC= () => {
    const placeholder = {
        image:"assets/placeholder/placeholder-image.jpg",
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
                    "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun."
      };
    const [parques,setParques] = useState([placeholder]);

    const GetParques=async()=>{
        try{
          const response = await axios.get('http://localhost:3001/getParques');
          const temp = response.data.map((item: { images: any; name: any; description: any; }) => ({
            image: item.images? item.images.split(',')[0]  : "assets/placeholder/placeholder-image.jpg",
            title: item.name,
            description: item.description,
          }));
          setParques(temp);
        }catch{
          console.log("Error");
        }
        return;
      }

      useEffect(()=>{
        GetParques();
      }, [])

    return(
        <IonPage>
            <HeaderN/>
            <IonContent id='main'>
                <h2 className='subtitulo'>Parques Naturales</h2>
                <IonGrid>
                <div className='secciones-wrapper'>
                    {
                        parques.length > 0 ? parques.map( (c: CardInterface, index:number) => (
                            <div className="seccion col-xs-1" key={index}>
                                <IonRow>
                                    <IonCol>
                                        <CardDatos c={c} />
                                    </IonCol>
                                </IonRow>
                            </div>
                        )) : <></>
                    }
                </div>
                </IonGrid>
                <FooterN/>
            </IonContent>
            
        </IonPage>
    );
}

export default Parques;