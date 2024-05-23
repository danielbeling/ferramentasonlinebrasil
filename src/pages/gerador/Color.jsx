import React, { useState } from 'react';
import Values from 'values.js';
import './styles/gerador.css'

import DisplayColors from './Color/DisplayColors';
import FormColor from './Color/FormColor';
import Footer from '../Footer'

function Color() {
  const [list, setList] = useState(new Values('green').all(5));

  return (
    <>
      <div className="color-container">
        <FormColor setList={setList} />
        <DisplayColors list={list} />
      </div>
      <Footer />
    </>
  )
}

export default Color;