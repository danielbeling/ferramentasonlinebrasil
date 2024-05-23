import React from 'react';
import '../styles/global.css';
import { Link } from 'react-router-dom';

const Doacao = () => {
  const links = [
    {
      name: 'Contribuir',
      to: 'https://link.mercadopago.com.br/ferramentasbrasil'
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
      <h1 className="titulo">Inspire a Inovação Contribua e Faça a Diferença!</h1>
      <div className="hero_content">
        <p className="hero_text">Seja parte do nosso apoio e ajude-nos a impulsionar o desenvolvimento de novas ferramentas online. Sua doação é fundamental para manter nosso trabalho e inspirar nossa equipe.</p>
        <div className="list_container">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={scrollToTop}
                  className="links-doe blinking-button" // Adicione a nova classe aqui
                  to={link.to}
                  target="_blank"
                >
                  <div className="button_inner">
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

export default Doacao;
