import React, {useState,useEffect} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll'
import icon_menu from '../../assets/icon-menu.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt=''/>
      <ul className={menu ? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Historia</Link></li>
        <li><Link to='founders' smooth={true} offset={-260} duration={500}>Fundadores</Link></li>
        <li><Link to='piñatas' smooth={true} offset={-260} duration={500}>Piñatas</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn-contact'>Contáctanos</Link></li>
      </ul>
      <img src={icon_menu} alt="" className='icon-menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar