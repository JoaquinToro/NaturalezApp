import { IonFooter } from "@ionic/react";
import './FooterN.css'

const FooterN = () =>{
    return(
        <IonFooter>
            <div className="container footer">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Ingenieria Web PUCV</p>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-4">
                            <a className="text-muted" href="https://www.instagram.com/pascalispunk/">
                                <img src="assets/icon/instagram_icon.svg" alt="Icono de Instagram con enlace a https://www.instagram.com/pascalispunk/"/>
                            </a>
                        </li>
                        <li className="ms-4">
                            <a className="text-muted" href="https://github.com/JoaquinToro/NaturalezApp">
                                <img src="assets/icon/github_icon.svg" alt="Icono de Github con enlace a https://github.com/JoaquinToro/NaturalezApp"/>
                            </a>
                        </li>
                        <li className="ms-4">
                            <a className="text-muted" href="https://facebook.com">
                                <img src="assets\icon\facebook_icon.svg" alt="Icono de Facebook con enlace a https://facebook.com"/>
                            </a>
                        </li>
                        <li className="ms-4">
                            <a className="text-muted" href="https://x.com/pascalarchive">
                                <img src="assets\icon\twitter_icon.svg" alt="Icono de Twitter con enlace a https://x.com/pascalarchive"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </IonFooter>
    );
}

export default FooterN;