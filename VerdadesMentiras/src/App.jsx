import { useEffect, useState } from 'react'
import './App.css'
import { ListGroup } from 'react-bootstrap';
import Questions from './components/Questions';
import Score from './components/Score';
import Game from './components/Game';
import Start from './components/Start';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

    const [state, setState] = useState(true)
    const [tiempoInicial, setTiempoInicial] = useState(0);
    return (
        <div className='App'>
            {
                state? <Start setTiempoInicial ={setTiempoInicial} setState ={setState}/>:<Game tiempoInicial={tiempoInicial}/>
            }
        </div>
    );
}

export default App
