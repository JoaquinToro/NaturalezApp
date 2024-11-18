import axios from "axios";
import React, { useEffect, useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonPage, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router-dom";
import HeaderN from "../components/HeaderN";
import FooterN from "../components/FooterN";

const Fauna: React.FC = () => {
  const placeholder = {
    images: "assets/placeholder/placeholder-image.jpg",
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
      "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.",
  };

  const [fauna, setFauna] = useState(placeholder);
  const { name } = useParams<{ name: string }>();

  const getFauna = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/getFauna/${name}`);
        const temp ={
                images: response.data[0].images,
                name: response.data[0].name,
                description: response.data[0].description,
        }
        setFauna(temp);
    } catch (error) {
      console.error("Error al obtener la fauna:", error);
    }
  };

  useEffect(() => {
    getFauna();
  }, [name]);

  return (
    <IonPage>
      <HeaderN/>
      <IonContent id='main'>
        <IonCard>
          <IonImg src={fauna.images.split(',')[0]} alt={fauna.name} />
          <IonCardHeader>
            <IonCardTitle>{fauna.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{fauna.description}</p>
          </IonCardContent>
        </IonCard>
        <FooterN/>
      </IonContent>
    </IonPage>
  );
};

export default Fauna;
