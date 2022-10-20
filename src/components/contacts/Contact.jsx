import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [done,setDone] = useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact-form' id='Contact'>
        <div className="c-left">
            <div className="c-awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur" style={{backgroundColor: '#ABF1FF94', width: '26rem', height: '14rem', top: '13rem', left: '-13rem'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name..' />
                <input type="email" name="email" className='user' placeholder='Email..' />
                <textarea name='message' className='user' placeholder='Message..' />
                <div className="c-btn2">
                <input type="submit" value="send" className="btn" />

                </div>
                <span className='c-thanks'>{done && 'Thank you for contacting me 😊'}</span>
                <div className="blur c-blur1" style={{backgroundColor: 'var(--purple)', width: '10rem', height: '4rem', top: '0rem', left: '20rem'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact