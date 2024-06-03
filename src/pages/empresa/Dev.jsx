import React from 'react';
import Banner from '../../img/banner.webp';
import Footer from '../Footer';
import './styles/Empresa.css'

const Dev = () => {
  return (
    <>
      <div className="dev_container">
        <div className="dev_card">
          <div className="dev_content">
            <h1 className="dev_titulo">Desenvolvedores do Ferramentas Online Brasil</h1>
            <p className="dev_text">A equipe do Ferramentas Online Brasil está comprometida em tornar o seu dia mais fácil.
              Criamos o Ferramentas Online Brasil para fornecer todas as informações que você precisa ao alcance das mãos.
              Oferecemos uma variedade de conversores e Geradores estamos constantemente buscando novidades para resolver seus problemas.
            </p>
          </div>
          <div className="dev_cont">
            <h1 className="dev_title">Equipe</h1>
            <div className="dev_eng">
              <div className="dev_img_wrapper">
                <img
                  src={Banner}
                  alt=""
                  className="dev_img"
                />
              </div>
              <h3 className="dev_subtitulo">Daniel Beling</h3>
              <p className="dev_text">Fundador & CEO</p>
              <span>Engenheiro de Software</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dev;
