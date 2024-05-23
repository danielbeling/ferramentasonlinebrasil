import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Conversor.css';
import Footer from '../Footer';
import { FaArrowDown } from "react-icons/fa";

const conversionRates = {
    km: {
        km: 1,
        mi: 0.621371,
        m: 1000,
        ft: 3280.84
    },
    mi: {
        km: 1.60934,
        mi: 1,
        m: 1609.34,
        ft: 5280
    },
    m: {
        km: 0.001,
        mi: 0.000621371,
        m: 1,
        ft: 3.28084
    },
    ft: {
        km: 0.0003048,
        mi: 0.000189394,
        m: 0.3048,
        ft: 1
    }
};

const DistanceConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('km');
    const [outputUnit, setOutputUnit] = useState('mi');
    const [outputValue, setOutputValue] = useState('');

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

    const convertDistance = () => {
        if (!inputValue) {
            toast.error("Por favor, insira um valor para converter.", {
                position: 'top-right',
                autoClose: 2000,
            });
            return;
        }
        const valueInKm = parseFloat(inputValue) * conversionRates[inputUnit].km;
        const convertedValue = valueInKm * conversionRates['km'][outputUnit];
        setOutputValue(convertedValue.toFixed(2));
    };

    return (
        <>
            <div className="box-card">
                <div className="converter-container">
                    <h2 className="titulo-convert">Conversor de Distância</h2>
                    <div className="input-section">
                        <input
                            className="input-convert"
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Digite o valor"
                        />
                        <select className="select-convert" value={inputUnit} onChange={handleInputUnitChange}>
                            <option value="km">Quilômetros</option>
                            <option value="mi">Milhas</option>
                            <option value="m">Metros</option>
                            <option value="ft">Pés</option>
                        </select>
                        <label><FaArrowDown /></label>
                        <select className="select-convert" value={outputUnit} onChange={handleOutputUnitChange}>
                            <option value="km">Quilômetros</option>
                            <option value="mi">Milhas</option>
                            <option value="m">Metros</option>
                            <option value="ft">Pés</option>
                        </select>
                    </div>
                    <div className="output-section">
                        <label className="resultado">Resultado:</label>
                        <input className="input-convert" type="text" value={outputValue} readOnly />
                        <button className="btn-convert" onClick={convertDistance}>Converter</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default DistanceConverter;
