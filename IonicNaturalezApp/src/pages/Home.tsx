import React, { useEffect, useState } from 'react';
import { IonContent, IonPage} from '@ionic/react';
import axios from 'axios';

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
      const response = await axios.get('http://localhost:3001/parque-destacado');
      const temp = {
        image:"assets/placeholder/placeholder-image.jpg",
        title:response.data[0].name,
        description:response.data[0].description,
      };
      await setParquesDestacados(temp);
      await console.log(parquesDestacados);
      
    }catch{
      console.log("Error");
    }
    return;
  }

    useEffect(()=>{
      GetParque();
    }, [])

  return (
    <IonPage>
      <HeaderN/>
      <IonContent id='main' fullscreen>
          <div className="banner">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="image-wrapper">
                      <img id="imagen-carrusel" src="assets/images/Jardin_Botanico_Vina_Del_Mar.jpg" alt="First slide"/>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="image-wrapper">
                      <img id="imagen-carrusel" src="assets/images/pudu.jpg" alt="Second slide"/>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="image-wrapper">
                      <img id="imagen-carrusel" src="assets/images/Flor de la Culebra.jpeg" alt="Third slide"/>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="bajada-texto">
                  <p className="bajada">NaturalezApp es una página web enfocada en conectar con la naturaleza mediante áreas naturales, ofreciendo información sobre
                      parques naturales, jardines botánicos, etc... Además, presentamos información sobre la flora y fauna nativa presente en dichas áreas.
                  </p>
              </div>
        </div>
        <div className="secciones-wrapper">
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Parques destacados</h2>
                  <a href="#Parques">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Parques"/>
                  </a>
              </div>
              <CardDatos title={parquesDestacados.title} description={parquesDestacados.description} image={parquesDestacados.image}/>
          </div>
          <div className="seccion col-xs-1">
            <div className="ver-mas">
                <h2 className="subtitulo">Noticias destacadas</h2>
                <a href="#Noticias">
                    <img className="arrow" src="assets\icon\arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Noticias"/>
                </a>
            </div>
            <CardDatos title={noticiaDestacada.title} description={noticiaDestacada.description} image={noticiaDestacada.image}/>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Tips medioambientales</h2>
                  <a href="#Tips">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Tips"/>
                  </a>
              </div>
              <CardDatos title={tipDestacada.title} description={tipDestacada.description} image={tipDestacada.image}/>
          </div>
          <div className="seccion col-xs-1">
            <div className="ver-mas">
                <h2 className="subtitulo">Flora destacada</h2>
                <a href="#Flora">
                    <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Flora"/>
                </a>
            </div>
            <CardDatos title={floraDestacada.title} description={floraDestacada.description} image={floraDestacada.image}/>  
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Fauna destacada</h2>
                  <a href="#Fauna">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Fauna"/>
                  </a>
              </div>
              <CardDatos title={faunaDestacada.title} description={faunaDestacada.description} image={faunaDestacada.image}/>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2 className="subtitulo">Nosotros</h2>
                  <a href="#Quienes-Somos">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Quienes-Somos"/>
                  </a>
              </div>
              <CardDatos title={nosotros.title} description={nosotros.description} image={nosotros.image}/>
            </div>
          </div>
          <FooterN/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
