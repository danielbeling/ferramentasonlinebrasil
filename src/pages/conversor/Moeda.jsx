import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Conversor.css';
import { FaArrowDown } from "react-icons/fa";
import Footer from '../Footer';
import Anuncio from '../Anuncio';


const Moeda = () => {
  const [valor, setValor] = useState("");
  const [deMoeda, setDeMoeda] = useState("BRL");
  const [paraMoeda, seParaMoeda] = useState("USD");
  const [resultado, setResultado] = useState("");

  function converterMoeda() {
    if (!valor || valor <= 0) {
      toast.error("Por favor, insira um valor válido para converter.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }
    if (deMoeda === paraMoeda) {
      setResultado(valor);
      return;
    }
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${valor}&from=${deMoeda}&to=${paraMoeda}`)
      .then(resp => resp.json())
      .then((data) => setResultado(data.rates[paraMoeda]));
  }

  function handleValorChange(e) {
    const novoValor = e.target.value;
    setValor(novoValor);
    if (!novoValor) {
      setResultado("");
    }
  }

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h2 className="titulo-convert">Conversor de Moeda</h2>
          <div className="input-section">
            <input
              className="input-convert"
              type="number"
              value={valor}
              onChange={handleValorChange}
              placeholder="Digite um valor"
            />
            <select className="select-convert" value={deMoeda} onChange={(e) => setDeMoeda(e.target.value)}>
              <option value="USD">Dólar Americano (USD)</option>
              <option value="BRL">Real Brasileiro (BRL)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">Libra Esterlina (GBP)</option>
              <option value="JPY">Iene Japonês (JPY)</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
            <label><FaArrowDown /></label>
            <select className="select-convert" value={paraMoeda} onChange={(e) => seParaMoeda(e.target.value)}>
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
                value={resultado ? resultado : ""}
              />
              <button className="btn-convert" onClick={converterMoeda}>Converter</button>
            </div>
          </div>
        </div>
      </div>
      <Anuncio />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Moeda;
