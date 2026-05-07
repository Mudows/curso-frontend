const transacoes = ["Depósito de R$ 1000", "Depósito de R$ 2000", "Saque de R$ 500", "Depósito de R$ 1500", "Saque de R$ 800"];

/* for (const registro of transacoes) {
  if (registro.startsWith("Depósito")) {
    console.log(registro);
  }
} */

// Array de objetos — cada item é um registro completo
const historico = [
  { tipo: 'deposito', valor: 500,  data: '2024-01-15', saldoApos: 1500 },
  { tipo: 'saque',    valor: 200,  data: '2024-01-16', saldoApos: 1300 },
  { tipo: 'deposito', valor: 1000, data: '2024-01-17', saldoApos: 2300 }
];

// Percorrendo array de objetos
for (const item of historico) {
  console.log(`${item.data} | ${item.tipo} | R$ ${item.valor.toFixed(2)}`);
}