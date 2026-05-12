# Arrays e Loops em JavaScript

Este material cobre arrays e loops — os recursos que permitem guardar listas de dados e processá-las automaticamente.

**Como usar:**
- Crie um arquivo `script.js` no VSCode
- Use a extensão **Code Runner** para rodar: botão no canto superior direito ou `Ctrl+Alt+N`
- Leia cada seção, escreva o código, rode e observe o resultado
- Use o **Copilot** para tirar dúvidas — mas escreva o código você mesmo

---

## 1. Arrays — listas de valores

Um array é uma lista ordenada que guarda múltiplos valores em uma única variável.
Cada valor ocupa uma posição chamada de **índice**, que sempre começa em zero.

```javascript
// Criando um array com colchetes [ ]
const times = ['Flamengo', 'Vasco', 'Botafogo', 'Fluminense'];
const numeros = [10, 20, 30, 40, 50];

// Acessando pelo índice — começa em 0
console.log(times[0]); // 'Flamengo'
console.log(times[1]); // 'Vasco'
console.log(times[3]); // 'Fluminense'

// Índice que não existe retorna undefined
console.log(times[9]); // undefined

// Quantidade de itens no array
console.log(times.length); // 4

// Acessando o último elemento — truque útil
console.log(times[times.length - 1]); // 'Fluminense'
```

> [!IMPORTANT] Importante
> Mesmo declarado com `const`, o conteúdo de um array pode ser alterado.
>O `const` impede apenas que a variável aponte para outro array.

```javascript
const frutas = ['maca', 'banana'];
frutas[0] = 'laranja'; // funciona — alterando o conteúdo
// frutas = ['uva'];   // erro — tentando substituir o array
```

**Exercício:**
- Crie um array com 4 nomes.
- Exiba o primeiro, o último e o total de itens com `console.log`.

---

## 2. Métodos essenciais de array

Arrays têm métodos próprios para adicionar, remover e inspecionar itens.

```javascript
let historico = [];

// push — adiciona um item no FINAL
historico.push('Deposito: R$ 500.00');
historico.push('Saque: R$ 200.00');
historico.push('Deposito: R$ 300.00');
console.log(historico.length); // 3
console.log(historico[0]);     // 'Deposito: R$ 500.00'

// pop — remove e retorna o ÚLTIMO item
const ultimo = historico.pop();
console.log(ultimo);           // 'Deposito: R$ 300.00'
console.log(historico.length); // 2 — um item foi removido

// includes — verifica se um valor existe no array
console.log(historico.includes('Saque: R$ 200.00')); // true
console.log(historico.includes('Pix: R$ 100.00'));   // false

// indexOf — retorna a posição de um item (-1 se não encontrar)
console.log(historico.indexOf('Saque: R$ 200.00')); // 1

// join — transforma o array em uma string
console.log(historico.join(' | '));
// 'Deposito: R$ 500.00 | Saque: R$ 200.00'
```

**slice — copia parte do array sem modificar o original:**

```javascript
const transacoes = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

// slice(início, fim) — fim não é incluído
const primeiras3 = transacoes.slice(0, 3);
console.log(primeiras3); // ['T1', 'T2', 'T3']

// slice com índice negativo — conta a partir do final
const ultimas3 = transacoes.slice(-3);
console.log(ultimas3); // ['T5', 'T6', 'T7']

// Se o array tiver menos itens que o solicitado,
// retorna todos os disponíveis sem gerar erro
const array2itens = ['T1', 'T2'];
console.log(array2itens.slice(-5)); // ['T1', 'T2']
```

**Exercício:**
- Crie um array `compras` com 5 itens quaisquer.
- Adicione um sexto item com `push`.
- Remova o último com `pop` e exiba o item removido.
- Exiba os 3 últimos itens restantes com `slice`.

---

## 3. Loop for clássico

Um loop repete um bloco de código automaticamente.
O `for` clássico é o mais flexível — você controla o início, a condição de parada e o incremento.

```javascript
// for (início; condição; incremento)
for (let i = 0; i < 5; i++) {
  console.log(`Volta número ${i}`);
}
// Exibe: Volta número 0, 1, 2, 3, 4

// Percorrendo um array com for clássico
const nomes = ['Ana', 'Bruno', 'Carlos'];

for (let i = 0; i < nomes.length; i++) {
  console.log(`${i + 1}. ${nomes[i]}`);
}
// 1. Ana
// 2. Bruno
// 3. Carlos

// Percorrendo ao contrário
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}
// Carlos, Bruno, Ana
```

Use o `for` clássico quando precisar do índice (`i`) dentro do loop —
por exemplo, para numerar os itens ou acessar posições específicas.

**Exercício:**
- Crie um array com 5 números.
- Use um `for` clássico para exibir cada número multiplicado por 2.
- Exiba no formato: `Posição 0: 10 -> dobro: 20`

---

## 4. Loop for...of

O `for...of` é uma forma mais simples de percorrer arrays
quando você só precisa do valor de cada item — sem precisar do índice.

```javascript
const transacoes = [
  'Deposito: R$ 500.00',
  'Saque: R$ 200.00',
  'Deposito: R$ 300.00'
];

// for...of — percorre os valores diretamente
for (const transacao of transacoes) {
  console.log(transacao);
}
// Deposito: R$ 500.00
// Saque: R$ 200.00
// Deposito: R$ 300.00

// Combinando com if dentro do loop
for (const transacao of transacoes) {
  if (transacao.includes('Deposito')) {
    console.log('Entrada detectada:', transacao);
  }
}
```

**Quando usar cada um:**

| Situação | Loop indicado |
|---|---|
| Preciso do índice (i) | `for` clássico |
| Só preciso do valor | `for...of` |

**Exercício:**
- Crie um array `historico` com 5 strings descrevendo transações.
- Use `for...of` para percorrer e exibir apenas as que contenham a palavra 'Saque'.

---

## 5. Loop while

O `while` repete um bloco enquanto uma condição for verdadeira.
É útil quando você não sabe de antemão quantas vezes o loop vai rodar.

```javascript
// while (condição)
let tentativas = 3;

while (tentativas > 0) {
  console.log(`Tentativas restantes: ${tentativas}`);
  tentativas--; // reduz 1 a cada volta — essencial para não travar
}
// Para quando tentativas chegar a 0

// Exemplo prático — redução progressiva de valor
let valor = 1000;
let maxTentativas = 4;
let tentativa = 0;

while (tentativa < maxTentativas && valor > 500) {
  tentativa++;
  console.log(`Tentativa ${tentativa}: R$ ${valor.toFixed(2)}`);
  valor = valor * 0.8; // reduz 20% a cada volta
}
```

> [!WARNING] Atenção
> Se a condição nunca for se tornar falsa, o loop roda para sempre
> e trava o programa. Sempre garanta que algo muda a cada volta.

```javascript
// Exemplo de loop infinito — NUNCA faça isso:
// while (true) {
//   console.log('travou!');
// }
```

**Exercício:**
- Declare `saldo = 2000` e `tentativas = 5`.
- Use `while` para simular saques de R$ 600 a cada tentativa,
enquanto houver saldo suficiente e tentativas restantes.
- Exiba o saldo após cada saque e uma mensagem ao final.

---

## 6. Contando e acumulando com loops

Um padrão muito comum é usar loops para percorrer uma lista
e acumular informações — contar ocorrências, somar valores etc.

```javascript
const historico = [
  'Deposito: R$ 500.00 | Saldo: R$ 1500.00',
  'Saque: R$ 200.00 | Saldo: R$ 1300.00',
  'Deposito: R$ 300.00 | Saldo: R$ 1600.00',
  'Saque: R$ 100.00 | Saldo: R$ 1500.00',
  'Deposito: R$ 400.00 | Saldo: R$ 1900.00'
];

// Variáveis acumuladoras — declaradas ANTES do loop
let totalDepositos = 0;
let totalSaques = 0;
let totalTransacoes = 0;

// Loop que processa cada item
for (const transacao of historico) {
  if (transacao.includes('Deposito')) {
    totalDepositos++;
  } else if (transacao.includes('Saque')) {
    totalSaques++;
  }
  totalTransacoes++;
}

// Resultado após o loop
console.log(`Depósitos: ${totalDepositos}`);   // 3
console.log(`Saques: ${totalSaques}`);         // 2
console.log(`Total: ${totalTransacoes}`);      // 5
```

A regra é sempre a mesma: declare os acumuladores antes do loop,
atualize-os dentro do loop, use os resultados depois do loop.

**Exercício:**
Use o array `historico` acima.
Percorra-o com `for...of` e conte separadamente
quantas transações contêm 'Deposito' e quantas contêm 'Saque'.
Exiba o resultado formatado ao final.

---

## Exercício Final — Histórico do Banco InovaWeb

Use tudo que aprendeu neste material para criar um sistema
que gerencia e analisa um histórico de transações bancárias.

```javascript
// Dados iniciais
let saldo = 1000;
const historico = [];

// 1. Crie a função registrar(tipo, valor)
//    que adiciona uma string ao historico no formato:
//    'Deposito: R$ 500.00 | Saldo: R$ 1500.00'
//    ou
//    'Saque: R$ 200.00 | Saldo: R$ 1300.00'
function registrar(tipo, valor) {
  // seu código aqui
}

// 2. Crie a função exibirHistorico()
//    que percorre o historico com for...of
//    e exibe cada transação numerada
//    Se o historico estiver vazio, exibe mensagem adequada
function exibirHistorico() {
  // seu código aqui
}

// 3. Crie a função exibirResumo()
//    que percorre o historico com for...of
//    e conta quantos depósitos e saques foram realizados
function exibirResumo() {
  // seu código aqui
}

// 4. Simule as operações chamando registrar():
registrar('Deposito', 500);
registrar('Saque', 200);
registrar('Deposito', 300);
registrar('Saque', 100);
registrar('Deposito', 400);

// 5. Chame as funções para exibir os resultados:
exibirHistorico();
exibirResumo();
```

- [ ] `registrar()` adiciona a string correta ao array `historico`
- [ ] `exibirHistorico()` exibe cada item numerado com `for...of`
- [ ] `exibirResumo()` conta e exibe depósitos e saques corretamente
- [ ] O saldo final está matematicamente correto
- [ ] O programa roda sem erros

---

## Dicas de IA

- Um tópico por vez — não cole o arquivo inteiro no Copilot
- Se travar no `slice`, pergunte: "Me explica slice com índice negativo em JavaScript com um exemplo simples"
- Use `console.log(nomeDoArray)` para inspecionar o array inteiro a qualquer momento
- Se um erro aparecer no console, copie a mensagem e pergunte a IA o que significa
- Escreva o código você mesmo — use a IA para explicações e dicas, não para resolver os exercícios
