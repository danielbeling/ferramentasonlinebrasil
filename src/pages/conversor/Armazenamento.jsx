import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";
import AdBanner from '../../components/AdBanner';

import './styles/Conversor.css';

const Armazenamento = () => {
  const [valorAM, setValorAM] = useState('');
  const [resultadoAM, setResultadoAM] = useState('');
  const [deArmazenamento, setDeArmazenamento] = useState('kilobytes');
  const [paraArmazenamento, setParaArmazenamento] = useState('megabytes');

  const handleValorChange = (e) => {
    const novoValor = e.target.value;
    setValorAM(novoValor);
    if (!novoValor) {
      setResultadoAM('');
    }
  };

  const converterArmazenamento = () => {
    if (!valorAM) {
      toast.error("Por favor, insira um valor para converter.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const tamanho = parseFloat(valorAM) || 0;
    let convertedSize;

    switch (paraArmazenamento) {
      case 'kilobytes':
        convertedSize = deArmazenamento === 'megabytes' ? tamanho * 1000 : deArmazenamento === 'gigabytes' ? tamanho * 1000 * 1000 : deArmazenamento === 'terabytes' ? tamanho * 1000 * 1000 * 1000 : tamanho;
        break;
      case 'megabytes':
        convertedSize = deArmazenamento === 'kilobytes' ? tamanho / 1000 : deArmazenamento === 'gigabytes' ? tamanho * 1000 : deArmazenamento === 'terabytes' ? tamanho * 1000 * 1000 : tamanho;
        break;
      case 'gigabytes':
        convertedSize = deArmazenamento === 'kilobytes' ? tamanho / (1000 * 1000) : deArmazenamento === 'megabytes' ? tamanho / 1000 : deArmazenamento === 'terabytes' ? tamanho * 1000 : tamanho;
        break;
      case 'terabytes':
        convertedSize = deArmazenamento === 'kilobytes' ? tamanho / (1000 * 1000 * 1000) : deArmazenamento === 'megabytes' ? tamanho / (1000 * 1000) : deArmazenamento === 'gigabytes' ? tamanho / 1000 : tamanho;
        break;
      default:
        convertedSize = 0;
    }

    setResultadoAM(` ${convertedSize} ${paraArmazenamento}.`);
  };

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h1 className="titulo-convert">Conversor de Armazenamento</h1>
          <div className="input-section">
            <input
              className="input-convert"
              type="number"
              value={valorAM}
              onChange={handleValorChange}
              placeholder="Digite um valor"
            />

            <select className="select-convert" value={deArmazenamento} onChange={(e) => setDeArmazenamento(e.target.value)}>
              <option value="kilobytes">Kilobytes</option>
              <option value="megabytes">Megabytes</option>
              <option value="gigabytes">Gigabytes</option>
              <option value="terabytes">Terabytes</option>
            </select>
            <label><FaArrowDown /></label>
            <select className="select-convert" value={paraArmazenamento} onChange={(e) => setParaArmazenamento(e.target.value)}>
              <option value="kilobytes">Kilobytes</option>
              <option value="megabytes">Megabytes</option>
              <option value="gigabytes">Gigabytes</option>
              <option value="terabytes">Terabytes</option>
            </select>
            <div className="output-section">
              <label className="resultado">Resultado:</label>
              <input
                className="input-convert"
                type="text"
                readOnly
                value={resultadoAM ? resultadoAM : ""}
              />
              <button className="btn-convert" onClick={converterArmazenamento}>Converter</button>
            </div>
          </div>
        </div>
      </div>
      <AdBanner />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Armazenamento;
