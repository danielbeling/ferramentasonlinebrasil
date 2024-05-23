import React, { useState } from 'react';
import QrCode from 'qrcode';
import './styles/gerador.css';
import Footer from '../Footer';


import placeholderImage from '../../img/scan.png';

function QrCodeComponent() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState(placeholderImage);
  const [downloadEnabled, setDownloadEnabled] = useState(false); // Estado para controlar a habilitação do download

  function handleGenerate(Link_url) {
    QrCode.toDataURL(Link_url, {
      width: 300,
      margin: 3,
    }, function (err, url) {
      if (err) {
        console.error('Erro ao gerar o QR code:', err);
        return;
      }
      setQrcodeLink(url);
      setDownloadEnabled(true); // Habilita o download quando o QR code é gerado
    })
  }

  function handleQrCode(e) {
    const inputLink = e.target.value;
    setLink(inputLink);
    if (inputLink.trim() === '') {
      // Se o link estiver vazio, exibe a imagem de placeholder
      setQrcodeLink(placeholderImage);
      setDownloadEnabled(false); // Desabilita o download quando o input está vazio
    } else {
      handleGenerate(inputLink);
    }
  }

  return (
    <>
      <div className="qr-container">
        <h1 className="qr-titulo">Gerador de QRCODE</h1>
        <div className="qr-content">
          {/* Exibe a imagem ou o QR code, dependendo do estado atual */}
          {qrcodeLink === placeholderImage ? (
            <img src={qrcodeLink} style={{ width: '300px' }} alt="Placeholder" />
          ) : (
            <img src={qrcodeLink} alt="QR Code" />
          )}
          <input
            className="qr-input"
            placeholder="Digite seu link"
            value={link}
            onChange={handleQrCode}
          />
          {/* Renderiza o link de download apenas se o download estiver habilitado */}
          {downloadEnabled && (
            <a
              className="qr-link"
              href={qrcodeLink}
              download={`qrcode.png`}
            >
              Baixar QR Code
            </a>
          )}
        </div>

      </div>
      <Footer />
    </>
  );
}

export default QrCodeComponent;
