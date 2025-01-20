import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Conversor.css';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";
import AdBanner from '../../components/AdBanner';

const Peso = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');
  const [dePeso, setDePeso] = useState('quilogramas');
  const [paraPeso, setParaPeso] = useState('gramas');

  const converterPeso = () => {
    if (!valor) {
      toast.error("Por favor, insira um valor para converter.", {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const peso = parseFloat(valor) || 0;
    let convertedWeight;

    switch (paraPeso) {
      case 'quilogramas':
        convertedWeight = dePeso === 'gramas' ? peso / 1000 : dePeso === 'libras' ? peso / 2.20462 : dePeso === 'toneladas' ? peso * 1000 : peso;
        break;
      case 'gramas':
        convertedWeight = dePeso === 'quilogramas' ? peso * 1000 : dePeso === 'libras' ? peso * 453.592 : dePeso === 'toneladas' ? peso * 1000000 : peso;
        break;
      case 'libras':
        convertedWeight = dePeso === 'quilogramas' ? peso * 2.20462 : dePeso === 'gramas' ? peso / 453.592 : dePeso === 'toneladas' ? peso * 2204.62 : peso;
        break;
      case 'toneladas':
        convertedWeight = dePeso === 'quilogramas' ? peso / 1000 : dePeso === 'gramas' ? peso / 1000000 : dePeso === 'libras' ? peso / 2204.62 : peso;
        break;
      default:
        convertedWeight = 0;
    }

    setResultado(`${convertedWeight} ${paraPeso}.`);
  };

  const handleValorChange = (e) => {
    const novoValor = e.target.value;
    setValor(novoValor);
    if (!novoValor) {
      setResultado('');
    }
  };

  return (
    <>
      <div className="box-card">
        <div className="converter-container">
          <h1 className="titulo-convert">Conversor de Peso</h1>
          <div className="input-section">
            <input
              className="input-convert"
              type="number"
              value={valor}
              onChange={handleValorChange}
              placeholder="Digite um valor"
            />

            <select className="select-convert" value={dePeso} onChange={(e) => setDePeso(e.target.value)}>
              <option value="quilogramas">Quilogramas</option>
              <option value="gramas">Gramas</option>
              <option value="libras">Libras</option>
              <option value="toneladas">Toneladas</option>
            </select>
            <label><FaArrowDown /></label>
            <select className="select-convert" value={paraPeso} onChange={(e) => setParaPeso(e.target.value)}>
              <option value="quilogramas">Quilogramas</option>
              <option value="gramas">Gramas</option>
              <option value="libras">Libras</option>
              <option value="toneladas">Toneladas</option>
            </select>
            <div className="output-section">
              <label className="resultado">Resultado:</label>
              <input
                className="input-convert"
                type="text"
                readOnly
                value={resultado ? resultado : ""}
              />
              <button className="btn-convert" onClick={converterPeso}>Converter</button>
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

export default Peso;
