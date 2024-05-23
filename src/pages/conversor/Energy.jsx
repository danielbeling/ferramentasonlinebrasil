import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Conversor.css';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";

const EnergyPowerConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('joules');
  const [outputValue, setOutputValue] = useState('');
  const [outputUnit, setOutputUnit] = useState('calorias');

  const handleInputChange = (e) => {
    const novoValor = e.target.value;
    setInputValue(novoValor);
    if (!novoValor) {
      setOutputValue('');
    }
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const convertValue = () => {
    if (!inputValue) {
      toast.error("Por favor, insira um valor para converter.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setOutputValue('Entrada inválida');
      return;
    }

    let convertedValue;

    // Lógica de conversão para unidades de energia
    if (inputUnit === 'joules' && outputUnit === 'calorias') {
      convertedValue = value / 4.184;
    } else if (inputUnit === 'calorias' && outputUnit === 'joules') {
      convertedValue = value * 4.184;
    }
    // Lógica de conversão para unidades de potência
    else if (inputUnit === 'watts' && outputUnit === 'cavalos') {
      convertedValue = value / 745.7;
    } else if (inputUnit === 'cavalos' && outputUnit === 'watts') {
      convertedValue = value * 745.7;
    }
    // Mesmas unidades
    else if (inputUnit === outputUnit) {
      convertedValue = value;
    }
    // Conversão não suportada
    else {
      setOutputValue('Conversão não suportada');
      return;
    }

    setOutputValue(convertedValue.toFixed(4));
  };

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h2 className="titulo-convert">Conversor de Energia e Potência</h2>
          <div className="input-section">
            <input
              className="input-convert"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Digite um valor"
            />
            <select className="select-convert" value={inputUnit} onChange={handleInputUnitChange}>
              <option value="joules">Joules (J)</option>
              <option value="calorias">Calorias (cal)</option>
              <option value="watts">Watts (W)</option>
              <option value="cavalos">Cavalos (hp)</option>
            </select>
            <label><FaArrowDown /></label>
            <select className="select-convert" value={outputUnit} onChange={handleOutputUnitChange}>
              <option value="joules">Joules (J)</option>
              <option value="calorias">Calorias (cal)</option>
              <option value="watts">Watts (W)</option>
              <option value="cavalos">Cavalos (hp)</option>
            </select>
            <div className="output-section">
              <label className="resultado">Resultado:</label>
              <input
                className="input-convert"
                type="text"
                readOnly
                value={outputValue ? outputValue : ""}
              />
              <button className="btn-convert" onClick={convertValue}>Converter</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default EnergyPowerConverter;
