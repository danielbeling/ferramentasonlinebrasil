import React, { useState } from 'react';
import './styles/Conversor.css'  // Importa o arquivo CSS
import { FaTrashRestore, FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdBanner from '../../components/AdBanner';
import Footer from '../Footer';

const TextConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionType, setConversionType] = useState('uppercase');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
  };

  const convertText = () => {
    if (inputText.trim() === '') {
      toast.error('Por favor, insira um texto antes de converter.', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    let convertedText;

    switch (conversionType) {
      case 'uppercase':
        convertedText = inputText.toUpperCase();
        break;
      case 'lowercase':
        convertedText = inputText.toLowerCase();
        break;
      case 'capitalize':
        convertedText = inputText.replace(/\b\w/g, (char) => char.toUpperCase());
        break;
      case 'alternating':
        convertedText = inputText.split('').map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
        break;
      default:
        convertedText = inputText;
        break;
    }

    setOutputText(convertedText);
  };

  const clearText = () => {
    setInputText('');
    setOutputText('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      toast.success('Texto copiado para a área de transferência!', {
        position: 'top-right',
        autoClose: 2000,
      });
    });
  };

  return (
    <>
      <div className="text-container">
        <h2 className="text-title">Conversor de Texto</h2>
        <textarea
          className="text-area"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Digite seu texto aqui"
          rows="5"
        />
        <div className="controls">
          <select className="select" value={conversionType} onChange={handleConversionTypeChange}>
            <option value="uppercase">Maiúsculas</option>
            <option value="lowercase">Minúsculas</option>
            <option value="capitalize">Capitalizar</option>
            <option value="alternating">Alternando</option>
          </select>
          <button className="button" onClick={convertText}>Converter</button>
          <span className="icon-container">
            <FaTrashRestore onClick={clearText} className="icon-delete" />
          </span>
          {outputText && (
            <span className="icon-container">
              <FaCopy onClick={copyToClipboard} className="icon-copy" />
            </span>
          )}
        </div>
        {outputText && (
          <div className="output-text">
            <h3 className="text-title">Texto Convertido:</h3>
            <textarea
              className="text-area output"
              value={outputText}
              readOnly
              rows="5"
            />
          </div>
        )}
      </div>
       <AdBanner />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default TextConverter;
