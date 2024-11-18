import axios from "axios";
import React, { useEffect, useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonPage, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router-dom";
import HeaderN from "../components/HeaderN";
import FooterN from "../components/FooterN";

const Flora: React.FC = () => {
  const placeholder = {
    images: "assets/placeholder/placeholder-image.jpg",
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
      "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.",
  };

  const [flora, setFlora] = useState(placeholder);
  const { name } = useParams<{ name: string }>();

  const getFlora = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/getFlora/${name}`);
        const temp ={
                images: response.data[0].images,
                name: response.data[0].name,
                description: response.data[0].description,
        }
        setFlora(temp);
    } catch (error) {
      console.error("Error al obtener la flora:", error);
    }
  };

  useEffect(() => {
    getFlora();
  }, [name]);

  return (
    <IonPage>
      <HeaderN/>
      <IonContent id='main'>
        <IonCard>
          <IonImg src={flora.images.split(',')[0]} alt={flora.name} />
          <IonCardHeader>
            <IonCardTitle>{flora.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{flora.description}</p>
          </IonCardContent>
        </IonCard>
        <FooterN/>
      </IonContent>
    </IonPage>
  );
};

export default Flora;
