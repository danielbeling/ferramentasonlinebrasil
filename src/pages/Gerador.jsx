import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './styles/global.css';
import AdBanner from '../components/AdBanner';

// Pages
import Hero from './Hero';
import Suggestion from './Suggestion';
import Footer from './Footer';
import Doacao from '../pages/empresa/Doacao';

// images
import QRCODE from '../img/scan.png';
import Password from '../img/password.png';
import Colour from '../img/colour.png';
import Wifi from '../img/wifi.png';
import Gradient from '../img/circle.png';
import Lorem from '../img/lorem.png';
import Nome from '../img/id-card.png';
import Avatar from '../img/robot.png';
import Fake from '../img/fake.png';

const Gerador = () => {
  const [searchTerm, setSearchTerm] = useState('');

  var links = [
    {
      to: '/gerador-qrcode',
      icon: <img src={QRCODE} alt="QRCODE" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de QRCODE',
      desc: 'Descubra facilmente como Gerar QRCODE usando URLs gratuito.'
    },
    {
      to: '/gerador-qrcode-wifi',
      icon: <img src={Wifi} alt="QRCODE Wi-Fi" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de QRCODE WI-FI',
      desc: 'Descubra facilmente como Gerar QRCODE do seu Wi-Fi gratuito.'
    },
    {
      to: '/gerador-senha',
      icon: <img src={Password} alt="Senha" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de Senha',
      desc: "Descubra como gerar senhas seguras com facilidade e gratuito."
    },
    {
      to: '/gerador-color',
      icon: <img src={Colour} alt="Cores" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de Cores',
      desc: "Descubra como gerar uma variedade de cores com facilidade e gratuito."
    },
    {
      to: '/gerador-gradient',
      icon: <img src={Gradient} alt="Gradient" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de Gradient',
      desc: "Descubra como gerar uma variedade de gradient com facilidade e gratuito."
    },
    {
      to: '/gerador-loremips',
      icon: <img src={Lorem} alt="Lorem" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de LoremIps',
      desc: "Descubra como gerar texto LoremIps com facilidade e gratuito."
    },
    {
      to: '/gerador-nome',
      icon: <img src={Nome} alt="Nome" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de Nome',
      desc: "Descubra como gerar nome de personagem com facilidade e gratuito."
    },
    {
      to: '/gerador-avatar',
      icon: <img src={Avatar} alt="Nome" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de Avatar',
      desc: "Descubra como gerar Avatar de personagem com facilidade e gratuito."
    },
    {
      to: '/gerador-dados',
      icon: <img src={Fake} alt="Nome" style={{ width: '40px', height: '40px' }} />,
      name: 'Gerador de Dados',
      desc: "Descubra como gerar uma variedade de Dados Fakes com facilidade e gratuito."
    },
  ];

  const filteredLinks = links.filter(link =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="home_container" id="topo">
        <div className="home_text">
          <h1 className="home_titulo">Ferramentas Online Brasil</h1>
          <p className="home_p">Descubra o poder do nosso site com uma infinidade de ferramentas geradoras e conversores, tudo totalmente gratuito e ao seu alcance.</p>
        </div>

        <div className="search_container">
          <input
            type="text"
            placeholder="Pesquise por ferramentas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_input"
          />
          <FaSearch className="search_icon" />
        </div>

        <div className="main">
          {filteredLinks.length > 0 ? (
            <ul className="cards">
              {filteredLinks.map((link, index) => (
                <li className="cards_item" key={index}>
                  <div className="card">
                    <div className="card_content">
                      <Link
                        onClick={scrollToTop}
                        to={link.to}
                        className="card_title">
                        <div className='card_icon'>
                          <span>{link.icon}</span>
                        </div>
                        <h1 className="card_titulo">{link.name}</h1>
                        <p className="card_text">{link.desc}</p>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no_results">Nenhuma ferramenta encontrada.<br /> Talvez você encontre oque procura em outro lugar:<br /><br />
              <Link className="no_link" onClick={scrollToTop} to={"/"}>Conversores</Link><br />
            </p>
          )}
        </div>
      </div>
      <Hero />
      <Suggestion />
       <AdBanner />
      <Doacao />
      <Footer />
    </>
  );
};

export default Gerador;
