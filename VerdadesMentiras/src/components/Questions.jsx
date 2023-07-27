import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const Questions = ({ index, setIndex, points, setPoints, pregunta, a, b, c, respuesta }) => {

  const comprobación = (selected) => {
    if (respuesta == selected) {
      setPoints(points + 1)
    }
    setIndex(index + 1)
  }

  return (
    <div className='question'>
      <span className='score'>Score: <p>{points}</p></span>
      <ListGroup className='list' as="ol" numbered>
        <h3>{pregunta}</h3>
        <ListGroup.Item classame='option' as="li" onClick={() => comprobación(1)}>{a}</ListGroup.Item>
        <ListGroup.Item classame='option' as="li" onClick={() => comprobación(2)}>{b}</ListGroup.Item>
        <ListGroup.Item classame='option' as="li" onClick={() => comprobación(3)}>{c}</ListGroup.Item>
      </ListGroup>
    </div>

  );
};

export default Questions;