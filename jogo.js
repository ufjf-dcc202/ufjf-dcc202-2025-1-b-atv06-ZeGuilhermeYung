import { inicializaTabuleiro } from './tabuleiro.js';
import { validaMovimento, verificaVitoria } from './regras.js';

const estadoInicial = ['preta', 'preta', 'preta', null, 'branca', 'branca', 'branca'];
let estadoAtual = [...estadoInicial];

const tabuleiro = document.querySelector('.tabuleiro');
const btnReiniciar = document.querySelector('#reiniciar');
let pecaSelecionada = null;

function movePeca(daPosicao, paraPosicao) {
    if (validaMovimento(estadoAtual, daPosicao, paraPosicao)) {
        estadoAtual[paraPosicao] = estadoAtual[daPosicao];
        estadoAtual[daPosicao] = null;
        atualizaJogo();
        
        if (verificaVitoria(estadoAtual)) {
            setTimeout(() => alert('Parabéns! Você conseguiu inverter as peças!'), 100);
        }
    }
}

function reiniciaJogo() {
    estadoAtual = [...estadoInicial];
    atualizaJogo();
}

export function atualizaJogo() {
    inicializaTabuleiro(estadoAtual, tabuleiro);
}

export function configuraEventos() {
    tabuleiro.addEventListener('click', (e) => {
        const espaco = e.target.closest('.espaco');
        const peca = e.target.closest('.peca');
        
        if (peca) {
            pecaSelecionada = parseInt(peca.dataset.posicao);
        } else if (espaco && pecaSelecionada !== null) {
            const paraPosicao = parseInt(espaco.getAttribute('posicao'));
            movePeca(pecaSelecionada, paraPosicao);
            pecaSelecionada = null;
        }
    });
    
    btnReiniciar.addEventListener('click', reiniciaJogo);
}