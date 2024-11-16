import {  IonContent, IonPage, } from '@ionic/react';
import './InicioSesion.css';

// Validaciones
import { useForm } from 'react-hook-form'

const ingresar = () => {
    console.log("Hola")
}

const InicioSesion: React.FC = () => {

    const { watch, handleSubmit, register, formState: { errors } } = useForm();

    const password = watch("password");

    return (
        <IonPage>
            <IonContent fullscreen placeholder={undefined}>
                <div className="row vh-100 g-0">
                    <div className="col-lg-6 position-relative d-none d-lg-block">
                        <div className="bg-holder d-flex flex-column justify-content-center align-items-center">
                            <h2 style={{ color: 'white' }}>Cuidemos de la naturaleza</h2>
                            “El uso apropiado de la ciencia no es conquistar la naturaleza, sino vivir en ella.”
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                            <div className="col col-sm-6 col-lg-7 col-xl-6">
                                <a href="/Home" className="d-flex justify-content-center mb-4">
                                    {/* <img src="./assets/icons/NaturalezApp-Icon.svg" alt="" width="60"> */}
                                    {/* <img src={NaturalezaAppIcon} alt='NaturalezaApp - Icon' /> */}
                                    <img src="assets/icon/NaturalezApp-Icon.svg" alt='NaturalezaApp - Icon' />
                                </a>

                                {/* <small className="d-flex justify-content-center mb-4" style="color: #A5BE7D;">NaturalezApp</small> */}
                                <small className="d-flex justify-content-center mb-4" style={{ color: '#A5BE7D' }}>NaturalezApp</small>

                                <div className="text-center mb-5">
                                    <h1 className="fw-bold">Inicio de Sesión</h1>
                                    <p style={{ marginLeft: '37%', color: '#A5BE7D' }}>Accede a tu cuenta</p>
                                </div>


                                <button className="btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100 mb-3 pt-3" onClick={() => window.location.href = '/  '}>
                                    <i className='bx bxl-google text-danger me-1 fs-6'></i>Ingresa con Google
                                </button>
                                {/* <button className="btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100 mb-3">
                                    <i className='bx bx-envelope me-1 fs-6' ></i><a href="/registroUsuario" className="creacionCuentas">Crea una cuenta</a>
                                </button> */}
                                <button
                                    className="btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100 mb-3 pt-3"
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

                                <form action="#" onSubmit={handleSubmit(ingresar)}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="bx bx-user"></i>
                                        </span>
                                        {/* <input type="text" className="form-control form-control-lg fs-6" placeholder="Usuario" name="" id=""> */}
                                        <input type="text" className="form-control form-control-lg fs-6" placeholder="Correo electrónico" id="email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                                        {
                                            errors.email?.type === "required" && (
                                                <p className='alerta'>¡Alerta! El correo es requerido</p>
                                            )
                                        }
                                        {
                                            errors.email?.type === "pattern" && (
                                                <p className='alerta'>¡Atención! El formato del correo no es valido</p>
                                            )
                                        }
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="bx bx-lock-alt"></i>
                                        </span>
                                        {/* <input type="password" className="form-control form-control-lg fs-6" placeholder="Contraseña" name="" id=""> */}
                                        <input type="password" className="form-control form-control-lg fs-6" placeholder="Contraseña" id="password" {...register("password", { required: true, minLength: 8, maxLength: 50, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]{8,}$/ })} />
                                        {
                                            errors.password?.type === "required" && (
                                                <p className='alerta'>¡Alerta! Ingresa una contraseña</p>
                                            )
                                        }
                                        {
                                            errors.password?.type === "minLength" && (
                                                <p className='alerta'>¡Atención! Ingresa como minimo 8 caracteres</p>
                                            )
                                        }
                                        {
                                            errors.password?.type === "pattern" && (
                                                <p className='alerta'>¡Atención! La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales</p>
                                            )
                                        }
                                    </div>

                                    <div className="input-group mb-3 d-flex justify-content-between">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="formCheck" />
                                            <label htmlFor='formCheck' className="form-check-label" style={{ color: 'black' }}>Recuerdame</label>
                                        </div>
                                        <div>
                                            <small><a href="#">¿Olvidaste tu contraseña?</a></small>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg w-100 pt-3" id="btnIniciarSesion">Iniciar Sesión</button>
                                </form>
                                <div className="text-center">
                                    <small style={{ color: 'black', marginRight: '15px' }}>¿No tienes cuenta? | <a href="/RegistroUsuario" className="fw-bold">Registrate</a></small>
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
