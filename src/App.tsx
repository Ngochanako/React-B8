
import React, { useState } from 'react'
import Context from './components/B1'
import B3 from './components/B3';
import B4 from './components/B4';
import B5 from './components/B5';
import B6 from './components/B6';
import B7 from './components/B7';
import B8 from './components/B8';

export default function App() {
  const theme:string='blue';
  return (
    <Context.Provider value={theme}>
      <B3 />
      <B4 />
      <B5 />
      <B6 />
      <B7 />
      <B8 />
    </Context.Provider>
  )
}
