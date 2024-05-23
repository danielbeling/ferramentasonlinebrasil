import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCopy } from 'react-icons/fa';
import './styles/gerador.css';
import Footer from '../Footer';

const FakeDataGenerator = () => {
  const [fakeData, setFakeData] = useState([]);
  const [dataCount, setDataCount] = useState('');

  useEffect(() => {
    if (dataCount === '') {
      setFakeData([]);
    }
  }, [dataCount]);

  const generateFakeData = () => {
    const count = parseInt(dataCount, 10);
    if (isNaN(count) || count <= 0) {
      toast.error('Por favor, insira um valor válido.');
      return;
    }
    if (count > 10) {
      toast.error('O número máximo de dados é 10.');
      return;
    }

    const data = Array.from({ length: count }).map(() => ({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress(),
    }));
    setFakeData(data);
  };

  const handleCopy = (item) => {
    const text = `
      Nome: ${item.name}
      Email: ${item.email}
      Telefone: ${item.phone}
      Endereço: ${item.address}
    `;
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Dados copiados!');
    }).catch(() => {
      toast.error('Falha ao copiar os dados.');
    });
  };

  return (
    <>
      <div className="fake-container">
        <h1>Gerador de Dados Falsos</h1>
        <form className="fake-form" onSubmit={(e) => { e.preventDefault(); generateFakeData(); }}>
          <input
            type="number"
            className="fake-input"
            value={dataCount}
            onChange={(e) => setDataCount(e.target.value)}
            placeholder="Quantidade de dados"
            min="1"
            max="10"
          />
          <button className="fake-button" type="submit">Gerar Dados Falsos</button>
        </form>
        <p className="fake-warning"><span>*</span>Clique no card para copiar</p>
        <p className="fake-warning">Os dados apresentados são fictícios e servem apenas para fins ilustrativos, então não se preocupe.</p>
        <div className="fake-data-container">
          {fakeData.map((item, index) => (
            <div key={index} className="fake-data-item" onClick={() => handleCopy(item)}>
              <FaCopy className="copy-icon" />
              <p><strong>Nome:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Telefone:</strong> {item.phone}</p>
              <p><strong>Endereço:</strong> {item.address}</p>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default FakeDataGenerator;
