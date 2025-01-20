import React, { useState } from 'react';
import QrCode from 'qrcode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/gerador.css';
import Footer from '../Footer';
import AdBanner from '../../components/AdBanner';

import placeholderImage from '../../img/scan.png';

function QrCodeWifi() {
  const [wifiData, setWifiData] = useState({ ssid: '', security: '', password: '' });
  const [qrcodeLink, setQrcodeLink] = useState(placeholderImage);
  const [downloadEnabled, setDownloadEnabled] = useState(false);

  function handleGenerateWifiQRCode(data) {
    const wifiString = `WIFI:T:${data.security};S:${data.ssid};P:${data.password};;`;
    QrCode.toDataURL(wifiString, {
      width: 300,
      margin: 3,
    }, function (err, url) {
      if (err) {
        console.error('Erro ao gerar o QR code:', err);
        return;
      }
      setQrcodeLink(url);
      setDownloadEnabled(true);
    })
  }

  function handleWifiDataChange(e) {
    const { name, value } = e.target;
    setWifiData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleQrCodeGeneration() {
    const { ssid, security, password } = wifiData;
    if (ssid.trim() === '' || security.trim() === '' || password.trim() === '') {
      toast.error('Por favor, preencha todos os campos para gerar o QR Code.', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }
    handleGenerateWifiQRCode(wifiData);
  }

  return (
    <>
      <div className="wifi-container">
        <h1 className="wifi-title">Gerador de QRCODE Wi-Fi</h1>
        <div className="wifi-content">
          <div className="wifi-qrcode-container">
            {qrcodeLink === placeholderImage ? (
              <img src={qrcodeLink} style={{ width: '300px' }} alt="Placeholder" />
            ) : (
              <img src={qrcodeLink} alt="QR Code" />
            )}
            <div className="wifi-inputs">
              <input
                className="wifi-input"
                type="text"
                name="ssid"
                placeholder="SSID (Nome da rede)"
                value={wifiData.ssid}
                onChange={handleWifiDataChange}
              />
              <input
                className="wifi-input"
                type="text"
                name="security"
                placeholder="Segurança (WEP, WPA, WPA2)"
                value={wifiData.security}
                onChange={handleWifiDataChange}
              />
              <input
                className="wifi-input"
                type="password"
                name="password"
                placeholder="Senha"
                value={wifiData.password}
                onChange={handleWifiDataChange}
              />
            </div>
            <button className="wifi-button" style={{ cursor: "pointer" }} onClick={handleQrCodeGeneration}>Gerar QR Code</button>
            {downloadEnabled && (
              <a
                className="wifi-download-link"
                style={{ margin: '10px' }}
                href={qrcodeLink}
                download={`wifi_qrcode.png`}
              >
                Baixar QR Code
              </a>
            )}
          </div>
        </div>
      </div>
       <AdBanner />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default QrCodeWifi;
