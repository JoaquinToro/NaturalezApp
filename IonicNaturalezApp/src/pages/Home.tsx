import React from 'react';
import { IonContent, IonHeader, IonPage} from '@ionic/react';
import './Home.css';
import '../theme/bootstrap.css';

//Importar componentes
import HeaderN from '../components/HeaderN';
import FooterN from '../components/FooterN';

const Home: React.FC = () => {
  return (
    <IonPage>
      <HeaderN/>
      <IonContent fullscreen>
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
                  <p>NaturalezApp es una página web enfocada en conectar con la naturaleza mediante áreas naturales, ofreciendo información sobre
                      parques naturales, jardines botánicos, etc... Además, presentamos información sobre la flora y fauna nativa presente en dichas áreas.
                  </p>
              </div>
        </div>
        <div className="secciones-wrapper">
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2>Parques destacados</h2>
                  <a href="#Parques">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Parques"/>
                  </a>
              </div>
              <div className="containerJqn">
                  <img src="assets/placeholder/placeholder-image.jpg" alt="placeholder"/>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.</p>
              </div>
          </div>
          <div className="seccion col-xs-1">
            <div className="ver-mas">
                <h2>Noticias destacadas</h2>
                <a href="#Noticias">
                    <img className="arrow" src="assets\icon\arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Noticias"/>
                </a>
            </div>
            <div className="containerJqn">
                <img src="assets/placeholder/placeholder-image.jpg" alt="placeholder"/>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.</p>
            </div>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2>Tips medioambientales</h2>
                  <a href="#Tips">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Tips"/>
                  </a>
              </div>
              <div className="containerJqn">
                  <img src="assets/placeholder/placeholder-image.jpg" alt="placeholder"/>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.</p>
              </div>
          </div>
          <div className="seccion col-xs-1">
            <div className="ver-mas">
                <h2>Flora destacada</h2>
                <a href="#Flora">
                    <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Flora"/>
                </a>
            </div>
            <div className="containerJqn">
                <img src="assets/placeholder/placeholder-image.jpg" alt="placeholder"/>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.</p>

            </div>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2>Fauna destacada</h2>
                  <a href="#Fauna">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Fauna"/>
                  </a>
              </div>
              <div className="containerJqn">
                  <img src="assets/placeholder/placeholder-image.jpg" alt="placeholder"/>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.</p>
              </div>
          </div>
          <div className="seccion col-xs-1">
              <div className="ver-mas">
                  <h2>Nosotros</h2>
                  <a href="#Quienes-Somos">
                      <img className="arrow" src="assets/icon/arrow_forward_ios.svg" alt="Ícono de flecha con un link a NaturalezApp.cl/Quienes-Somos"/>
                  </a>
              </div>
              <div className="containerJqn">
                  <img src="assets/placeholder/placeholder-image.jpg" alt="placeholder"/>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, non mauris gravida tellus sapien vehicula. Ligula eu vestibulum rutrum arcu erat id platea, ultrices fames blandit quisque quis laoreet suspendisse cursus, dapibus lectus aliquet ac nisl nun.</p>
              </div>
            </div>
          </div>
      </IonContent>
      <FooterN/>
    </IonPage>
  );
};

export default Home;
