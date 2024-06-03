import React from 'react';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Peso from '../pages/conversor/Peso';
import Moeda from '../pages/conversor/Moeda';
import Temperatura from '../pages/conversor/Temperatura';
import Criptomoedas from '../pages/conversor/Criptomoedas';
import Armazenamento from '../pages/conversor/Armazenamento';
import Horas from '../pages/conversor/Horas';

import Politica from '../pages/empresa/Politica';
import QuemSomos from '../pages/empresa/QuemSomos';
import Doacao from '../pages/empresa/Doacao';
import Dev from '../pages/empresa/Dev';
import QrCode from '../pages/gerador/QrCode';
import Color from '../pages/gerador/Color';
import Senha from '../pages/gerador/Senha';
import Curriculo from '../pages/gerador/Curriculo/Curriculo';
import Wifi from '../pages/gerador/Wifi';
import Gradient from '../pages/gerador/Gradient/GradientColor';
import ConversorImg from '../pages/conversor/ConversorImg';
import JsonCsv from '../pages/conversor/JsonCsv';
import Distancia from '../pages/conversor/distancia';
import Energy from '../pages/conversor/Energy';
import Text from '../pages/conversor/Text';
import Lorem from '../pages/gerador/LoremIps';
import Nome from '../pages/gerador/Nome';
import Number from '../pages/conversor/Number';
import Gerador from '../pages/Gerador';
import Avatar from '../pages/gerador/Avatar';
import Dados from '../pages/gerador/Dadosfk';
import Encurtador from '../pages/encurtador/Encurtador';


import { Routes, Route } from 'react-router-dom'

const AnimRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conversor-armazenamento" element={<Armazenamento />} />
        <Route path="/conversor-criptomoedas" element={<Criptomoedas />} />
        <Route path="/conversor-moeda" element={<Moeda />} />
        <Route path="/conversor-peso" element={<Peso />} />
        <Route path="/conversor-temperatura" element={<Temperatura />} />
        <Route path="/conversor-horas" element={<Horas />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/gerador-qrcode" element={<QrCode />} />
        <Route path="/gerador-color" element={<Color />} />
        <Route path="/gerador-senha" element={<Senha />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/gerador-qrcode-wifi" element={<Wifi />} />
        <Route path="/gerador-gradient" element={<Gradient />} />
        <Route path="/imagem-para-pdf" element={<ConversorImg />} />
        <Route path="/json-para-csv" element={<JsonCsv />} />
        <Route path="/conversor-distancia" element={<Distancia />} />
        <Route path="/conversor-energia" element={<Energy />} />
        <Route path="/conversor-text" element={<Text />} />
        <Route path="/gerador-loremips" element={<Lorem />} />
        <Route path="/gerador-nome" element={<Nome />} />
        <Route path="/conversor-numero" element={<Number />} />
        <Route path="/geradores" element={<Gerador />} />
        <Route path="/gerador-avatar" element={<Avatar />} />
        <Route path="/gerador-dados" element={<Dados />} />
        <Route path="/encurtador" element={<Encurtador />} />


      </Routes>
    </>
  );
};

export default AnimRoutes;
