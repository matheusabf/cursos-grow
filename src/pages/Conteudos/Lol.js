import React from 'react';
import './lol.css';
import videoThumb from '../../assets/thumbnail-lol.jpg'; // substitua pela imagem real
import treinoImg from '../../assets/training-lol.jpg'; // substitua pela imagem real

export default function Lol() {
  return (
    <div className="lol-wrapper">
      <section className="lol-section intro">
        <h1 className="lol-title">Domine League of Legends</h1>
        <p>Aprenda rotas, builds, macroplay e jogadas em equipe.</p>
        <button className="lol-button">Ver Guias</button>
      </section>

      <section className="lol-section grid">
        <div className="lol-card">
          <h3>Rotações e Macro</h3>
          <p>Controle o mapa e faça jogadas decisivas com sua equipe.</p>
        </div>
        <div className="lol-card">
          <h3>Builds e Itens</h3>
          <p>Saiba quais itens e runas escolher para cada situação.</p>
        </div>
        <div className="lol-card">
          <h3>Jogadas Avançadas</h3>
          <p>Aprenda combos, engage e disengage para dominar as lutas.</p>
        </div>
      </section>

      <section className="lol-section outro">
        <h2>Partidas analisadas</h2>
        <p>Estude replays para melhorar sua tomada de decisão e visão de jogo.</p>
        <button className="lol-button">Comece o Treino</button>
      </section>

      {/* Vídeo */}
      <section className="lol-section video-section">
        <h2>Jogadas em Vídeo</h2>
        <p>Assista highlights e estratégias usadas por profissionais.</p>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="LoL Highlights"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Cards de Destaque */}
      <section className="lol-section grid highlights">
        <div className="lol-highlight-card">
          <h4>Controle de Visão</h4>
          <p>Aprenda a wardar e negar visão para dominar o mapa.</p>
        </div>
        <div className="lol-highlight-card">
          <h4>Posicionamento em Teamfight</h4>
          <p>Saiba como se posicionar para maximizar seu impacto nas lutas.</p>
        </div>
        <div className="lol-highlight-card">
          <h4>Farm e Rotas</h4>
          <p>Otimize seu farm e escolha as rotas certas para snowballar.</p>
        </div>
      </section>

      {/* Texto + Imagem */}
      <section className="lol-section image-text-section white-section">
        <div className="text">
          <h2>Treino Focado</h2>
          <p>
            Pratique last hits, movimentação e tomada de decisão para subir de elo rapidamente.
          </p>
        </div>
        <div className="image">
          <img src={treinoImg} alt="Treinamento LoL" />
        </div>
      </section>

      {/* Citação */}
      <section className="lol-section quote-section">
        <blockquote>
          “A chave do LoL é saber jogar em equipe, não só ser bom individualmente.”
        </blockquote>
        <cite>— Coach da Org</cite>
      </section>

      {/* Chamada Final */}
      <section className="lol-section call-to-action">
        <h2>Quer se tornar um pro?</h2>
        <p>Junte-se ao nosso time de treinadores e eleve seu jogo a outro nível.</p>
        <button className="lol-button">Inscreva-se Já</button>
      </section>
    </div>
  );
}
