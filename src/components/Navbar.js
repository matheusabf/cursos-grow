import React from 'react';
import logo from '../assets/LOGO.png'; // ajuste o caminho se necessário

export default function Nav() {
  return (
    <nav style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',  // <--- adicionado
  backgroundColor: '#000',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1000,
  height: '5rem'
}}>

      <img src={logo} alt="Logo" style={{ height: '40px' }} />

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="/">HOME</a>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="https://api.whatsapp.com/send/?phone=5517981293437&text=Oi%2C+gostaria+de+saber+mais+sobre+os+cursos+da+Grow+Gaming%21&type=phone_number&app_absent=0">ENTRAR EM CONTATO</a>
      </div>
    </nav>
  );
}

