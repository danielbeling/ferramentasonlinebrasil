import React, { useState } from 'react';
import Axios from 'axios';
import './styles/gerador.css';
import Footer from '../Footer';
import AdBanner from '../../components/AdBanner';

const Avatar = () => {
  const [seed, setSeed] = useState(1000);
  const [setSize] = useState(200); // Definindo tamanho do avatar

  function handleGenerate() {
    let x = Math.floor(Math.random() * 1000);
    setSeed(x);
  }

  function downloadImage() {
    Axios({
      method: "get",
      url: `https://robohash.org/${seed}.png?size=${setSize}x${setSize}`,
      responseType: "blob"
    })
      .then((response) => {
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(response.data);
        link.download = `${seed}.png`;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
          window.URL.revokeObjectURL(link.href);
        }, 200);
      })
      .catch((error) => { console.error(error); });
  }

  return (
    <>
      <div className="avatar-container">
        <div className="avatar-nav">
          <p className="avatar-text">Gerador Avatar</p>
        </div>
        <div className="avatar-home">
          <div className="avatar">
            <img className="avatar-img" src={`https://robohash.org/${seed}.png?size=${setSize}x${setSize}`} alt="Avatar" />
          </div>
          <div className="generate">
            <button id="gen" onClick={handleGenerate} className="avatar-btn">Gerar</button>
            <button id="down" onClick={downloadImage} className="avatar-btn">Download</button>
          </div>
        </div>
      </div>
      <AdBanner />
      <Footer />
    </>
  );
}

export default Avatar;
