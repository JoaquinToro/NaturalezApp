import axios from "axios";
import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonTitle } from "@ionic/react";
import { useParams } from "react-router-dom";
import HeaderN from "../components/HeaderN";
import FooterN from "../components/FooterN";

const Noticia: React.FC = () => {
  const placeholder = {
    images: "assets/placeholder/placeholder-image.jpg",
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum",
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
                subtitle: response.data[0].subtitle,
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
        <IonContent id="main">
            <IonTitle><h1>{noticia.title}</h1></IonTitle>
            <FooterN/>
        </IonContent>
        
    </IonPage>
  );
};

export default Noticia;
