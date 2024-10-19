import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { IonButtonCustomEvent, menuController } from '@ionic/core';
import { menuOutline } from 'ionicons/icons';
import '../theme/bootstrap.css';
import './HeaderN.css';

const HeaderN = () =>{

    const onClickHandler = (): void => {
        menuController.close();
      };
    const paths=[
        {
            id:1, name: 'Inicio', url:'/Home'
        },
        {
            id:2, name: 'Buscar', url:'/Buscar'
        },
        {
            id:3, name: 'Recomendar', url:'/Recomendar_Parque'
        },
        {
            id:4, name: 'Fauna', url:'/Fauna'
        },
        {
            id:5, name: 'Flora', url:'/Flora'
        },
        {
            id:6, name: 'Quienes Somos', url:'/Quienes-Somos'
        },
        {
            id:7, name: 'Inicio Sesión', url:'/InicioSesion'
        }
    ]

    return (
        <>
        <IonHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <IonToolbar placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div id="header" className="header">
                        <a href="/home">
                            <svg role="img" width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1894 38.9945C17.6845 38.9945 17.2807 38.5443 17.2807 37.9816V33.691L12.3736 32.0545L8.92053 28.7679L17.2807 31.5592V30.9379C17.2807 28.6868 17.8461 26.4583 18.9769 24.5674C19.3148 23.9971 19.5942 23.3968 19.815 22.7665L15.3401 21.274L10.1301 17.3999L20.2956 20.7968C20.3723 20.2745 20.4107 19.7455 20.4107 19.2098V14.4825H22.2281V19.2098C22.2281 19.4709 22.22 19.7305 22.2039 19.9887L30.041 17.3774L23.9789 21.5307L21.8767 22.2285C21.5901 23.4369 21.1283 24.5851 20.5096 25.6276C19.5807 27.2034 19.0961 29.0493 19.0961 30.9402V33.1732L27.436 30.3864L22.3149 34.2313L19.0981 35.305V37.9838C19.0981 38.5466 18.6942 38.9945 18.1894 38.9945Z" fill="#74A059"/>
                                <path d="M21.0204 0.356973C17.321 5.15178 17.2119 13.0576 20.7822 18.0257C20.9478 18.2463 21.2204 18.2711 21.3839 18.0482C25.0834 13.2534 25.1924 5.34987 21.6222 0.381735C21.4566 0.136367 21.184 0.134116 21.0204 0.356973ZM7.38574 21.6387L0.317979 19.2751C-0.873443 23.7097 1.38824 28.3694 5.34618 29.7201L12.4139 32.0837C13.6256 27.6491 11.3639 22.9668 7.38574 21.6387ZM34.4048 21.4361L27.337 23.7997C23.3589 25.1504 21.0972 29.8101 22.3088 34.2448L29.3766 31.8811C33.3345 30.5305 35.5962 25.8707 34.4048 21.4361ZM10.3542 10.856L3.28644 8.49238C2.11521 12.927 4.3567 17.5868 8.33483 18.9374L15.4026 21.301C15.9739 19.1697 15.7632 16.8727 14.8167 14.9144C13.8702 12.956 12.2652 11.4964 10.3542 10.856ZM36.0606 8.74L28.9929 11.1036C28.0455 11.4179 27.1632 11.938 26.397 12.6341C25.6307 13.3301 24.9956 14.1884 24.5282 15.1593C24.0608 16.1302 23.7704 17.1946 23.6736 18.2912C23.5769 19.3878 23.6758 20.4949 23.9647 21.5487L31.0324 19.185C34.9904 17.8344 37.2521 13.1746 36.0606 8.74Z" fill="#86D72F"/>
                                <path d="M30.2893 40.7144C26.7952 37.789 22.5429 36.2089 18.1731 36.2122C13.6275 36.2122 9.41918 37.9005 6.05695 40.7144L18.1731 45.1467L30.2893 40.7144Z" fill="#7D4533"/>
                                <path d="M4.05182 49.7097L5.62692 60.2673C5.88944 61.9781 7.20202 63.2162 8.73673 63.2162H27.6177C29.1525 63.2162 30.4852 61.9781 30.7276 60.2673L32.3228 49.7097L18.1873 46.1305L4.05182 49.7097Z" fill="#F3AD61"/>
                                <path d="M33.3183 49.7187H3.02793C2.46251 49.7187 2.01825 49.2235 2.01825 48.5932V41.84C2.01825 41.2097 2.46251 40.7144 3.02793 40.7144H33.3183C33.8837 40.7144 34.328 41.2097 34.328 41.84V48.5932C34.328 49.2235 33.8837 49.7187 33.3183 49.7187Z" fill="#F3C07B"/>
                            </svg>
                        </a>
                        <IonTitle placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>NaturalezApp</IonTitle> 
                        <IonTitle placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <IonIcon slot="start" icon={menuOutline} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></IonIcon>
                        </IonTitle>
                        <IonButtons slot="start" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <IonMenuButton
                                autoHide={true}
                                onClick={() => onClickHandler()} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            </IonMenuButton>
                        </IonButtons> 
                    </div>
            </IonToolbar>
        </IonHeader>
        <IonMenu
                side="end"
                menuId="sidenav"
                content-id="main"
                swipe-gesture={true}
                disabled={false}
                maxEdgeStart={100}
                hidden={false}
                type="push" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
        <IonContent placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <IonList placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {paths.map( (enlace) => (
                    <IonItem key={enlace.id} className="opcion" button={true} onClick={() => { console.log("Redirigiendo a " + enlace.url); } } href={enlace.url} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{enlace.name}</IonItem>
                ) )}
            </IonList>
        </IonContent>
        </IonMenu>
        </>
    )
}

export default HeaderN;