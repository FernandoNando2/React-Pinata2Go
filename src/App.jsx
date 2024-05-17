import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Founders from './Components/Founders/Founders'
import Title from './Components/Title/Title'
import Piñatas from './Components/Piñatas/Piñatas'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'
import { useState } from 'react'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero setPlayState={setPlayState}/>
      <div className="container">
        <Title title='Nuestros Fundadores' />
        <Founders/>
        <Title title='Piñatas Disponibles' subTitle='Galeria' />
        <Piñatas/>
        <Title title='Contacta con nosotros' subTitle='Contactanos ' />
        <Contact/>
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App