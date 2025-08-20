export function validaMovimento(estadoAtual, daPosicao, paraPosicao) {
    if (daPosicao === paraPosicao) return false;
    
    if (estadoAtual[paraPosicao] !== null) return false;
    
    if (Math.abs(daPosicao - paraPosicao) === 1) return true;
    
    if (Math.abs(daPosicao - paraPosicao) === 2) {
        const pulaPeca = (daPosicao + paraPosicao) / 2;
        return estadoAtual[pulaPeca] !== null;
    }
    
    return false;
}

export function verificaVitoria(estadoAtual) {
    const condicaoVitoria = ['branca', 'branca', 'branca', null, 'preta', 'preta', 'preta'];
    return JSON.stringify(estadoAtual) === JSON.stringify(condicaoVitoria);
}