import { IonContent, IonPage } from '@ionic/react';
import '../theme/bootstrap.css';
import './InicioSesion.css';


const InicioSesion: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="row vh-100 g-0">
                    <div className="col-lg-6 position-relative d-none d-lg-block">
                        <div className="bg-holder d-flex flex-column justify-content-center align-items-center">
                            <h2>Cuidemos de la naturaleza</h2>
                            “El uso apropiado de la ciencia no es conquistar la naturaleza, sino vivir en ella.”
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                            <div className="col col-sm-6 col-lg-7 col-xl-6">
                                <a href="index.html" className="d-flex justify-content-center mb-4">
                                    {/* <img src="./assets/icons/NaturalezApp-Icon.svg" alt="" width="60"> */}
                                    {/* <img src={NaturalezaAppIcon} alt='NaturalezaApp - Icon' /> */}
                                    <img src="assets/icon/NaturalezApp-Icon.svg" alt='NaturalezaApp - Icon' />
                                </a>

                                {/* <small className="d-flex justify-content-center mb-4" style="color: #A5BE7D;">NaturalezApp</small> */}
                                <small className="d-flex justify-content-center mb-4" style={{ color: '#A5BE7D' }}>NaturalezApp</small>

                                <div className="text-center mb-5">
                                    <h1 className="fw-bold">Inicio de Sesión</h1>
                                    <p>Accede a tu cuenta</p>
                                </div>


                                <button className="btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100 mb-3">
                                    <i className='bx bxl-google text-danger me-1 fs-6'></i><a href="#" className="creacionCuentas">Ingresa con Google</a>
                                </button>
                                {/* <button className="btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100 mb-3">
                                    <i className='bx bx-envelope me-1 fs-6' ></i><a href="/registroUsuario" className="creacionCuentas">Crea una cuenta</a>
                                </button> */}
                                <button
                                    className="btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100 mb-3"
                                    onClick={() => window.location.href = '/RegistroUsuario'}
                                >
                                    <i className='bx bx-envelope me-1 fs-6'></i>
                                    Crea una cuenta
                                </button>

                                <div className="position-relative">
                                    <hr className="text-secondary" />
                                    <div className="divider-content-center">
                                        or
                                    </div>
                                </div>

                                <form action="#">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="bx bx-user"></i>
                                        </span>
                                        {/* <input type="text" className="form-control form-control-lg fs-6" placeholder="Usuario" name="" id=""> */}
                                        <input type="text" className="form-control form-control-lg fs-6" placeholder="Usuario" name="user" id="user"></input>
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="bx bx-lock-alt"></i>
                                        </span>
                                        {/* <input type="password" className="form-control form-control-lg fs-6" placeholder="Contraseña" name="" id=""> */}
                                        <input type="password" className="form-control form-control-lg fs-6" placeholder="Contraseña" name="password" id="password"></input>
                                    </div>

                                    <div className="input-group mb-3 d-flex justify-content-between">
                                        <div className="form-check">
                                            {/* <input type="checkbox" className="form-check-input" id="formCheck">
                                                <label for="formChech" className="form-check-label">Recuerdame</label> */}
                                            <input type="checkbox" className="form-check-input" id="formCheck" />
                                            <label htmlFor='formCheck' className="form-check-label">Recuerdame</label>
                                        </div>
                                        <div>
                                            <small><a href="#">¿Olvidaste tu contraseña?</a></small>
                                        </div>
                                        <button className="btn btn-lg w-100" id="btnIniciarSesion">Iniciar Sesión</button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <small>¿No tienes cuenta?<a href="/RegistroUsuario" className="fw-bold">Registrate</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default InicioSesion;
