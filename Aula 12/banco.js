const numeroConta = 1;
let titular = 'Diego';
let saldo = 10000;
let contaAtiva = true;
let statusConta;
let historico = [];
let activeSession = true;

const elSaldo = document.querySelector('#saldo')
const elMensagem = document.querySelector('#mensagem')
const btnDepositar = document.querySelector('#btn-depositar')
const btnSacar = document.querySelector('#btn-sacar')
const campValor = document.querySelector('#campo-valor')
const btnBloquear = document.querySelector('#btn-bloquear')
const elTotalDepositos = document.querySelector('#total-depositos')
const elTotalSaques = document.querySelector('#total-saques')
const elTotalTransacoes = document.querySelector('#total-transacoes')

btnDepositar.addEventListener('click', () => {
  const valor = Number(campValor.value)
  depositar(valor)
})

btnSacar.addEventListener('click', () => {
  const valor = Number(campValor.value)
  sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)

function verExtrato() {
  if (contaAtiva) {
    statusConta = 'Ativa';
  } else {
    statusConta = 'Bloqueado';
  }

  console.log('\n====================================');
  console.log('         EXTRATO DA CONTA');
  console.log('====================================');
  console.log(`Conta:   ${numeroConta}`);
  console.log(`Titular: ${titular}`);
  console.log(`Saldo Atual: R$ ${saldo.toFixed(2)}`);
  console.log('------------------------------------');
  console.log('Histórico de Transações:');
  console.log("(Últimas 5 transações)")
  console.log('------------------------------------');
  for (let i = 1; i < 6; i++) {
    const item = historico[historico.length - i];
    console.log(item);
  }
}

function depositar(valor) {
  if (!contaAtiva) {
    exibirMensagem('\nNão é possível realizar depósitos em uma conta bloqueada.');
    return;
  } else if (valor > 0) {
    saldo += valor;
    historico.push(`Depósito: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
    atualizarSaldo()
    verResumo()
    exibirMensagem(`Depósito de ${valor} realizado com sucesso!`, 'sucesso');
  } else {
    exibirMensagem(
      '\nValor de depósito inválido. O valor deve ser maior que zero.',
    );
  }
}

function sacar(valor) {
  if (!contaAtiva) {
    exibirMensagem('\nNão é possível realizar saques em uma conta bloqueada.');
    return;
  } else if (valor > 0 && valor <= saldo && contaAtiva) {
    saldo -= valor;
    historico.push(`Saque: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
      atualizarSaldo()
      verResumo()
      exibirMensagem(`Saque de ${valor} realizado com sucesso!`, 'sucesso')
  } else {
    exibirMensagem('\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.')
  }
}

function bloquearConta() {
  if(contaAtiva) {
    contaAtiva = false
    exibirMensagem('\nConta bloqueada com sucesso!', 'sucesso');
    btnBloquear.textContent = '🔓 Desbloquear Conta'
  } else {
    contaAtiva = true
    exibirMensagem('\nConta desbloqueada com sucesso!', 'sucesso');
    btnBloquear.textContent = '🔒 Bloquear Conta'
  }
}

function verResumo() {
  let totalDepositos = 0;
  let totalSaques = 0;
  let totalTransacoes = 0;

  for (const transacao of historico) {
    if (transacao.includes('Depósito')) {
      totalDepositos++;
    } else if (transacao.includes('Saque')) {
      totalSaques++;
    }
    totalTransacoes++;
  }

  elTotalDepositos.textContent = totalDepositos
  elTotalSaques.textContent = totalSaques
  elTotalTransacoes.textContent = totalTransacoes

}

function simularTentativasSaque(valor, maxTentativas = 5) {
  let tentativas = 0;
  while (tentativas < maxTentativas && valor > saldo) {
    console.log(`Tentativa ${tentativas + 1}: R$ ${valor.toFixed(2)} - saldo insuficiente`);
    valor = valor * 0.8 // Reduz o valor da tentativa em 20% a cada tentativa
    tentativas++;
  }

  if (tentativas === maxTentativas) {
    console.log(`\nTentativas esgotadas. Saque não realizado.`);
  } else {
    sacar(valor);
  }
}


// Simulando operações aleatórias
function simularOperacoes(n) {
  let nOperacoes = 0
  while (nOperacoes < n) {
    const rndSelect = Math.floor(Math.random() * 2); // Gera um número aleatório entre 0 e 1
    const valorOperacao = Math.floor(Math.random() * 500) + 1; // Gera um valor aleatório entre 1 e 500
    if (rndSelect === 0) {
      depositar(valorOperacao);
    } else {
      sacar(valorOperacao);
    }
    nOperacoes++;
  }
}




function atualizarSaldo() {
  elSaldo.textContent = `R$ ${saldo.toFixed(2)}`
}

function exibirMensagem(texto, tipo) {
  elMensagem.textContent = texto
  elMensagem.style.display = 'block'
  elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro'
}

