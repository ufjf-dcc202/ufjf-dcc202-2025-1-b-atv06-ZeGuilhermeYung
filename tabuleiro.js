export function inicializaTabuleiro(estadoAtual, espacoTabuleiro) {
    espacoTabuleiro.querySelectorAll('.espaco').forEach((espaco, posicao) => {
        espaco.innerHTML = '';
        
        if (estadoAtual[posicao]) {
            const peca = document.createElement('div');
            peca.className = `peca ${estadoAtual[posicao]}`;
            peca.setAttribute('data-posicao', posicao);
            espaco.appendChild(peca);
        }
    });
}