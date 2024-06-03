import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCopy } from 'react-icons/fa';
import './LinkShortener.css';
import Footer from '../Footer'

const LinkShortener = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleShortenUrl = async () => {
    try {
      const response = await axios.get(`https://is.gd/create.php?format=json&url=${encodeURIComponent(inputUrl)}`);

      if (response.data.shorturl) {
        setShortUrl(response.data.shorturl);
        setError('');
        toast.success('Link encurtado com sucesso!');
      } else {
        setError('Não foi possível encurtar o link. Por favor, tente novamente.');
        toast.error('Não foi possível encurtar o link. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Não foi possível encurtar o link. Por favor, tente novamente.');
      toast.error('Não foi possível encurtar o link. Por favor, tente novamente.');
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.info('Link copiado para a área de transferência!');
  };

  return (
    <>
      <div className="encurtador-container">
        <div className="encurta-link-shortener">
          <h2 className="encurta-title">Encurtador de Links</h2>
          <div className="encurta-input-group">
            <input
              className="encurta-input-url"
              type="text"
              value={inputUrl}
              onChange={handleInputChange}
              placeholder="Insira o URL aqui"
            />
            <button className="encurta-shorten-button" onClick={handleShortenUrl}>Encurtar</button>
          </div>
          {shortUrl && (
            <div className="encurta-result">
              <p>Link encurtado:</p>
              <div className="encurta-result-content">
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                  {shortUrl}
                </a>
                <FaCopy className="encurta-copy-icon" onClick={handleCopyClick} />
              </div>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LinkShortener;
