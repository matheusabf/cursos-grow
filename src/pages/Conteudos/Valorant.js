// src/pages/Conteudos/Valorant.js
import React from 'react';
import './valorant.css';
import videoThumb from '../../assets/thumbvalorant.jpg'; // substitua se tiver outro
import treinoImg from '../../assets/thumbvalorant.jpg'; // substitua com a imagem real

export default function Valorant() {
  return (
    <div className="valorant-wrapper">
      <section className="valorant-section intro">
        <h1 className="valorant-title">Domine o Valorant</h1>
        <p>Aprenda lineups, movimentação tática e domine o clutch no Valorant.</p>
        <button className="valorant-button">Ver Agentes</button>
      </section>

      <section className="valorant-section grid">
        <div className="valorant-card">
          <h3>Lineups e Utilitários</h3>
          <p>Smoke, molotov e flashes: domine os pontos-chave dos mapas.</p>
        </div>
        <div className="valorant-card">
          <h3>Agentes</h3>
          <p>Aprenda as habilidades de cada classe: duelista, sentinela, controlador e iniciador.</p>
        </div>
        <div className="valorant-card">
          <h3>Economia</h3>
          <p>Entenda como comprar em equipe e planejar rounds com eficiência.</p>
        </div>
      </section>

      <section className="valorant-section outro">
        <h2>Partidas comentadas</h2>
        <p>Veja partidas analisadas com foco em decisão e estratégia.</p>
        <button className="valorant-button">Comece sua ranqueada</button>
      </section>

      {/* NOVA SEÇÃO 1 - VÍDEO */}
      <section className="valorant-section video-section">
        <h2>Tática em vídeo</h2>
        <p>Assista e entenda como rotacionar com eficiência.</p>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // substitua pelo vídeo da org
            title="Valorant Tática"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* NOVA SEÇÃO 2 - CARDS DIFERENTES */}
      <section className="valorant-section grid highlights">
        <div className="valorant-highlight-card">
          <h4>Rotações Rápidas</h4>
          <p>Saiba quando girar sem perder mapa.</p>
        </div>
        <div className="valorant-highlight-card">
          <h4>Combos de Habilidades</h4>
          <p>Use sinergia entre agentes para dominar os rounds.</p>
        </div>
        <div className="valorant-highlight-card">
          <h4>Controle de Ultimate</h4>
          <p>Gerencie ults para rounds decisivos.</p>
        </div>
      </section>

      {/* NOVA SEÇÃO 3 - TEXTO + IMAGEM */}
      <section className="valorant-section image-text-section">
        <div className="text">
          <h2>Treino Individual</h2>
          <p>
            Suba de elo treinando sua mira, reflexo e decisões com métodos práticos.
            Aprenda como usar Aim Lab, Deathmatch e mapas customizados.
          </p>
        </div>
        <div className="image">
          <img src={treinoImg} alt="Treinamento Individual" />
        </div>
      </section>

      {/* NOVA SEÇÃO 4 - CITAÇÃO / DESTAQUE */}
      <section className="valorant-section quote-section">
        <blockquote>
          “O verdadeiro diferencial não é a mira, mas a forma como você pensa o jogo.”
        </blockquote>
        <cite>— Coach da Org</cite>
      </section>

      {/* NOVA SEÇÃO 5 - CHAMADA FINAL */}
      <section className="valorant-section call-to-action">
        <h2>Pronto para evoluir?</h2>
        <p>Entre para o treinamento da nossa organização e jogue como profissional.</p>
        <button className="valorant-button">Inscreva-se agora</button>
      </section>
    </div>
  );
}
