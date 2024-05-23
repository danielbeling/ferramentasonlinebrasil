import React from 'react';
import { Link } from 'react-router-dom'
import './styles/global.css';
import ImgSugg from '../img/discussion.png';

const Suggestion = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="suggestion_container">
      <div className="content">
        <h1 className="sugg_titulo">Deixe sua Sugestão</h1>
        <p className="sugg_text">Você tem alguma sugestão de conversor ou outras melhorias para o nosso site? Por favor, envie agora mesmo. Agradecemos imensamente pela sua colaboração.</p>
        <Link to={'/contact'} onClick={scrollToTop}><button className="btn_sugg">Enviar sugestão</button></Link>
      </div>
      <div className="image_container">
        <img src={ImgSugg} alt="" className="sugg_img" />
      </div>
    </div>
  );
};

export default Suggestion;
