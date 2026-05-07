const numeroConta = 1;
let titular = 'Diego';
let saldo = 10000;
let contaAtiva = true;
let statusConta;
let historico = [];
let activeSession = true;

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
    console.log(`${item.data} | ${item.tipo} | R$ ${item.valor.toFixed(2)}`);
  }
}

function depositar(valor) {
  if (!contaAtiva) {
    console.log('\nNão é possível realizar depósitos em uma conta bloqueada.');
    return;
  } else if (valor > 0) {
    saldo += valor;
    historico.push({
      tipo: 'Depósito',
      valor: valor,
      data: new Date().toLocaleString(),
    });
    console.log(
      `\nDepósito de R$ ${valor.toFixed(
        2,
      )} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`,
    );
  } else {
    console.log(
      '\nValor de depósito inválido. O valor deve ser maior que zero.',
    );
  }
}

function sacar(valor) {
  if (!contaAtiva) {
    console.log('\nNão é possível realizar saques em uma conta bloqueada.');
    return;
  } else if (valor > 0 && valor <= saldo && contaAtiva) {
    saldo -= valor;
    historico.push({
      tipo: 'Saque',
      valor: valor,
      data: new Date().toLocaleString(),
    });
    console.log(
      `\nSaque de R$ ${valor.toFixed(
        2,
      )} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`,
    );
  } else {
    console.log(
      '\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.',
    );
  }
}

function bloquearConta() {
  contaAtiva = false;
  console.log('\nConta bloqueada com sucesso!');
}

function verResumo() {
  let totalDepositos = 0;
  let totalSaques = 0;
  let totalTransacoes = 0;

  for (const transacao of historico) {
    if (transacao.tipo === 'Depósito') {
      totalDepositos += transacao.valor;
    } else if (transacao.tipo === 'Saque') {
      totalSaques += transacao.valor;
    }
    totalTransacoes++;
  }

  console.log('\n====================================');
  console.log('         RESUMO DA CONTA');
  console.log('====================================');
  console.log(`Total de Depósitos: R$ ${totalDepositos.toFixed(2)}`);
  console.log(`Total de Saques: R$ ${totalSaques.toFixed(2)}`);
  console.log(`Total de Transações: ${totalTransacoes}`);
  console.log('====================================');
}

// Simulando operações aleatórias
function simularOperacoes() {
  for (let nOperacoes = 0; nOperacoes < 3; nOperacoes++) {
    const rndSelect = Math.floor(Math.random() * 2); // Gera um número aleatório entre 0 e 1
    const valorOperacao = Math.floor(Math.random() * 500) + 1; // Gera um valor aleatório entre 1 e 500

    if (rndSelect === 0) {
      depositar(valorOperacao);
    } else {
      sacar(valorOperacao);
    }
  }
}

while (activeSession) {
  const operacao = prompt("Escolha uma operação:\n1 - Ver Extrato\n2 - Depositar\n3 - Sacar\n4 - Ver Resumo\n5 - Bloquear Conta\n6 - Simular Operações\n7 - Encerrar Sessão");

  switch (operacao) {
    case '1':
      verExtrato();
      break;
    case '2':
      const valorDeposito = parseFloat(prompt('Informe o valor do depósito:'));
      depositar(valorDeposito);
      break;
    case '3':
      const valorSaque = parseFloat(prompt('Informe o valor do saque:'));
      sacar(valorSaque);
      break;
    case '4':
      verResumo();
      break;
    case '5':
      bloquearConta();
      break;
    case '6':
      simularOperacoes();
      break;
    case '7':
      activeSession = false;
      console.log('Sessão encerrada.');
      break;
    default:
      console.log('Operação inválida.');
  }
}
