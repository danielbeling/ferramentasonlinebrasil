import React, { useState } from 'react';
import './styles/Conversor.css';
import Footer from '../Footer'

const NumberConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [base, setBase] = useState('10');
  const [convertedValues, setConvertedValues] = useState({
    binary: '',
    octal: '',
    decimal: '',
    hexadecimal: ''
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === '') {
      setConvertedValues({
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: ''
      });
    } else {
      convertNumber(value, base);
    }
  };

  const handleBaseChange = (e) => {
    const newBase = e.target.value;
    setBase(newBase);
    if (inputValue !== '') {
      convertNumber(inputValue, newBase);
    }
  };

  const convertNumber = (number, base) => {
    let decimalValue;
    try {
      decimalValue = parseInt(number, base);
      setConvertedValues({
        binary: decimalValue.toString(2),
        octal: decimalValue.toString(8),
        decimal: decimalValue.toString(10),
        hexadecimal: decimalValue.toString(16).toUpperCase()
      });
    } catch (e) {
      setConvertedValues({
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: ''
      });
    }
  };

  return (
    <>
      <div className="number-container">
        <h1 className="number-title">Conversor de Números</h1>
        <div className="number-input-group">
          <label className="number-label">
            Número de Entrada:
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="number-input"
            />
          </label>
        </div>
        <div className="number-input-group">
          <label className="number-label">
            Base:
            <select
              value={base}
              onChange={handleBaseChange}
              className="number-select"
            >
              <option value="2">Binário (Base 2)</option>
              <option value="8">Octal (Base 8)</option>
              <option value="10">Decimal (Base 10)</option>
              <option value="16">Hexadecimal (Base 16)</option>
            </select>
          </label>
        </div>
        <div className="number-results">
          <h2 className="number-subtitle">Valores Convertidos</h2>
          <p className="number-result">Binário: {convertedValues.binary}</p>
          <p className="number-result">Octal: {convertedValues.octal}</p>
          <p className="number-result">Decimal: {convertedValues.decimal}</p>
          <p className="number-result">Hexadecimal: {convertedValues.hexadecimal}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NumberConverter;
