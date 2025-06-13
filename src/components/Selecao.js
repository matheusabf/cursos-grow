import React from 'react';

export default function Selecao({ jogos, onSelect, jogoSelecionado }) {
  return (
    <div className="w-1/2 flex flex-col justify-center items-start gap-4 p-6">
      {jogos.map((jogo) => (
        <button
          key={jogo.nome}
          onClick={() => onSelect(jogo.nome)}
          className={`px-4 py-2 rounded font-semibold transition
            ${
              jogoSelecionado === jogo.nome
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
        >
          {jogo.nome}
        </button>
      ))}
    </div>
  );
}
