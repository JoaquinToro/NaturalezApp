import { IonContent, IonPage } from '@ionic/react';
import './RegistroUsuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-validation'



const RegistroUsuario: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="row vh-100 g-0">
                    <div className="col-lg-12 position-relative">
                        <div className="bg-holder w-100 h-100">
                        </div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center">
                                <div className="col-12 col-md-8 col-lg-6 form-container">
                                    <a href="./inicioSesion" className="d-flex justify-content-center mb-2">
                                        {/* <img src="./assets/icons/NaturalezApp-Icon.svg" alt="" width="60"> */}
                                        {/* <img src={NaturalezaAppIcon} alt='NaturalezaApp - Icon' style={{ width: 60 }} /> */}
                                        <img src="assets/icon/NaturalezApp-Icon.svg" alt='NaturalezaApp - Icon' style={{ width: 60 }} />

                                    </a>
                                    <small className="d-flex justify-content-center mb-1" style={{ color: '#A5BE7D;' }}>NaturalezApp</small>
                                    <div className="text-center mb-3">
                                        <h3 className="fw-bold">Registro de cuenta</h3  >
                                    </div>
                                    <form>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className="bx bx-user"></i>
                                            </span>
                                            <input type="text" className="form-control form-control-lg fs-6" placeholder="Usuario" name="nombre" id="nombre" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className="bx bx-user"></i>
                                            </span>
                                            <input type="text" className="form-control form-control-lg fs-6" placeholder="Apellidos" name="apellidos" id="apellidos" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-envelope'></i>
                                            </span>
                                            <input type="email" className="form-control form-control-lg fs-6" placeholder="Correo electrónico" name="email" id="email" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-buildings'></i>
                                            </span>
                                            <select className="form-select" id="region" name="region">
                                                <option value="">Selecciona una región</option>
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-buildings'></i>
                                            </span>
                                            <select className="form-select" id="comuna" name="comuna">
                                                <option value="">Selecciona una comuna</option>
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-shield-quarter'></i>
                                            </span>
                                            <input type="password" className="form-control form-control-lg fs-6" placeholder="Contraseña" name="password" id="password" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-shield-quarter'></i>
                                            </span>
                                            <input type="password" className="form-control form-control-lg fs-6" placeholder="Confirma contraseña" name="confPassword" id="confPassword" />
                                        </div>
                                        <button className="btn btn-lg w-100" id="btnRegistrar" type="submit">Registrar Usuario</button>
                                    </form>
                                    <div className="cuenta-existente">
                                        <small>¿Ya tienes una cuenta? <a href="/inicioSesion">Inicia Sesión</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default RegistroUsuario;
