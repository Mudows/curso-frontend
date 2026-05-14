// ============================================================
// BATALHA NAVAL — InovaWeb Games
// script.js — GABARITO
// ============================================================


// ------------------------------------------------------------
// VARIAVEIS GLOBAIS DO JOGO
// ------------------------------------------------------------

let tabuleiro;
let naviosRestantes;
let tentativas;
let jogoAtivo;


// ------------------------------------------------------------
// REFERENCIAS AO DOM
// ------------------------------------------------------------

const elTabuleiro  = document.querySelector('#tabuleiro');
const elMensagem   = document.querySelector('#mensagem');
const elTentativas = document.querySelector('#tentativas');
const btnReiniciar = document.querySelector('#btn-reiniciar');


// ------------------------------------------------------------
// FUNCAO: criarTabuleiro
// Retorna uma matriz 5x5 preenchida com zeros
// Desafio 1
// ------------------------------------------------------------

function criarTabuleiro() {
  const matriz = [];
  const tamanho = 5;

  for (let linha = 0; linha < tamanho; linha++) {
    const linhaArray = [];

    for (let coluna = 0; coluna < tamanho; coluna++) {
      linhaArray.push(0);
    }

    matriz.push(linhaArray);
  }

  return matriz;
}


// ------------------------------------------------------------
// FUNCAO: posicionarNavios
// Marca 3 posicoes fixas no tabuleiro com o valor 1
// Desafio 2
// ------------------------------------------------------------

function posicionarNavios(tabuleiro) {
  tabuleiro[0][2] = 1;
  tabuleiro[2][4] = 1;
  tabuleiro[4][1] = 1;
}


// ------------------------------------------------------------
// FUNCAO: atirar
// Processa um tiro na posicao (linha, coluna)
// Desafio 3
// ------------------------------------------------------------

function atirar(tabuleiro, linha, coluna) {
  const celula = tabuleiro[linha][coluna];

  // Posicao ja atingida — ignora sem contar tentativa
  if (celula === 2 || celula === 3) {
    elMensagem.textContent = 'Posicao ja atingida!';
    return;
  }

  // Acerto
  if (celula === 1) {
    tabuleiro[linha][coluna] = 2;
    naviosRestantes--;
    tentativas++;
    elMensagem.textContent = 'Acerto!';
  }

  // Erro
  if (celula === 0) {
    tabuleiro[linha][coluna] = 3;
    tentativas++;
    elMensagem.textContent = 'Agua!';
  }

  // Atualiza contador de tentativas na tela
  elTentativas.textContent = `Tentativas: ${tentativas}`;

  // Verifica vitoria
  if (naviosRestantes === 0) {
    elMensagem.textContent = `Voce venceu em ${tentativas} tentativas!`;
    jogoAtivo = false;
  }
}


// ------------------------------------------------------------
// FUNCAO: renderizarTabuleiro
// Le a matriz e constroi o tabuleiro HTML na tela
// Adiciona evento de clique em cada celula
// Desafios 4 e 5
// ------------------------------------------------------------

function renderizarTabuleiro(tabuleiro) {
  elTabuleiro.innerHTML = '';

  for (let linha = 0; linha < tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {
      const celula = document.createElement('div');
      const valor  = tabuleiro[linha][coluna];

      // Guarda a posicao no elemento para usar no clique
      celula.dataset.linha  = linha;
      celula.dataset.coluna = coluna;

      // Aplica classe visual conforme o valor da celula
      if (valor === 2) {
        celula.classList.add('acerto');
      } else if (valor === 3) {
        celula.classList.add('erro');
      }

      // Evento de clique — processa o tiro
      celula.addEventListener('click', function() {
        if (!jogoAtivo) return;

        const l = Number(celula.dataset.linha);
        const c = Number(celula.dataset.coluna);

        atirar(tabuleiro, l, c);
        renderizarTabuleiro(tabuleiro);
      });

      elTabuleiro.appendChild(celula);
    }
  }
}


// ------------------------------------------------------------
// FUNCAO: iniciarJogo
// Inicializa ou reinicia todas as variaveis e a tela
// Desafio 6
// ------------------------------------------------------------

function iniciarJogo() {
  tabuleiro       = criarTabuleiro();
  naviosRestantes = 3;
  tentativas      = 0;
  jogoAtivo       = true;

  posicionarNavios(tabuleiro);

  elMensagem.textContent   = 'Clique em uma celula para atirar.';
  elTentativas.textContent = 'Tentativas: 0';

  renderizarTabuleiro(tabuleiro);
}


// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------

btnReiniciar.addEventListener('click', function() {
  iniciarJogo();
});


// ------------------------------------------------------------
// INICIO DO JOGO
// ------------------------------------------------------------

iniciarJogo();


// ============================================================
// DESAFIO EXTRA — Navios aleatorios (substitui posicionarNavios)
// ============================================================

function posicionarNaviosAleatorio(tabuleiro, quantidade) {
  let posicionados = 0;

  while (posicionados < quantidade) {
    const linha   = Math.floor(Math.random() * tabuleiro.length);
    const coluna  = Math.floor(Math.random() * tabuleiro[0].length);

    // So posiciona se a celula estiver vazia
    if (tabuleiro[linha][coluna] === 0) {
      tabuleiro[linha][coluna] = 1;
      posicionados++;
    }
  }
}