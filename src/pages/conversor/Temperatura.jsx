import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Conversor.css';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState("");
  const [unidadeOrigem, setUnidadeOrigem] = useState("C");
  const [unidadeDestino, setUnidadeDestino] = useState("F");
  const [resultadoTemp, setResultadoTemp] = useState("");

  const conversoes = {
    CF: (temp) => (temp * 9) / 5 + 32,
    FC: (temp) => ((temp - 32) * 5) / 9,
    CK: (temp) => temp + 273.15,
    FK: (temp) => ((temp - 32) * 5) / 9 + 273.15,
    KC: (temp) => temp - 273.15,
    KF: (temp) => ((temp - 273.15) * 9) / 5 + 32,
  };

  const handleTemperaturaChange = (e) => {
    const novoValor = e.target.value;
    setTemperatura(novoValor);
    if (!novoValor) {
      setResultadoTemp('');
    }
  };

  const converterTemperatura = () => {
    if (temperatura === "") {
      toast.error("Por favor, insira um valor para converter.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const unidade = unidadeOrigem + unidadeDestino;
    const tempValor = parseFloat(temperatura);
    const funcaoConversao = conversoes[unidade];

    if (funcaoConversao) {
      const tempFinal = funcaoConversao(tempValor);
      setResultadoTemp(`${tempFinal.toFixed(2)}°${unidadeDestino}`);
    } else {
      setResultadoTemp(`${tempValor.toFixed(2)}°${unidadeDestino}`);
    }
  };

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h1 className="titulo-convert">Conversor de Temperatura</h1>
          <div className="input-section">
            <input
              className="input-convert"
              type="number"
              value={temperatura}
              onChange={handleTemperaturaChange}
              placeholder="Digite um valor"
            />

            <select className="select-convert" value={unidadeOrigem} onChange={(e) => setUnidadeOrigem(e.target.value)}>
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
              <option value="K">Kelvin</option>
            </select>

            <label><FaArrowDown /></label>

            <select className="select-convert" value={unidadeDestino} onChange={(e) => setUnidadeDestino(e.target.value)}>
              <option value="F">Fahrenheit</option>
              <option value="K">Kelvin</option>
              <option value="C">Celsius</option>
            </select>
            <div className="output-section">
              <label className="resultado">Resultado:</label>
              <input
                className="input-convert"
                type="text"
                readOnly
                value={resultadoTemp}
              />
              <button className="btn-convert" onClick={converterTemperatura}>Converter</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Temperatura;
