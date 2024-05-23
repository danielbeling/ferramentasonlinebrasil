import React from 'react';
import { Link } from "react-router-dom";
import './styles/global.css';

import Logo from "../img/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/quemsomos" onClick={scrollToTop}>Nossa Historia</Link></li>
              <li><Link to="/politica" onClick={scrollToTop}>Política de privacidade</Link></li>
              <li><a href="https://link.mercadopago.com.br/ferramentasbrasil" target="_blank" rel="noopener noreferrer">Doação para o projeto</a></li>
            </ul>

          </div>
          <div className="footer-col">
            <h4>Conversor Brasil</h4>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Página Inicial</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contato</Link></li>
              <li><Link to="/dev" onClick={scrollToTop}>Desenvolvedores</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Produtos</h4>
            <ul>
              <li><Link to="/geradores" onClick={scrollToTop}>Geradores</Link></li>
              <li><Link to="/" onClick={scrollToTop}>Conversores</Link></li>
              <li><Link to="/curriculo" onClick={scrollToTop}>Faça seu Currículo</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="form-sub">
              <Link to={"/"} onClick={scrollToTop}><img src={Logo} alt="" className="footer_logo" /></Link>
              <div className="footer-frase">
                <p>© 2024 Ferramentas Online Brasil. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
