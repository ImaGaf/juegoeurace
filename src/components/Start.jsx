import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Start = ({setState, setTiempoInicial}) => {

    const begin=()=>{
        setState(false)
        setTiempoInicial(performance.now());
    }

    return (
        <div className='start'>
            <h1>Dos Verdades Una Mentira</h1>
            <Button onClick={()=>begin()} variant="success">Start</Button>{' '}
        </div>
    );
};

export default Start;