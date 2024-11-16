import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';

// Validaciones
import { useForm } from 'react-hook-form'


import './RegistroUsuario.css';

const insertUser = async (data: any, reset: () => void) => {
    const formattedData = {
        id_usuario: 1, // Agregar el campo id_usuario
        nombre: data.nombre,
        password: data.password,
        email: data.email,
        id_region: parseInt(data.region, 10), // Convertir región a entero
    };
    delete data.confPassword;
    console.log('Datos enviados al servidor:', formattedData);
    try {
        const response = await fetch("http://localhost:3001/registroUsuario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData),
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Usuario registrado:', result);
            alert('Usuario registrado con éxito');
            reset();
        } else {
            const errorResponse = await response.json();
            console.error('Error al registrar el usuario:', errorResponse);
            alert('Error al registrar el usuario');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error de conexión');
    }
}

const RegistroUsuario: React.FC = () => {

    const { register, formState: { errors }, handleSubmit, watch, reset } = useForm();

    const [regiones, setRegiones] = useState<any[]>([]); // Para almacenar las regiones
    const [selectedRegion, setSelectedRegion] = useState<string>(''); // Región seleccionada

    const password = watch("password")

    useEffect(() => {
        const fetchRegiones = async () => {
            try {
                const response = await fetch("http://localhost:3001/regiones"); // Endpoint del backend
                if (!response.ok) {
                    throw new Error('Error al obtener regiones');
                }
                const data = await response.json();
                setRegiones(data); // Guardar las regiones en el estado
            } catch (error) {
                console.error('Error al cargar regiones:', error);
            }
        };
        fetchRegiones();
    }, []);

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const regionName = event.target.value; // Obtener el valor seleccionado
        setSelectedRegion(regionName); // Actualizar el estado
    };
    

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
                                        <img src="assets/icon/NaturalezApp-Icon.svg" alt='NaturalezaApp - Icon' style={{ width: 30 }} />

                                    </a>
                                    <small className="d-flex justify-content-center mb-1" style={{ color: '#A5BE7D;', marginBottom: 0 }}>NaturalezApp</small>
                                    <div className="text-center mb-3">
                                        <h3 className="fw-bold" style={{ marginTop: 0 }}>Registro de cuenta</h3  >
                                    </div>
                                    <form onSubmit={handleSubmit((data) => insertUser(data, reset))}>
                                        <div className="input-group mb-3" >
                                            <span className="input-group-text">
                                                <i className="bx bx-user"></i>
                                            </span>
                                            {/* <input type="text" className="form-control form-control-lg fs-6" placeholder="Usuario" name="nombre" id="nombre" /> */}
                                            <input type="text" className="form-control form-control-lg fs-6" placeholder="Nombre" id="nombre" {...register("nombre", { required: true, minLength: 2, maxLength: 50, pattern: /^[A-Za-z ]+$/i })} />
                                            {
                                                errors.nombre?.type === "required" && (
                                                    <p className='alerta'>¡Alerta! Ingresa el nombre</p>
                                                )
                                            }
                                            {
                                                errors.nombre?.type === "minLength" && (
                                                    <p className='alerta'>¡Atención! Ingresa como minimo 2 caracteres</p>
                                                )
                                            }
                                            {
                                                errors.nombre?.type === "maxLength" && (
                                                    <p className='alerta'>¡Atención! Ingresa como maximo 50 caracteres</p>
                                                )
                                            }
                                            {
                                                errors.nombre?.type === "pattern" && (
                                                    <p className='alerta'>¡Atención! Ingresa un nombre valido</p>
                                                )
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-envelope'></i>
                                            </span>
                                            <input type="email" className="form-control form-control-lg fs-6" placeholder="Correo electrónico" id="email" {...register("email", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, required: true })} />
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
                                                <i className='bx bx-buildings'></i>
                                            </span>
                                            <select className="form-select" id="region" {...register("region", { required: true })} value={selectedRegion} onChange={handleRegionChange}>
                                                <option value="">Selecciona una región</option>
                                                {
                                                    regiones.map((region) => (
                                                        <option key={region.id_region} value={region.id_region}>
                                                            {region.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                            {
                                                errors.region?.type === "required" && (
                                                    <p className='alerta'>¡Alerta! Selecciona una región</p>
                                                )
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-shield-quarter'></i>
                                            </span>
                                            <input type="password" className="form-control form-control-lg fs-6" placeholder="Contraseña" id="password" {...register("password", { required: true, minLength: 8, maxLength: 50, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",./?\\|`~])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:'",./?\\|`~]{8,}$/ })} />
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
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className='bx bx-shield-quarter'></i>
                                            </span>
                                            <input type="password" className="form-control form-control-lg fs-6" placeholder="Confirma contraseña" id="confPassword" {...register("confPassword", { required: true, minLength: 8, maxLength: 50, validate: (value) => { if (value === password) { return true; } else { return "Las contraseñas no coinciden"; } }, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",./?\\|`~])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:'",./?\\|`~]{8,}$/ })} />
                                            {
                                                errors.confPassword?.type === "required" && (
                                                    <p className='alerta'>¡Alerta! Ingresa una contraseña</p>
                                                )
                                            }
                                            {
                                                errors.confPassword?.type === "minLength" && (
                                                    <p className='alerta'>¡Atención! Ingresa como minimo 8 caracteres</p>
                                                )
                                            }
                                            {
                                                errors.confPassword?.type === "pattern" && (
                                                    <p className='alerta'>¡Atención! La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales</p>
                                                )
                                            }
                                            {errors.confPassword?.type === "validate" && (
                                                <p className='alerta'>¡Atención! Las contraseñas no coinciden</p>
                                            )}
                                        </div>
                                        <button className="btn btn-lg w-100 pt-3" id="btnRegistrar" type="submit">Registrar Usuario</button>
                                    </form>
                                    <div className="cuenta-existente">
                                        <small style={{ color: 'black' }}>¿Ya tienes una cuenta? <a href="/inicioSesion">Inicia Sesión</a></small>
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
