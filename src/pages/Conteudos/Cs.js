import React from 'react';
import './cs.css'; // Agora usando o estilo certo
import videoThumb from '../../assets/thumbcs.jpg';
import treinoImg from '../../assets/thumbcs.jpg';

export default function Cs() {
  return (
    <div className="cs-wrapper">
      <section className="cs-section intro">
        <h1 className="cs-title">Domine o Counter-Strike</h1>
        <p>Aprenda smokes, setups, crosshair placement e domine a leitura de jogo.</p>
        <button className="cs-button">Ver Táticas</button>
      </section>

      <section className="cs-section grid">
        <div className="cs-card">
          <h3>Execuções</h3>
          <p>Coordene rushes e domínios com precisão milimétrica.</p>
        </div>
        <div className="cs-card">
          <h3>Roles e Funções</h3>
          <p>Aprenda a ser entry fragger, lurker, suporte ou AWP com maestria.</p>
        </div>
        <div className="cs-card">
          <h3>Economia e Forçados</h3>
          <p>Entenda resets, ecos e como virar rounds desvantajosos.</p>
        </div>
      </section>

      <section className="cs-section outro">
        <h2>Rodadas comentadas</h2>
        <p>Estude rounds reais com foco em leitura e decisão coletiva.</p>
        <button className="cs-button">Comece o Bootcamp</button>
      </section>

      {/* VÍDEO */}
      <section className="cs-section video-section">
        <h2>Mapas em Ação</h2>
        <p>Veja execuções reais nos mapas mais jogados.</p>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/HNSmVDwoN_k"
            title="Execuções CS"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* CARDS DESTAQUE */}
      <section className="cs-section grid highlights">
        <div className="cs-highlight-card">
          <h4>Controle de Bombsite</h4>
          <p>Aprenda a jogar pós-plant de forma inteligente.</p>
        </div>
        <div className="cs-highlight-card">
          <h4>Crosshair Placement</h4>
          <p>Melhore sua mira com posicionamento estratégico.</p>
        </div>
        <div className="cs-highlight-card">
          <h4>Jogadas Avançadas</h4>
          <p>Aprenda fakes, lurks e setups defensivos.</p>
        </div>
      </section>

      {/* TEXTO + IMAGEM */}
      <section className="cs-section image-text-section">
        <div className="text">
          <h2>Rotina de Treino</h2>
          <p>
            Pratique diariamente no Aim Botz, retakes e servidores DM para melhorar tempo de reação,
            prefire e movimentação avançada.
          </p>
        </div>
        <div className="image">
          <img src={treinoImg} alt="Treinamento CS" />
        </div>
      </section>

      {/* CITAÇÃO */}
      <section className="cs-section quote-section">
        <blockquote>
          “CS não é sobre reflexo. É sobre saber o que fazer antes da bala sair.”
        </blockquote>
        <cite>— Capitão da Line Grow</cite>
      </section>

      {/* CHAMADA FINAL */}
      <section className="cs-section call-to-action">
        <h2>Quer subir de nível?</h2>
        <p>Junte-se ao treinamento Grow Gaming e leve seu CS para outro patamar.</p>
        <button className="cs-button">Entrar no time</button>
      </section>
    </div>
  );
}
