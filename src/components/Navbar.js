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
        <a style={{ color: '#fff', textDecoration: 'none' }} href="/cursos">HOME</a>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="/valorant">ENTRAR EM CONTATO</a>
      </div>
    </nav>
  );
}

