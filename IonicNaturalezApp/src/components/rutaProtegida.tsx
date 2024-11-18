import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface RutaAutenticadaProps extends RouteProps {
    children: React.ReactElement; // Aseguramos que `children` sea un elemento React
}

export const RutaAutenticada: React.FC<RutaAutenticadaProps> = ({ children, ...rest }) => {
    const token = localStorage.getItem('token'); // Obtén el token de autenticación

    return (
        <Route
            {...rest} // Pasamos todas las propiedades a `Route`
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect to={{ pathname: "/InicioSesion", state: { from: location } }} />
                )
            }
        />
    );
};

interface RutaNoAutorizadaProps extends RouteProps {
    children: React.ReactElement;
}

export const RutaNoAutorizada: React.FC<RutaNoAutorizadaProps> = ({ children, ...rest }) => {
    const token = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    <Redirect to={{ pathname: "/Home", state: { from: location } }} />
                ) : (
                    children
                )
            }
        />
    );
};

// Exporta solo las interfaces y componentes necesarios
export type { RutaAutenticadaProps, RutaNoAutorizadaProps };   
