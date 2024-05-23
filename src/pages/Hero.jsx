import React from 'react';
import './styles/global.css';
import { Link } from 'react-router-dom';

import Curriculo from '../img/curriculum.png';
import Gerador from '../img/settings.png';
import Conversor from '../img/convert.png';


const Hero = () => {

  const links = [
    {
      icon: <img src={Curriculo} alt="" style={{ width: '30px', height: '30px' }} />,
      name: 'Criar Curriculo',
      to: '/curriculo'
    },
    {
      icon: <img src={Gerador} alt="" style={{ width: '30px', height: '30px' }} />,
      name: 'Geradores',
      to: '/geradores'
    },
    {
      icon: <img src={Conversor} alt="" style={{ width: '30px', height: '30px' }} />,
      name: 'Conversores',
      to: '/'
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="hero_container">
      <h1 className="titulo">Procurando outra solução?</h1>
      <div className="hero_content">
        <p className="hero_text">Nós oferecemos uma variedade de ferramentas para ajudar a resolver diversos problemas.</p>
        <div className="list_container">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={scrollToTop}
                  className="links"
                  to={link.to}
                >
                  <div>
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero;
