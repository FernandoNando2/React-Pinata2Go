import {React, useState} from 'react'
import './Contact.css'
import icon_correo from '../../assets/icon-correo.png'
import icon_telefono from '../../assets/icon-telefono.png'
import icon_direccion from '../../assets/icon-ubicacion.png'
import icon_correo2 from '../../assets/icon-correo2.png'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if(name.length !== 0 && phone.length !== 0 && message.length !== 0){
        alert('Mensaje enviado correctamente')
        const url = 'http://localhost/submit_form.php'
        let fData = new FormData()
        fData.append('name', name)
        fData.append('phone', phone)
        fData.append('message', message)

        axios.post(url, fData)
        .then(res => alert(res.data))
        .catch(err => alert(err))
    }
  }
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Tu opinion importa <img src= {icon_correo} alt="" /></h3>
            <p>
                Sientete libre de mandarnos un mensaje para contactarnos, ya sea para alguna duda o aclaración 
                que te surja, para dar retroalimentación sobre la página o que te gustaría ver.
                <br />
                ¡Tu opinion es de vital importancia para nosotros!
            </p>
            <ul>
                <li> <img src={icon_correo2} className='correo' />ferhdom@gmail.com</li>
                <li><img src={icon_telefono} className='telefono' />+52 (442) 1234567</li>
                <li><img src={icon_direccion} className='direccion' />Av Tecnológico S/N, Centro Histórico,<br /> Centro, 76000 Santiago de Querétaro, Qro.</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label htmlFor='name'>Tu nombre:</label>
                <input type="text" name='name' placeholder='Escribe tu nombre' value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor='phone'>Tu telefono:</label>
                <input type="tel" name='phone' placeholder='Escribe tu telefono' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                <label htmlFor='message'>Escribe tu mensaje aquí:</label>
                <textarea rows="6" placeholder='Escribe tu mensaje' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type='submit' className='btn dark-btn' onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contact