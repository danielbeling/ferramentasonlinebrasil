import React, { useState } from 'react';
import './styles/Conversor.css';
import { IoIosCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../Footer';

function JsonToCsvConverter() {
  const [jsonInput, setJsonInput] = useState('');
  const [csvOutput, setCsvOutput] = useState('');
  const [isJsonToCsv, setIsJsonToCsv] = useState(true);

  const handleInputChange = (event) => {
    setJsonInput(event.target.value);
    if (event.target.value === '') {
      setCsvOutput(''); // Limpa o resultado se a entrada for vazia
    }
  };

  const convertToCsv = (json) => {
    try {
      const jsonData = JSON.parse(json);
      if (!Array.isArray(jsonData)) throw new Error("Invalid JSON array");

      const keys = Object.keys(jsonData[0]);
      const csvData = [
        keys.join(','), // headers
        ...jsonData.map(row => keys.map(key => JSON.stringify(row[key], (key, value) => value ?? '')).join(','))
      ].join('\n');

      return csvData;
    } catch (error) {
      return 'Invalid JSON input';
    }
  };

  const convertToJson = (csv) => {
    try {
      const rows = csv.split('\n').filter(row => row.trim() !== '');
      if (rows.length === 0) return '[]';

      const headers = rows[0].split(',').map(header => header.trim());
      const jsonData = rows.slice(1).map(row => {
        const values = row.split(',').map(value => value.trim());
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {});
      });

      return JSON.stringify(jsonData, null, 2);
    } catch (error) {
      return 'Invalid CSV input';
    }
  };

  const handleConversion = () => {
    if (jsonInput.trim() === '') {
      toast.error('Por favor, insira um texto antes de converter.', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    try {
      if (isJsonToCsv) {
        setCsvOutput(convertToCsv(jsonInput));
      } else {
        setCsvOutput(convertToJson(jsonInput));
      }
    } catch (error) {
      setCsvOutput('Invalid input');
      toast.error('Entrada inválida', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = csvOutput;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    toast.success('Conteúdo copiado para a área de transferência!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const clearInput = () => {
    setJsonInput('');
    setCsvOutput(''); // Limpa o resultado quando o botão de exclusão é clicado
  };

  const toggleConversionMode = () => {
    setIsJsonToCsv(!isJsonToCsv);
    clearInput();
  };

  return (
    <>
      <div className="container-json">
        <h2 className="titulo-json">Conversor de JSON para CSV</h2>
        <div className="content-json">
          <textarea
            rows="10"
            cols="50"
            placeholder={isJsonToCsv ? "Cole os dados JSON aqui" : "Cole os dados CSV aqui"}
            value={jsonInput}
            onChange={handleInputChange}
            className="textarea-json"
          ></textarea>
        </div>
        <div>
          <button className="btn-json" onClick={handleConversion}>
            {isJsonToCsv ? "Converter para CSV" : "Converter para JSON"}
          </button>

          <LuArrowDownUp className="toggle-conversion" id="btn-convert" onClick={toggleConversionMode} style={{ cursor: 'pointer' }} />

        </div>
        <div className="content-json">
          <h3 className="saida-json">Resultado {isJsonToCsv ? "CSV" : "JSON"}</h3>
          <div className="result-container">
            <textarea
              className="textarea-json"
              rows="10"
              cols="50"
              placeholder="A saída aparecerá aqui"
              value={csvOutput}
              readOnly
            ></textarea>
            <div className="copy-btn-json">
              <button className="copy-btn-json" onClick={copyToClipboard}>
                <IoIosCopy className="copy-json" />
              </button>
              <button className="copy-btn-json">
                <MdDelete className="copy-json" id="remove-json" onClick={clearInput} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default JsonToCsvConverter;
