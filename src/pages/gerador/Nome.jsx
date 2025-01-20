import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import { FaCopy } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './styles/gerador.css';
import AdBanner from '../../components/AdBanner';

import Footer from '../Footer'

const CharacterNameGenerator = () => {
  const [characterName, setCharacterName] = useState('');

  const generateName = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    setCharacterName(`${firstName} ${lastName}`);
  };

  const notify = () => {
    toast.success('Nome copiado!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="nome-container" >
        <div className="character-name-generator">
          <h2 className="titulo-nome">Gerador de Nome</h2>
          <div className="input-nome">
            <input
              type="text"
              value={characterName}
              readOnly
              className="character-name-input"
              placeholder="Clique no botão"
            />
            <CopyToClipboard text={characterName} onCopy={notify}>
              <button className="copy-btn-nome">
                <FaCopy />
              </button>
            </CopyToClipboard>
          </div>
          <button onClick={generateName} className="generate-button">
            Gerar Nome
          </button>
          <ToastContainer />
        </div>
      </div>
       <AdBanner />
      <Footer />
    </>
  );
};

export default CharacterNameGenerator;
