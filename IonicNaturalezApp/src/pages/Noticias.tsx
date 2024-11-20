import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';
import { CardInterface } from '../utils/CardInterface';
import { IonPage,IonCol, IonGrid, IonRow, IonContent } from '@ionic/react';
import CardDatos from '../components/CardDatos';
import './Home.css';

const Noticias : React.FC= () => {
    const placeholder = {
        id:0,
        image:"assets/placeholder/placeholder-image.jpg",
        title:"Lorem Ipsum",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
                    "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun."
      };
    const [noticias,setNoticias] = useState([placeholder]);

    const Getnoticias=async()=>{
        try{
          const response = await axios.get('http://localhost:3001/getNoticias');
          const temp = response.data.map((item: { id_noticia:any; images: any; title: any; body: any; }) => ({
            id: item.id_noticia,
            image: item.images ? item.images : "assets/placeholder/placeholder-image.jpg",
            title: item.title,
            description: item.body,
          }));
          setNoticias(temp);
        }catch{
          console.log("Error");
        }
        return;
      }

      useEffect(()=>{
        Getnoticias();
      }, [])

    return(
        <IonPage>
            <HeaderN/>
            <IonContent id='main'>
                <h2 className='subtitulo'>Noticias Medioambientales</h2>
                <IonGrid>
                <div className='secciones-wrapper'>
                    {
                        noticias.length > 0 ? noticias.map( (c: CardInterface, index:number) => (
                          <a href={`Noticias/${noticias[index].id}`} key={index}>
                            <div className="seccion col-xs-1">
                                <IonRow>
                                    <IonCol>
                                        <CardDatos c={c} />
                                    </IonCol>
                                </IonRow>
                            </div>
                          </a>
                        )) : <></>
                    }
                </div>
                </IonGrid>
                <FooterN/>
            </IonContent>
        </IonPage>
    );
}

export default Noticias;