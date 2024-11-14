import React, { useEffect, useState } from 'react';
import { IonContent, IonPage} from '@ionic/react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import './Home.css';
import '../theme/variables.css';
//Importar componentes
import FooterN from '../components/FooterN';
import HeaderN from '../components/HeaderN';
import CardDatos from '../components/CardDatos';

const Home: React.FC = () => {

  const placeholder = {
    image:"assets/placeholder/placeholder-image.jpg",
    title:"Lorem Ipsum",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. " +
                "Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun."
  };

  const [parquesDestacados, setParquesDestacados] = useState(placeholder);
  const [floraDestacada, setFloraDestacada] = useState(placeholder);
  const [faunaDestacada, setFaunaDestacada] = useState(placeholder);
  const [noticiaDestacada, setNoticiaDestacada] = useState(placeholder);
  const [tipDestacada, setTipDestacada] = useState(placeholder);
  const [nosotros, setNosotros] = useState(placeholder);
  
  const GetParque=async()=>{
    try{
      const response = await axios.get('http://localhost:3001/getParques');
      const randIndex = Math.floor(Math.random() * response.data.length);
      
      const temp = {
        image:response.data[randIndex].images ? response.data[randIndex].images.split(',')[0] : "assets/placeholder/placeholder-image.jpg",
        title:response.data[randIndex].name,
        description:response.data[randIndex].description,
      };

      setParquesDestacados(temp);
    }catch{
      console.log("Error");
    }
    return;
  }

  const GetNoticia=async()=>{
    try{
      const response = await axios.get('http://localhost:3001/noticia-destacada');
      const randIndex = Math.floor(Math.random() * response.data.length);
      
      const temp = {
        image:response.data[randIndex].images ? response.data[randIndex].images : "assets/placeholder/placeholder-image.jpg",
        title:response.data[randIndex].title,
        description:response.data[randIndex].body,
      };
      setNoticiaDestacada(temp);

    }catch{
      console.log("Error");
    }
    return;
  }

    useEffect(()=>{
      GetParque();
      GetNoticia();
    }, [])

  return (
    <IonPage>
      <HeaderN/>
      <IonContent id='main' fullscreen>
          <div className="banner">
            <Swiper className='carrusel'>
              <SwiperSlide><img id="imagen-carrusel" src="assets/images/Jardin_Botanico_Vina_Del_Mar.jpg" alt="Imagen del Jardín Botánico de Viña del Mar"/></SwiperSlide>
              <SwiperSlide><img src="assets/images/pudu.jpg" alt="First slide"/></SwiperSlide>
              <SwiperSlide><img src="assets/images/Chagual Azul.jpg" alt="Imagen del Jardín Botánico de Viña del Mar"/></SwiperSlide>
            </Swiper>
        </div>
        <div className="secciones-wrapper">
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Parques destacados</h2>
                  <a href="#Parques">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Parques"/>
                  </a>
              </div>
              <CardDatos c={parquesDestacados}/>
          </div>
          <div className="seccion col-xs-1">
            <div className="ver-mas">
                <h2 className="subtitulo">Noticias destacadas</h2>
                <a href="#Noticias">
                    <img className="arrow" src="assets\icon\arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Noticias"/>
                </a>
            </div>
            <CardDatos c={noticiaDestacada}/>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Tips medioambientales</h2>
                  <a href="#Tips">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Tips"/>
                  </a>
              </div>
              <CardDatos c={tipDestacada}/>
          </div>
          <div className="seccion col-xs-1">
            <div className="ver-mas">
                <h2 className="subtitulo">Flora destacada</h2>
                <a href="#Flora">
                    <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Flora"/>
                </a>
            </div>
            <CardDatos c={floraDestacada}/>  
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Fauna destacada</h2>
                  <a href="#Fauna">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Fauna"/>
                  </a>
              </div>
              <CardDatos c={faunaDestacada}/>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Nosotros</h2>
                  <a href="#Quienes-Somos">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Quienes-Somos"/>
                  </a>
              </div>
              <CardDatos c={nosotros}/>
            </div>
          </div>
          <FooterN/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
