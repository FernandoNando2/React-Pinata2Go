import React from 'react'
import './Founders.css'
import yanalteh_solis from '../../assets/yanalteh-solis2.jpg'
import arturo_elias_ayub from '../../assets/arturo-elias-ayub2.jpg'
import rodrigo_herrera from '../../assets/rodrigo-herrera2.jpg'

const Founders = () => {
  return (
    <div className='founders'>
        <div className="founder">
            <img src={arturo_elias_ayub} alt="" />
            <div className="caption">
              <p>Arturo Elías Ayub es un empresario mexicano, director de Alianzas Estratégicas y Contenidos 
                de América Móvil, empresa de telecomunicaciones propiedad de Carlos Slim.</p>
            </div>
        </div>
        <div className="founder">
            <img src={yanalteh_solis} alt="" />
            <div className="caption">
              <p>Yanalteh Solís es una empresaria mexicana, fundadora de Piñata2Go.
                Cuenta con una Licenciatura en Mercadotecnia.</p>
            </div>
        </div>
        <div className="founder">
            <img src={rodrigo_herrera} alt="" />
            <div className="caption">
              <p>Rodrigo Herrera es un empresario mexicano, fundador de Genomma Lab International, una de las 
                principales compañías farmacéuticas de México.</p>
            </div>
        </div>
    </div>
  )
}

export default Founders