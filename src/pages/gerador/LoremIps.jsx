import React, { useState } from 'react';
import { FaCopy, FaTrashRestore } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdBanner from '../../components/AdBanner';

import './styles/gerador.css';
import Footer from '../Footer'

const LoremIpsumGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1); // Estado para armazenar o número de parágrafos
  const [generatedText, setGeneratedText] = useState(''); // Estado para armazenar o texto gerado
  const [copied, setCopied] = useState(false); // Estado para armazenar o status de cópia

  // Função para gerar o Lorem Ipsum com o número especificado de parágrafos
  const generateLoremIpsum = () => {
    const parsedNumParagraphs = parseInt(numParagraphs, 10);

    if (isNaN(parsedNumParagraphs) || parsedNumParagraphs <= 0) {
      toast.error('Por favor, insira um número válido de parágrafos.', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    const text = Array.from({ length: parsedNumParagraphs }, () => loremIpsum).join('\n\n');
    setGeneratedText(text);
    setCopied(false); // Reset copied status when new text is generated
  };

  // Função para copiar o texto gerado para a área de transferência
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      toast.success('Texto copiado para a área de transferência!', {
        position: 'top-right',
        autoClose: 2000,
      });
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
    });
  };

  // Função para deletar o texto gerado
  const deleteGeneratedText = () => {
    setGeneratedText('');
  };

  return (
    <>
      <div className="lorem-generator" >
        <h2 className="lorem-title" >Gerador de Lorem Ipsum</h2>
        <div className="lorem-form-group">
          <label htmlFor="numParagraphs" className="lorem-label">Número de Parágrafos:</label>
          <input
            type="number"
            id="numParagraphs"
            className="lorem-input"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(e.target.value)}
          />
        </div>
        <button className="lorem-button" onClick={generateLoremIpsum}>Gerar</button>
        {generatedText && (
          <div className="lorem-generated-text">
            <h3 className="lorem-subtitle">Texto Gerado:</h3>
            <div className="text-copy-container">
              <textarea
                className="text-area output"
                value={generatedText}
                readOnly
                rows="5"
              />
              <button className="lorem-copy" onClick={copyToClipboard}>
                <FaCopy className="copy-confirmation" />
              </button>
              <button className="lorem-copy" onClick={deleteGeneratedText}>
                <FaTrashRestore className="delete-button" />
              </button>
            </div>
          </div>
        )}
      </div>
       <AdBanner />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default LoremIpsumGenerator;
