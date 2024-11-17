import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//Import pages
import Home from './pages/Home';
import Buscar from './pages/Buscar';
import Recomendar_Parque from './pages/Recomendar_Parque';
import InicioSesion from './pages/InicioSesion';
import RegistroUsuario from './pages/RegistroUsuario';
import Parques from './pages/Parques';
import Noticias from './pages/Noticias';
import Parque_Natural_Gomez_Carreño from './pages/Parque_Natural_Gomez_Carreño';
import Quienes_Somos from './pages/Quienes_Somos';
import Noticia from './pages/Noticia';
import Floras from './pages/Floras';
import Faunas from './pages/Faunas';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';




setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <IonRouterOutlet placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Route path="/InicioSesion">
          <InicioSesion />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/RegistroUsuario">
          <RegistroUsuario/>
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Buscar">
          <Buscar />
        </Route>
        <Route exact path="/Recomendar_Parque">
          <Recomendar_Parque />
        </Route>
        <Route exact path="/Parques">
          <Parques />
        </Route>
        <Route exact path="/Flora">
          <Floras />
        </Route>
        <Route exact path="/Fauna">
          <Faunas />
        </Route>
        <Route exact path="/Noticias">
          <Noticias />
        </Route>
        <Route exact path="/Noticias/:id">
          <Noticia />
        </Route>
        <Route exact path="/Parques/:parkName">
          <Parque_Natural_Gomez_Carreño />
        </Route>
        <Route exact path="/Quienes_Somos">
          <Quienes_Somos/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
