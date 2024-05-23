import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Conversor.css';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";

const Horas = () => {
  const [valorH, setValorH] = useState('');
  const [resultadoH, setResultadoH] = useState('');
  const [deTempo, setDeTempo] = useState('segundos');
  const [paraTempo, setParaTempo] = useState('minutos');

  const converterTempo = () => {
    if (!valorH) {
      toast.error("Por favor, insira um valor para converter.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const tempo = parseInt(valorH) || 0;
    let convertedTime;

    switch (paraTempo) {
      case 'horas':
        convertedTime = deTempo === 'minutos' ? tempo / 60 : tempo / 3600;
        break;
      case 'minutos':
        convertedTime = deTempo === 'horas' ? tempo * 60 : tempo / 60;
        break;
      case 'segundos':
        convertedTime = deTempo === 'minutos' ? tempo * 60 : tempo * 3600;
        break;
      default:
        convertedTime = 0;
    }

    setResultadoH(`${convertedTime} ${paraTempo}.`);
  };

  const handleValorChange = (e) => {
    const novoValor = e.target.value;
    setValorH(novoValor);
    if (!novoValor) {
      setResultadoH('');
    }
  };

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h1 className="titulo-convert">Conversor de Horário</h1>
          <div className="input-section">
            <input
              className="input-convert"
              type="number"
              value={valorH}
              onChange={handleValorChange}
              placeholder="Digite um valor"
            />

            <select className="select-convert" value={deTempo} onChange={(e) => setDeTempo(e.target.value)}>
              <option value="horas">Horas</option>
              <option value="minutos">Minutos</option>
              <option value="segundos">Segundos</option>
            </select>
            <label><FaArrowDown /></label>
            <select className="select-convert" value={paraTempo} onChange={(e) => setParaTempo(e.target.value)}>
              <option value="horas">Horas</option>
              <option value="minutos">Minutos</option>
              <option value="segundos">Segundos</option>
            </select>
            <div className="output-section">
              <label className="resultado">Resultado:</label>
              <input
                className="input-convert"
                type="text"
                readOnly
                value={resultadoH ? resultadoH : ""}
              />
              <button className="btn-convert" onClick={converterTempo}>Converter</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Horas;
