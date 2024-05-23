import React from 'react';
import Background from '../../img/logo.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './styles/Empresa.css';
import Doar from './Doacao';

const QuemSomos = () => {
  return (
    <>
      <div className="Qs_container">
        <div className="Qs_card">
          <div className="Qs_content">
            <div>
              <img
                src={Background}
                alt="Background Conversor Brasil"
                className="Qs_img"
              />
            </div>
            <h1 className="Qs_titulo" style={{ margin: '15px' }}>Nossa Historia</h1>
            <p className="Qs_text">
              Ferramentas Online Brasil foi fundado com o propósito principal de priorizar a assistência ao usuário,
              oferecendo acesso a uma variedade de ferramentas online para atender às suas demandas.
              Estabelecido em Rondônia no ano de 2024, nosso objetivo sempre foi proporcionar as melhores ferramentas possíveis.
              este projeto foi concebido com o intuito de simplificar a busca por informações.
            </p>
            <p className="Qs_text">
              Nossa equipe de programadores está sempre atenta e pronta para resolver quaisquer problemas,
              além de desenvolver novas ferramentas para atender às suas necessidades da melhor maneira possível.
            </p>
          </div>
        </div>
      </div>
      <Doar />
      <Footer />
    </>
  )
}

export default QuemSomos;