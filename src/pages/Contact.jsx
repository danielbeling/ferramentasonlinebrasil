import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './styles/global.css';
import Footer from './Footer';
import Instagram from '../img/instagram.png';
import Linkedin from '../img/linkedin.png';
import Whatsapp from '../img/zap.png';
import AdBanner from '../components/AdBanner';

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

  const [isSending, setIsSending] = useState(false); // Estado para gerenciar o botão
  const formRef = useRef(); // Referência para o formulário

  function sendEmail(e) {
    e.preventDefault();

    setIsSending(true); // Desativa o botão ao enviar

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current, // Passa o formulário como referência
        process.env.REACT_APP_USER_ID // Public Key
      )
      .then(
        (response) => {
          alert("Email enviado com sucesso!");
          formRef.current.reset(); // Limpa o formulário
          setIsSending(false); // Reativa o botão
        },
        (err) => {
          console.log("ERRO: ", err);
          alert("Ocorreu um erro ao enviar o email. Tente novamente.");
          setIsSending(false); // Reativa o botão em caso de erro
        }
      );
  }

  return (
    <>
      <div className="container_contact">
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Vamos entrar em contato</h3>
            <p className="contact_text">
              Contacte-nos para relatar um problema, esclarecer dúvidas sobre o Ferramentas Online Brasil, ou apenas para dar uma sugestão.
            </p>
            <div className="social-media">
              <p>Conecte-se conosco:</p>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/danielbeling_?igsh=a3JoaHcxa3U4Nzl0"
                  target="_blank"
                  rel="noreferrer"
                >
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

            <form ref={formRef} onSubmit={sendEmail}>
              <h3 className="titulo-contact">Entre em contato conosco</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="from_name"
                  className="input"
                  required
                />
                <label htmlFor="">Nome</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="user_email"
                  className="input"
                  required
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>

              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  required
                ></textarea>
                <label htmlFor="">Mensagem</label>
                <span>Message</span>
              </div>
              <button type="submit" className="btn" disabled={isSending}>
                {isSending ? "Aguarde..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
       <AdBanner />
      <Footer />
    </>
  );
};

export default Contact;
