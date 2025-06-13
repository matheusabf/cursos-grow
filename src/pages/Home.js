import React, { useState } from 'react';

// Imagens personagens
import valorantImg from '../assets/valorant.png';
import csImg from '../assets/cs.png';
import lolImg from '../assets/lol.png';

// Imagens de fundo
import fundoValorant from '../assets/fundo_valorant.jpg';
import fundoCs from '../assets/fundo_cs.jpg';
import fundoLol from '../assets/fundo_lol.jpg';

// Componentes de conteúdo dos cursos
import Valorant from '../pages/Conteudos/Valorant';
import CounterStrike from '../pages/Conteudos/Cs';
import LeagueOfLegends from '../pages/Conteudos/Lol';

import csLogo from '../assets/cslogo.png';
import lolLogo from '../assets/lollogo.png';
import valorantLogo from '../assets/valorantlogo.png';


const personagens = {
    valorant: valorantImg,
    cs: csImg,
    lol: lolImg,
};

const fundos = {
    valorant: fundoValorant,
    cs: fundoCs,
    lol: fundoLol,
};

export default function Home() {
    const [personagemSelecionado, setPersonagemSelecionado] = useState('valorant');
    const [animandoSaida, setAnimandoSaida] = useState(false);
    const [animandoEntrada, setAnimandoEntrada] = useState(false);
    const [fundoIndex, setFundoIndex] = useState(0);
    const [fundosVisiveis, setFundosVisiveis] = useState([fundos.valorant, '']);

    const trocarPersonagem = (novo) => {
        if (novo === personagemSelecionado) return;

        setAnimandoSaida(true);

        setTimeout(() => {
            setPersonagemSelecionado(novo);

            const novoFundoIndex = fundoIndex === 0 ? 1 : 0;
            const novosFundos = [...fundosVisiveis];
            novosFundos[novoFundoIndex] = fundos[novo];
            setFundosVisiveis(novosFundos);
            setFundoIndex(novoFundoIndex);

            setAnimandoSaida(false);
            setAnimandoEntrada(true);

            setTimeout(() => {
                setAnimandoEntrada(false);
            }, 500);
        }, 500);
    };

    return (
        <>
            {/* Seção principal */}
            <div className="container">
                <div
                    className={`fundo-layer ${fundoIndex === 0 ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${fundosVisiveis[0]})` }}
                />
                <div
                    className={`fundo-layer ${fundoIndex === 1 ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${fundosVisiveis[1]})` }}
                />

                <div className="imagem-container">
                    <img
                        src={personagens[personagemSelecionado]}
                        alt={personagemSelecionado}
                        className={`personagem-img ${animandoSaida
                            ? 'animando-saida'
                            : animandoEntrada
                                ? 'animando-entrada'
                                : ''
                            }`}
                        key={personagemSelecionado}
                    />
                </div>
                <div className="botoes-container">
                    <div className="titulo-jogo">
                        <h1>QUAL GAME<br></br>VOCÊ JOGA?</h1>
                    </div>
                    <div>
                        <button
                            className={`botao ${personagemSelecionado === 'valorant' ? 'ativo' : ''}`}
                            onClick={() => trocarPersonagem('valorant')}
                        >
                            <img src={valorantLogo} alt="Valorant" className="icone-jogo" />
                        </button>
                        <button
                            className={`botao ${personagemSelecionado === 'cs' ? 'ativo' : ''}`}
                            onClick={() => trocarPersonagem('cs')}
                        >
                            <img src={csLogo} alt="Counter-Strike" className="icone-jogo" />
                        </button>
                        <button
                            className={`botao ${personagemSelecionado === 'lol' ? 'ativo' : ''}`}
                            onClick={() => trocarPersonagem('lol')}
                        >
                            <img src={lolLogo} alt="League of Legends" className="icone-jogo" />
                        </button>
                    </div>

                </div>


            </div>

            {/* Conteúdo extra (seções dos cursos) */}
            <div>
                {personagemSelecionado === 'valorant' && <Valorant />}
                {personagemSelecionado === 'cs' && <CounterStrike />}
                {personagemSelecionado === 'lol' && <LeagueOfLegends />}
            </div>

        </>
    );
}
