const numeroConta = 1
let titular = 'Diego'
let saldo = 0
let contaAtiva = true
let statusConta
const historico = []

function verExtrato() {
  if (contaAtiva) {
    statusConta = 'Ativa'
  } else {
    statusConta = 'Bloqueado'
  }

  console.log('\n====================================')
  console.log('         EXTRATO DA CONTA')
  console.log('====================================')
  console.log(`Conta:   ${numeroConta}`)
  console.log(`Titular: ${titular}`)
  console.log('------------------------------------')
  for(let i = 1; i < 6; i++){
    const indiceAtual = historico.length - i
    console.log(`${[i]}. ${historico[indiceAtual]}`)
  }
  
}

function depositar(valor) {
  if(!contaAtiva) {
    console.log('\nNão é possível realizar depósitos em uma conta bloqueada.');
    return;
  } else if (valor > 0) {
    saldo += valor
    historico.push(`Depósito: R$ ${valor} | Saldo: R$ ${saldo}`)
    console.log(
      `\nDepósito de R$ ${valor.toFixed(
        2
      )} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`
    )
  } else {
    console.log(
      '\nValor de depósito inválido. O valor deve ser maior que zero.'
    );
  }
}

function sacar(valor) {
  if(!contaAtiva) {
    console.log('\nNão é possível realizar saques em uma conta bloqueada.');
    return;
  } else if (valor > 0 && valor <= saldo && contaAtiva) {
    saldo -= valor;
    historico.push(`Saque: R$ ${valor} | Saldo: R$ ${saldo}`)
    console.log(
      `\nSaque de R$ ${valor.toFixed(
        2
      )} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`
    )
  } else {
    console.log(
      '\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.'
    );
  }
}

/* const num1 = 10;
const num2 = 10;

const resultado = num1 + num2;
const comparacao = num1 == num2;

console.log(resultado); // Saída: "1020"
console.log(comparacao); // Saída: false */

function bloquearConta() {
  contaAtiva = false;
  console.log('\nConta bloqueada com sucesso!');
}


// Simulando operações aleatórias
/* for (let nOperacoes = 0; nOperacoes < 3; nOperacoes++) {
  const rndSelect = Math.floor(Math.random() * 2); // Gera um número aleatório entre 0 e 1
  const valorOperacao = Math.floor(Math.random() * 500) + 1; // Gera um valor aleatório entre 1 e 500

  if (rndSelect === 0) {
    depositar(valorOperacao);
  } else {
    sacar(valorOperacao);
  }
} */

function verResumo(){
  let nDepositos = 0
  let nSaques = 0
  let qtdTransacoes = 0

  for(let i = 0; i < historico.length; i++){
    if( historico[i].includes("Depósito")){
      nDepositos++
    } else {
      nSaques++
    }
    qtdTransacoes++
  }

  console.log("\n=====Resumo de Transações=====")
  console.log(`Depósitos: ${nDepositos}`)
  console.log(`Saques: ${nSaques}`)
  console.log(`Total: ${qtdTransacoes} transações`)

}


  depositar(150)
  depositar(323)
  sacar(1000)
  sacar(231)
  depositar(700)
  sacar(500)

  function simularTentativasSaque(valor, maxTentativas){
    let tentativa = 0
    let 
    while(tentativa < maxTentativas) {
      if(valor < 1000000){

      }

      
    }
  }