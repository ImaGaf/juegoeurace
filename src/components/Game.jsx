import React from 'react';
import { useEffect, useState } from 'react'
import Questions from './Questions';
import Score from './Score';


const Game = (tiempoInicial) => {

    const pregunta = null;
    const option = [];
    const respuesta = null;

    const [points, setPoints] = useState(0);
    const [index, setIndex] = useState(0);
    const preguntas = [
    {
        pregunta: "¿Cuál de las siguientes afirmaciones es falsa acerca de EUR-ACE?",
        opciones: ["EUR-ACE es un sistema reconocido a nivel europeo para evaluar programas de ingeniería.", "La certificación EUR-ACE se otorga a programas que cumplen con estándares de calidad establecidos.", "EUR-ACE se enfoca exclusivamente en programas de ciencias sociales."],
        respuesta: 3,
        key: 1
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones sobre EUR-ACE es incorrecta?",
        opciones: ["EUR-ACE promueve la movilidad de estudiantes y profesionales de ingeniería en Europa.", "La certificación EUR-ACE es reconocida en varios países europeos.", "EUR-ACE es un programa de becas para estudiantes de ingeniería."],
        respuesta: 3,
        key: 2
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones acerca de EUR-ACE es verdadera?",
        opciones: ["EUR-ACE evalúa la calidad de programas de estudio en el campo de la ingeniería.", "La certificación EUR-ACE se basa en criterios establecidos por la European Network for Accreditation of Engineering Education (ENAEE).", "EUR-ACE se centra en programas de medicina y salud."],
        respuesta: 1,
        key: 3
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones es falsa acerca de EUR-ACE?",
        opciones: ["EUR-ACE garantiza la calidad de los programas de ingeniería en Europa.", "La certificación EUR-ACE es reconocida en el ámbito europeo.", "EUR-ACE se utiliza principalmente para programas de arte y diseño."],
        respuesta: 3,
        key: 4
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones sobre EUR-ACE es incorrecta?",
        opciones: ["EUR-ACE busca promover la estandarización de programas de ingeniería en Europa.", "La certificación EUR-ACE asegura que los programas cumplan con los estándares de calidad.", "EUR-ACE se aplica a programas de ingeniería y disciplinas afines."],
        respuesta: 1,
        key: 5
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones acerca de EUR-ACE es verdadera?",
        opciones: ["EUR-ACE facilita el reconocimiento mutuo de títulos de ingeniería en Europa.", "La certificación EUR-ACE es otorgada por la European Network for Accreditation of Engineering Education (ENAEE).", "EUR-ACE se utiliza principalmente para evaluar programas de música y arte."],
        respuesta: 1,
        key: 6
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones sobre EUR-ACE es falsa?",
        opciones: ["EUR-ACE promueve la cooperación y el intercambio de conocimientos en el campo de la ingeniería.", "La certificación EUR-ACE garantiza que los programas de ingeniería cumplan con estándares internacionales.", "EUR-ACE es un sistema de acreditación reconocido a nivel europeo."],
        respuesta: 2,
        key: 7
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones es falsa acerca de los beneficios del EUR-ACE?",
        opciones: ["El EUR-ACE facilita la movilidad de los estudiantes de ingeniería dentro de Europa.", "Obtener la certificación EUR-ACE mejora las oportunidades de empleo para los graduados.", "El EUR-ACE proporciona becas exclusivas para estudiantes de ingeniería."],
        respuesta: 3,
        key: 8
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones sobre los beneficios del EUR-ACE es incorrecta?",
        opciones: ["El EUR-ACE garantiza la calidad y la estandarización de los programas de ingeniería.", "La certificación EUR-ACE es reconocida internacionalmente.", "El EUR-ACE solo se aplica a programas de ingeniería civil."],
        respuesta: 3,
        key: 9
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones acerca de los beneficios del EUR-ACE es verdadera?",
        opciones: ["El EUR-ACE mejora el reconocimiento y la comparabilidad de los títulos de ingeniería en Europa.", "Obtener la certificación EUR-ACE asegura una mayor competitividad en el mercado laboral.", "El EUR-ACE ofrece programas de prácticas profesionales obligatorias para los estudiantes de ingeniería."],
        respuesta: 1,
        key: 10
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones es falsa acerca de los beneficios del EUR-ACE?",
        opciones: ["El EUR-ACE promueve la cooperación y el intercambio de conocimientos en el campo de la ingeniería.", "Obtener la certificación EUR-ACE garantiza que los programas de ingeniería cumplen con altos estándares de calidad.", "El EUR-ACE ofrece descuentos en la matrícula para los estudiantes de ingeniería."],
        respuesta: 3,
        key: 11
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones sobre los beneficios del EUR-ACE es incorrecta?",
        opciones: ["El EUR-ACE facilita la movilidad de los ingenieros profesionales dentro de Europa.", "La certificación EUR-ACE es reconocida por empleadores en el campo de la ingeniería.", "El EUR-ACE ofrece programas de tutorías para los estudiantes de ingeniería."],
        respuesta: 3,
        key: 12
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones acerca de los beneficios del EUR-ACE es verdadera?",
        opciones: ["El EUR-ACE asegura que los programas de ingeniería se mantengan actualizados y relevantes.", "Obtener la certificación EUR-ACE proporciona acceso exclusivo a conferencias internacionales de ingeniería.", "El EUR-ACE garantiza la exención de exámenes de admisión en programas de posgrado de ingeniería."],
        respuesta: 1,
        key: 13
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones sobre los beneficios del EUR-ACE es falsa?",
        opciones: ["El EUR-ACE promueve la confianza y la transparencia en la educación en ingeniería.", "La certificación EUR-ACE facilita el reconocimiento de los títulos de ingeniería fuera de Europa.", "El EUR-ACE ofrece financiamiento para proyectos de investigación en ingeniería."],
        respuesta: 3,
        key: 14
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones es incorrecta acerca de los beneficios del EUR-ACE?",
        opciones: ["El EUR-ACE aumenta la competitividad de los programas de ingeniería a nivel global.", "Obtener la certificación EUR-ACE demuestra el cumplimiento de estándares internacionales de calidad.", "El EUR-ACE ofrece descuentos en la compra de equipos y materiales de laboratorio para los programas de ingeniería."],
        respuesta: 3,
        key: 15
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones acerca de los beneficios del EUR-ACE es verdadera?",
        opciones: ["El EUR-ACE fomenta la colaboración entre instituciones educativas y empresas en el campo de la ingeniería.", "La certificación EUR-ACE es válida de por vida una vez obtenida.", "El EUR-ACE ofrece programas de pasantías remuneradas para los estudiantes de ingeniería."],
        respuesta: 1,
        key: 16
    },
    {
        pregunta: "¿Cuál de las siguientes declaraciones es falsa acerca de los beneficios del EUR-ACE?",
        opciones: ["El EUR-ACE ofrece oportunidades de networking con profesionales de ingeniería en toda Europa.", "Obtener la certificación EUR-ACE facilita la transferencia de créditos entre programas de ingeniería.", "El EUR-ACE garantiza un salario mínimo para los graduados de programas de ingeniería."],
        respuesta: 3,
        key: 17
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un objetivo de la Carrera?",
        opciones: [
          "Capacitar al estudiante en procesos, metodologías y estándares utilizando nuevas tecnologías, entornos de aprendizaje físicos y/o virtuales.",
          "Formar Profesionales con la capacidad de conseguir empleo como programador en cualquier parte del mundo por sus bastos conocimientos en lenguajes de programación como java, python, C#, php y C++.",
          "Conocer y aplicar metodologías, herramientas y estándares para la gestión, desarrollo y mantenimiento de los productos resultantes de la aplicación del proceso software."
        ],
        respuesta: 2,
        key: 18
      },
      {
        pregunta: "¿En los resultados de aprendizaje, cuál no forma parte de ellos?",
        opciones: [
          "Análisis en ingeniería.",
          "Investigación e innovación.",
          "Individualidad y Liderazgo."
        ],
        respuesta: 3,
        key: 19
      },
      {
        pregunta: "¿Cuál de las siguientes afirmaciones es un objetivo de la carrera?",
        opciones: [
          "Responder a las necesidades y problemas de las diferentes empresas, instituciones e industrias de las zonas de influencia, mediante avances tecnológicos y científicos.",
          "Satisfacer parcialmente las necesidades identificadas en los diferentes sectores productivos del país, debido a experiencia y conocimientos especializados en la gestión, desarrollo y mantenimiento de productos de software.",
          "Desarrollar competencias profesionales de manera superficial, enfocados en habilidades básicas como el pensamiento, la resolución de problemas y la gestión de proyectos."
        ],
        respuesta: 1,
        key: 20
      },
      {
        pregunta: "¿Cuál de los siguientes No es un resultado de la carrera?",
        opciones: [
          "Responder a las necesidades y problemas de las diferentes empresas, instituciones e industrias de las zonas de influencia.",
          "Aplicar procesos de gestión, desarrollo y mantenimiento de aplicaciones software para apoyar con información oportuna, fiable y eficiente en la toma de decisiones de los niveles estratégicos de las organizaciones e impulsar el cambio.",
          "Desarrollar habilidades de liderazgo en los estudiantes."
        ],
        respuesta: 3,
        key: 21
      },
      {
        pregunta: "¿Cuál de las siguientes declaraciones es falsa acerca de los resultados de aprendizaje mencionados?",
        opciones: [
          "Los resultados de aprendizaje incluyen la capacidad de comunicar eficazmente información, ideas, problemas y soluciones en el ámbito de ingeniería.",
          "Los resultados de aprendizaje incluyen la capacidad de funcionar eficazmente en contextos nacionales e internacionales, tanto de forma individual como en equipo.",
          "Los resultados de aprendizaje incluyen la capacidad de pilotar un avión comercial."
        ],
        respuesta: 3,
        key: 22
      },
      {
        pregunta: "¿Cuál de las siguientes afirmaciones es un objetivo de la carrera?",
        opciones: [
            "Conocer y aplicar metodologías, herramientas y estándares para la gestión, desarrollo y mantenimiento de los productos resultantes de la aplicación del proceso software; tal que, satisfagan las necesidades identificadas en los diferentes sectores productivos del País.",
            "Satisfacer parcialmente las necesidades identificadas en los diferentes sectores productivos del país, debido a experiencia y conocimientos especializados en la gestión, desarrollo y mantenimiento de productos de software.",
            "Desarrollar competencias profesionales de manera superficial, enfocados en habilidades básicas como el pensamiento, la resolución de problemas y la gestión de proyectos."
          ],
          respuesta: 1,
          key: 23
      },
      {
        pregunta: "¿Cuál de las siguientes declaraciones es verdadera acerca de los objetivos de la carrera?",
        opciones: [
            "Apoyar con información oportuna, fiable y eficiente en la toma de decisiones de los niveles estratégicos de las organizaciones e impulsar el cambio de la matriz productiva del país.",
            "Conocer y aplicar metodologías, herramientas y estándares para la gestión, desarrollo y mantenimiento de los productos resultantes de la aplicación del proceso software; tal que, satisfagan las necesidades identificadas en los diferentes sectores productivos del País.",
            "Capacitar al estudiante,y profesores continuamente en procesos, metodologías y estándares utilizando nuevas tecnologías, entornos de aprendizaje físicos y/o virtuales, participación en prácticas pre-profesionales, proyectos de investigación y vinculación, para el desarrollo de las competencias profesionales del ingeniero de software."
        ],
        respuesta: 1,
        key: 24
      },
      {
        pregunta: "¿Cuál de las siguientes declaraciones no es un resultado de aprendizaje de la carrera?",
        opciones: [
            "Capacidad para proyectar, diseñar y desarrollar productos complejos (piezas, componentes, productos acabados, etc.), procesos y sistemas de su especialidad, que cumplan con los requisitos establecidos, incluyendo tener conciencia de los aspectos sociales, de salud y seguridad.",
            "Comprensión de las técnicas aplicables y métodos de análisis, proyecto e investigación y sus limitaciones en el ámbito de su especialidad.",
            "Capacidad para aplicar leyes y reglamentos  de la práctica de la ingeniería de su especialidad."
        ],
        respuesta: 3,
        key: 25
      }
    ];

    const final=()=>{
        if(index == 6){
            return true
        
        }else{
            return false
        }
    }
    
    return (
        <div className='App'>
            <div >
                {
                    final() ? <Score points={points} tiempoInicial={tiempoInicial}/>: <Questions index={index} setIndex={setIndex} points={points} setPoints={setPoints} pregunta={preguntas[index].pregunta} a={preguntas[index].opciones[0]} b={preguntas[index].opciones[1]} c={preguntas[index].opciones[2]} respuesta={preguntas[index].respuesta} />
                }
            </div>
        </div>
    );
};

export default Game;