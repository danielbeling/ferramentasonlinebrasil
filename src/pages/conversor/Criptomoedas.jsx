import React, { useState } from 'react';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/Conversor.css';

const CriptoParaMoeda = () => {
  const [valor, setValor] = useState("");
  const [criptoMoeda, setCriptoMoeda] = useState("BTC");
  const [moedaFiduciaria, setMoedaFiduciaria] = useState("USD");
  const [resultado, setResultado] = useState(null);

  function converterCriptoParaMoeda() {
    if (valor <= 0 || valor === "") {
      toast.error("Por favor, insira um valor válido para conversão.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return setResultado(null);
    }
    fetch(`https://api.coinbase.com/v2/prices/${criptoMoeda}-${moedaFiduciaria}/buy`)
      .then(resp => resp.json())
      .then(data => {
        const rate = parseFloat(data.data.amount);
        setResultado(valor * rate);
      })
      .catch(error => console.error('Erro ao converter criptomoeda para moeda:', error));
  }

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h2>Conversor de Criptomoeda</h2>
          <div className="input-section">
            <input
              className="input-convert"
              placeholder="Digite um valor"
              type="number"
              value={valor}
              onChange={(e) => {
                setValor(e.target.value);
                if (e.target.value === "") {
                  setResultado(null);
                }
              }}
            />

            <select className="select-convert" value={criptoMoeda} onChange={(e) => setCriptoMoeda(e.target.value)}>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="LTC">Litecoin (LTC)</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
            <label><FaArrowDown /></label>
            <select className="select-convert" value={moedaFiduciaria} onChange={(e) => setMoedaFiduciaria(e.target.value)}>
              <option value="USD">Dólar Americano (USD)</option>
              <option value="BRL">Real Brasileiro (BRL)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">Libra Esterlina (GBP)</option>
              <option value="JPY">Iene Japonês (JPY)</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
            <div className="output-section">
              <label className="resultado">Resultado:</label>
              <input
                className="input-convert"
                type="text"
                readOnly
                value={resultado !== null ? resultado.toFixed(2) : ""}
              />
              <button className="btn-convert" onClick={() => converterCriptoParaMoeda()}>Converter</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default CriptoParaMoeda;
