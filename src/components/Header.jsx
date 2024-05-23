import React, { useState } from 'react';
import Logo from "../img/logo.png";
import './styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [classOn, setClassOn] = useState(false);

  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <img className="logo" src={Logo} alt="logo" style={{ width: "150px" }} />
        </Link>

        <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="https://link.mercadopago.com.br/ferramentasbrasil" target="_blank">Contribuir</Link>
              </li>
              <li>
                <Link to="/geradores">Geradores</Link>
              </li>
              <li>
                <Link to="/">Conversores</Link>
              </li>
              <li>
                <Link to="/curriculo">Currículo</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>

    </header>

  )
}

export default Header;