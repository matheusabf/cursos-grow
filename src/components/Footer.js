// src/components/Footer.js
import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Grow Gaming</h3>
        <p className="footer-text">© {new Date().getFullYear()} Grow Gaming. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
          <a href="/cursos">Cursos</a>
        </div>
      </div>
    </footer>
  );
}
