import React from 'react'
import './Hero.css'

const Hero = ({setPlayState}) => {

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Un poco de nuestra historia</h1>
        <p>
        Todo comenzó en la incubadora del Instituto Tecnológico y de Estudios Superiores de Monterrey Campus 
        Querétaro, en la que la empresaria decidió idear una empresa exportadora de arte mexicano; Solís se 
        enfocó en la comercialización de piñatas.
        <br />
        Inició con un capital propio de 30 mil pesos y rápidamente empezó a hacerse de clientes no sólo en 
        México, sino también en Estados Unidos.
        <br />
        En 2016, tras relanzar su empresa Yanalteh participó en la segunda temporada de Shark Tank México, 
        donde atrajo la atención de dos inversionistas que inyectaron capital para impulsar Piñata2Go. 
        </p>
        <button className='btn' onClick={()=>{setPlayState(true)}}>Ve el video</button>
      </div>
    </div>
  )
}


export default Hero