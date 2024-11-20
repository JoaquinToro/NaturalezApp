import axios from "axios";
import React, { useEffect, useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonPage, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router-dom";
import HeaderN from "../components/HeaderN";
import FooterN from "../components/FooterN";

const Noticia: React.FC = () => {
  const placeholder = {
    images: "assets/placeholder/placeholder-image.jpg",
    title: "Lorem Ipsum",
    author: "Lorem Ipsum",
    subtitle: "Lorem ipsum",
    fecha: "Lorem ipsum",
    body:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
      "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.",
  };

  const [noticia, setNoticia] = useState(placeholder);
  const { id } = useParams<{ id: string }>();

  const getNoticia = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/getNoticias/${id}`);
        const temp ={
                images: response.data[0].images,
                title: response.data[0].title,
                author: response.data[0].author,
                subtitle: response.data[0].subtitle,
                fecha: response.data[0].fecha,
                body: response.data[0].body,
        }
        console.log(response.data)
        console.log(temp)
        setNoticia(temp);
    } catch (error) {
      console.error("Error al obtener la noticia:", error);
    }
  };

  useEffect(() => {
    getNoticia();
  }, [id]);

  return (
    <IonPage>
      <HeaderN/>
      <IonContent id='main'>
        <IonCard>
          <IonImg src={noticia.images.split(',')[0]} alt={noticia.title} />
          <IonCardHeader>
            <IonCardTitle>{noticia.title}</IonCardTitle>
            <IonCardSubtitle>{noticia.subtitle}</IonCardSubtitle>
            <IonText>
              <p style={{color:"black"}}>Autor: {noticia.author} - Fecha: {noticia.fecha.split('T')[0]}</p>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <p>{noticia.body}</p>
          </IonCardContent>
        </IonCard>
        <FooterN/>
      </IonContent>
    </IonPage>
  );
};

export default Noticia;
