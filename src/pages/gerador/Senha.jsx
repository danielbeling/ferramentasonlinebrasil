import React from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import './styles/gerador.css';
import { FaCopy } from "react-icons/fa6";
import Footer from '../Footer'



function Senha() {
  function getCharTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;

    const charTypes = [];

    if (uppercase) {
      charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
      charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number) {
      charTypes.push('0123456789');
    }

    if (specialCharacter) {
      charTypes.push('!@#$%^&*()_-+={}[]|\\/?><:;"\'.,~`');
    }

    return charTypes;
  }

  function getPasswordSize() {
    const size = document.querySelector('#size').value;

    if (isNaN(size) || size < 4 || size > 128) {
      message('Tamanho inválido, insira um número entre 4 e 128!', 'danger');
      return null;
    }

    return size;
  }

  function generatePassword(size, charTypes) {
    let passwordGenerated = '';

    const selectedChars = charTypes.join('');

    charTypes.forEach(type => {
      passwordGenerated += type[Math.floor(Math.random() * type.length)];
    });

    while (passwordGenerated.length < size) {
      passwordGenerated += selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }

    passwordGenerated = passwordGenerated.split('').sort(() => Math.random() - 0.5).join('');

    return passwordGenerated;
  }

  function message(text, status = 'success') {
    Toastify({
      text: text,
      duration: 2000,
      style: {
        background: status === 'success' ? '#84cc16' : '#dc2626',
        boxShadow: 'none'
      }
    }).showToast();
  }

  function handleGeneratePassword() {
    const size = getPasswordSize();

    if (!size) {
      return;
    }

    const charTypes = getCharTypes();

    if (!charTypes.length) {
      message('Selecione pelo menos um tipo de caractere!', 'danger');
      return;
    }

    const passwordGenerated = generatePassword(size, charTypes);

    document.querySelector('#password_container').classList.add('show');
    document.querySelector('#password').textContent = passwordGenerated;
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(document.querySelector('#password').textContent);
    message('Senha copiada com sucesso!', 'success');
  }

  return (
    <>
      <div id="container">

        <h1 id="title">Gerador de Senha Segura </h1>

        <div id="password_container">
          <span id="password"></span>
          <button id="copy" onClick={handleCopyPassword}>
            <FaCopy />
          </button>
        </div>

        <div id="password_items">
          <div className="item">
            <input className="input-senha" id="size" name="size" type="number" />
            <label htmlFor="size">Comprimento da senha</label>
          </div>

          <div className="item">
            <input className="input-senha" type="checkbox" name="include_uppercase" id="include_uppercase" />
            <label htmlFor="include_uppercase">Incluir letra maiúscula</label>
          </div>

          <div className="item">
            <input className="input-senha" type="checkbox" name="include_lowercase" id="include_lowercase" />
            <label htmlFor="include_lowercase">Incluir letra minúscula</label>
          </div>

          <div className="item">
            <input className="input-senha" type="checkbox" name="include_number" id="include_number" />
            <label htmlFor="include_number">Incluir número</label>
          </div>

          <div className="item">
            <input className="input-senha" type="checkbox" name="include_special_character" id="include_special_character" />
            <label htmlFor="include_special_character">Incluir caractere especial</label>
          </div>

          <button id="generate" onClick={handleGeneratePassword}>
            Gerar Senha
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Senha;
