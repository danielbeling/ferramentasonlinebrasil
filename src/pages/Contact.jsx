import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './styles/global.css';
import Footer from './Footer';

import { FaRegEnvelope } from "react-icons/fa";

import Instagram from '../img/instagram.png';
import Linkedin from '../img/linkedin.png';
import Whatsapp from '../img/zap.png';
import BG from '../img/favicon.png'

const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);


  const url = `https://wa.me/5569993758880`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_9vqu0wf", "template_0gzxqf8", templateParams, "8rklyp6N-fapeFR2W")
      .then((response) => {
        alert("Email enviado com sucesso!")
        setName('')
        setMessage('')
        setEmail('')
      }, (err) => {
        console.log("ERRO: ", err)
      })
  }

  return (
    <>
      <div className="container_contact">

        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Vamos entrar em contato</h3>
            <p className="contact_text">
              Contacte-nos para relatar um problema, esclarecer dúvidas sobre o Ferramentas Online Brasil, ou apenas para dar uma sugestão..
            </p>
            <div className="social-media">
              <p>Conecte-se conosco:</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/danielbeling_?igsh=a3JoaHcxa3U4Nzl0" target="_blank" rel="noreferrer" >
                  <img src={Instagram} alt="" style={{ width: '30px' }} />
                </a>
                <a href="#">
                  <img src={Linkedin} alt="" style={{ width: '30px' }} />
                </a>
                <Link to={url} target="_blank">
                  <img src={Whatsapp} alt="" style={{ width: '30px' }} />
                </Link>

              </div>
            </div>
          </div>

          <div className="contact-form">

            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" onSubmit={sendEmail}>
              <h3 className="titulo-contact">Entre em contato conosco</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <label htmlFor="">Nome</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>

              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                >

                </textarea>
                <label htmlFor="">Mensagem</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Enviar" className="btn" />
            </form>
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
};

export default Contact;
