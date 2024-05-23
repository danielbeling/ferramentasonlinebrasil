import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './styles/global.css';

// Pages
import Hero from './Hero';
import Suggestion from './Suggestion';
import Footer from './Footer';
import Doacao from './empresa/Doacao';

// images
import cash from "../img/cash.png";
import Bitcoin from "../img/bitcoin.png";
import Peso from "../img/peso.png";
import thermometer from '../img/thermometer.png';
import Storage from '../img/storage.png';
import Horas from '../img/horas.png';

import JSON from '../img/json.png';
import IMG from '../img/img.png';
import Route from '../img/route.png';
import Energy from '../img/energy.png';
import Text from '../img/txt.png';
import Numero from '../img/number.png';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  var links = [
    {
      to: '/conversor-moeda',
      icon: <img src={cash} alt="Moeda" style={{ width: '40px', height: '40px' }} />,
      name: 'Dolar Hoje',
      desc: 'Descubra facilmente o valor atual do dólar hoje, bem como de todas as moedas de diferentes países.'
    },
    {
      to: '/conversor-criptomoedas',
      icon: <img src={Bitcoin} alt="Criptomoedas" style={{ width: '40px', height: '40px' }} />,
      name: 'Criptomoedas Hoje',
      desc: 'Descubra facilmente o valor atual das Criptomoedas hoje, converta facilmente criptomoedas para moedas.'
    },
    {
      to: '/conversor-text',
      icon: <img src={Text} alt="horas" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Texto',
      desc: 'Descubra facilmente como converter entre Maiúsculas, Minúsculas e Capitalizar gratuitamente.'
    },
    {
      to: '/imagem-para-pdf',
      icon: <img src={IMG} alt="Imagem" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Imagem',
      desc: 'Converta facilmente suas imagem JPG para PDF rapidamente, gratuitamente e com qualidade.'
    },
    {
      to: '/json-para-csv',
      icon: <img src={JSON} alt="Json" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor JSON',
      desc: 'Converta facilmente seus arquivos JSON para CSV, simples de ler e editar, rapidamente e gratuito.'
    },
    {
      to: '/conversor-peso',
      icon: <img src={Peso} alt="Peso" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Pesos',
      desc: 'Descubra facilmente o valor do peso em quilogramas para libras e de libras para quilogramas.'
    },
    {
      to: '/conversor-temperatura',
      icon: <img src={thermometer} alt="Temperatura" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Temperaturas',
      desc: 'Descubra facilmente a conversão entre Celsius e Fahrenheit e converter Fahrenheit de volta para Celsius.'
    },
    {
      to: '/conversor-armazenamento',
      icon: <img src={Storage} alt="armazenamento" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Disco',
      desc: 'Descubra os valores de todos os tipos de armazenamento, como kilobytes, megabytes, gigabytes e terabytes.'
    },
    {
      to: '/conversor-horas',
      icon: <img src={Horas} alt="horas" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Horas',
      desc: 'Descubra facilmente como converter entre horas, minutos, segundos e milissegundos gratuitamente.'
    },
    {
      to: '/conversor-distancia',
      icon: <img src={Route} alt="horas" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Distancia',
      desc: 'Descubra facilmente como converter entre Quilômetros, metros, milhas e Pés, rapidamente e gratuitamente.'
    },
    {
      to: '/conversor-energia',
      icon: <img src={Energy} alt="horas" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor Energia',
      desc: 'Descubra facilmente como converter entre Joules, Calories, Watts e HorsePower gratuitamente.'
    },
    {
      to: '/conversor-numero',
      icon: <img src={Numero} alt="horas" style={{ width: '40px', height: '40px' }} />,
      name: 'Conversor de Numero',
      desc: "Converta números entre diferentes sistemas numéricos, como binário, decimal, octal e hexadecimal gratuitamente."
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
              <Link className="no_link" onClick={scrollToTop} to={"/geradores"}>Geradores</Link><br />
            </p>

          )}
        </div>
      </div>
      <Hero />
      <Suggestion />
      <Doacao />
      <Footer />
    </>
  );
};

export default Home;
