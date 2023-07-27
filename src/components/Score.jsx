import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const Score = ({points, tiempoInicial}) => {
    
    const tiempoFinal = performance.now();
    const time = ((tiempoFinal - tiempoInicial.tiempoInicial) / 1000).toFixed(2);
    return (
        <div>
            <h1>Felicidades tu Score es: {points}  y tu tiempo fue de: {time} segundos</h1>
        </div>
    );
};
export default Score;