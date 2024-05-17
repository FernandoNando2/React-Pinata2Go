import React from 'react'
import './Piñatas.css'
import piñata_1 from '../../assets/piñata-1.png'
import piñata_2 from '../../assets/piñata-2.png'
import piñata_3 from '../../assets/piñata-3.png'
import piñata_4 from '../../assets/piñata-4.png'

const Piñatas = () => {
  return (
    <div className='piñatas'>
        <div className="galeria">
            <img src={piñata_1} alt="" />
            <img src={piñata_2} alt="" />
            <img src={piñata_3} alt="" />
            <img src={piñata_4} alt="" />
        </div>
        <button className='btn dark-btn'>Ver más</button>
    </div>
  )
}

export default Piñatas