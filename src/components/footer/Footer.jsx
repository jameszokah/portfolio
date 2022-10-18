import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="wave" style={{width: '100vw'}} />
        <div className="f-content">
            <a href="mailto:jameszokah@gmail.com" ><span>jameszokah@gmail.com</span></a>
            <div className="f-icons">
                <a href="http://github.com/jameszokah" target="_blank" rel="noopener noreferrer">
                    <Github color='white' size={'3rem'} />
                </a>
                <a href="https://linkedin.com/in/james-zokah-860559196/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn color='white' size={'3rem'} />
                </a>
                <a href="https://twitter.com/JamesZokah" target="_blank" rel="noopener noreferrer">
                    <Twitter color='white' size={'3rem'} />
                </a>
                <a href="https://instagram.com/jam_kyn_z" target="_blank" rel="noopener noreferrer">
                    <Insta color='white' size={'3rem'} />
                </a>
                <a href="http://fb.me/james.zokah/" target="_blank" rel="noopener noreferrer">
                    <Facebook color='white' size={'3rem'} />
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer