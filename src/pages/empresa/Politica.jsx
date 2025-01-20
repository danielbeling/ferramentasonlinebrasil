import React from 'react';
import './styles/Empresa.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import AdBanner from '../../components/AdBanner';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="politica">
        <div className="privacy-policy-container">
          <h1 className="politica-h1">Política de Privacidade</h1>
          <p className="politica-text">
            Bem-vindo à nossa Política de Privacidade. Sua privacidade é importante para nós. Esta política explica como lidamos com suas informações pessoais.
          </p>
          <h2 className="politica-titulo">Coleta de Informações</h2>
          <p className="politica-text">
            Informamos que não coletamos, armazenamos ou processamos nenhum dado pessoal em nossos servidores. Toda a interação e utilização de nossos serviços são realizadas sem a necessidade de coleta de informações pessoais.
          </p>
          <h2 className="politica-titulo">Segurança</h2>
          <p className="politica-text">
            Embora não armazenemos dados pessoais, adotamos medidas rigorosas para garantir a segurança e a privacidade de qualquer informação que possa ser compartilhada conosco durante o uso de nossos serviços.
          </p>
          <h2 className="politica-titulo">Alterações nesta Política</h2>
          <p className="politica-text">
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
          </p>
          <h2 className="politica-titulo">Contato</h2>
          <p className="politica-text" id="esp">
            Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em
            <Link to={'/contact'} style={{ color: 'green', textDecoration: 'none', margin: '1px' }}> Contato</Link> conosco através do nosso email de suporte.
          </p>
        </div>
      </div>
      <AdBanner />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
