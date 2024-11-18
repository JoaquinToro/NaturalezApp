import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';
import { CardInterface } from '../utils/CardInterface';
import { IonPage,IonCol, IonGrid, IonRow, IonContent } from '@ionic/react';
import CardDatos from '../components/CardDatos';
import './Home.css';

const faunas : React.FC= () => {
    const placeholder = {
        image:"assets/placeholder/placeholder-image.jpg",
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
                    "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun."
      };
    const [faunas,setFaunas] = useState([placeholder]);

    const GetFaunas=async()=>{
        try{
          const response = await axios.get('http://localhost:3001/getFauna');
          const temp = response.data.map((item: { images: any; name: any; description: any; }) => ({
            image: item.images? item.images.split(',')[0]  : "assets/placeholder/placeholder-image.jpg",
            title: item.name,
            description: item.description,
          }));
          setFaunas(temp);
        }catch{
          console.log("Error");
        }
        return;
      }

      useEffect(()=>{
        GetFaunas();
      }, [])

    return(
        <IonPage>
            <HeaderN/>
            <IonContent id='main'>
                <h2 className='subtitulo'>Fauna</h2>
                <IonGrid>
                <div className='secciones-wrapper'>
                    {
                        faunas.length > 0 ? faunas.map( (c: CardInterface, index:number) => (
                          <a href={`/Fauna/${c.title}`} key={index}>
                            <div className="seccion col-xs-1" >
                                <IonRow>
                                    <IonCol>
                                        <CardDatos c={c} />
                                    </IonCol>
                                </IonRow>
                            </div>
                          </a>
                        )) : <>Nada que mostrar :c</>
                    }
                </div>
                </IonGrid>
                <FooterN/>
            </IonContent>
            
        </IonPage>
    );
}

export default faunas;