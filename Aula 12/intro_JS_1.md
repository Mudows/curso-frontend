# Introdução ao JavaScript

Este material cobre o essencial para revisar os conceitos básicos de JavaScript, preparando você para os desafios práticos. Cada seção tem explicações, exemplos e exercícios para praticar.

**Como usar:**
- Crie um arquivo `script.js` no VSCode
- Instale a extensão **Code Runner** para rodar o JavaScript no console do VSCode.
- Com o Code Runner instalado, clique no botão ▶ no canto superior direito (ou use o atalho `Ctrl+Alt+N`) para executar o código quando precisar testar.
- Leia cada seção, escreva o código, rode e observe o resultado
- Use o **Copilot** para tirar dúvidas — mas escreva o código você mesmo

---

## 1. O Console

O `console.log()` exibe mensagens enquanto o programa roda.
É a ferramenta mais importante para entender o que está acontecendo.

```javascript
console.log('Olá, mundo!');
console.log(10 + 5);
console.log('O resultado é:', 10 * 3);
```

**✏️ Faça você mesmo:**
Escreva três `console.log` exibindo:
- Seu nome
- O resultado de `2024 - 1990`
- O texto `'JavaScript é incrível!'`

---

## 2. Variáveis

Variáveis são caixas nomeadas que guardam valores.

```javascript
// const — valor fixo, não pode ser reatribuído
const nomeBanco = 'Banco InovaWeb';
const numeroConta = '001';

// let — valor pode ser reatribuído ao longo do programa
let saldo = 1000;
let nomeCliente = 'Maria Silva';

// Reatribuindo let
saldo = 1500; // ✅ funciona
// nomeBanco = 'Outro'; // ❌ erro — const não pode mudar

console.log(nomeBanco);
console.log(saldo);
```

>[!NOTE] Regra prática: 
>Use `const` para valores que não mudam.  
>Use `let` para valores que vão mudar.  
>**Nunca** use `var`.

**✏️ Faça você mesmo:**
Crie variáveis para:
- Seu nome (const)
- Sua idade (let)
- Se você é estudante: `true` ou `false` (const)

Exiba todas com `console.log`.

---

## 3. Tipos de dados

```javascript
// String — texto (use aspas ou template literal)
let nome = 'João'; // aspas simples
let cidade = "Rio de Janeiro"; // aspas duplas
let apresentacao = `Olá, meu nome é ${nome}!`; // template literal usa crases ao invés de aspas e permite chamar variáveis dentro da string

// Number — qualquer número
let idade = 25;
let preco = 1500.99;

// Boolean — verdadeiro ou falso
let ativo = true;
let bloqueado = false;

// Descobrindo o tipo com typeof
console.log(typeof nome);    // "string"
console.log(typeof idade);   // "number"
console.log(typeof ativo);   // "boolean"
```

**Template literal** — forma moderna de montar strings:
```javascript
const cliente = 'Ana';
const saldo = 2500;

// Forma antiga — concatenação com +
console.log('Olá ' + cliente + '! Seu saldo é R$ ' + saldo);

// Template literal — muito mais legível
console.log(`Olá ${cliente}! Seu saldo é R$ ${saldo}`);
```

**✏️ Faça você mesmo:**
Crie variáveis `nome`, `saldo` e `contaAtiva`.
Use um template literal para exibir:
`"Cliente: [nome] | Saldo: R$ [saldo] | Ativa: [contaAtiva]"`

---

## 4. Operadores

```javascript
// Aritméticos
console.log(10 + 3);  // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  // 3.333...
console.log(10 % 3);  // 1 — resto da divisão

// Atalhos úteis
let saldo = 1000;
saldo += 500;  // saldo = saldo + 500 → 1500
saldo -= 200;  // saldo = saldo - 200 → 1300
saldo *= 2;    // saldo = saldo * 2   → 2600
console.log(saldo);

// Comparação — sempre use === para comparação de igualdade e !== para desigualdade.
console.log(10 === 10);    // true
console.log(10 === '10');  // false — tipos diferentes!
console.log(10 !== 5);     // true
console.log(10 > 5);       // true
console.log(10 <= 10);     // true

// Lógicos
console.log(true && true);   // true  — E
console.log(true && false);  // false — E
console.log(true || false);  // true  — OU
console.log(!true);          // false — NÃO
```

**✏️ Faça você mesmo:**
Declare `saldo = 800` e `valorSaque = 300`.
Exiba no console se `valorSaque <= saldo` (deve aparecer `true`).
Exiba no console se `valorSaque > saldo` (deve aparecer `false`).

---

## 5. Condicionais

Condicionais permitem que o programa tome decisões com base em condições especificadas por você.
- `if` executa um bloco de código se a condição for verdadeira.   
- `else if` verifica outra condição se a primeira for falsa.  
- `else` executa um bloco de código se todas as condições anteriores forem falsas.

```javascript
let saldo = 500;
let valorSaque = 200;

if (valorSaque > saldo) {
  console.log('Saldo insuficiente!');
} else if (valorSaque <= 0) {
  console.log('Valor inválido!');
} else {
  saldo = saldo - valorSaque;
  console.log(`Saque realizado. Novo saldo: R$ ${saldo}`);
}
```

**✏️ Faça você mesmo:**
Declare `hora = 14`.
Use `if/else if/else` para exibir:
- "Bom dia!" se hora < 12
- "Boa tarde!" se hora < 18
- "Boa noite!" nos outros casos

---

## 6. Funções

Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas ajudam a organizar o código e evitar repetições. Também impedem que um código seja executado acidentalmente, pois só roda quando você chama a função.


Para declarar uma função, usamos a palavra-chave `function`, seguida do nome da função e parênteses.
```javascript
function nomeDaFuncao() {
  // código a ser executado
}
```


Dentro dos parênteses, podemos definir parâmetros que a função pode receber. Estes são como "variáveis locais" que só existem dentro da função. Você pode usar esses parâmetros para passar informações para a função quando chamá-la, como quando um cliente faz um depósito ou saque e a função precisa saber o valor e o nome do cliente.

```javascript
function nomeDaFuncao(parametro1, parametro2) {
  // código a ser executado usando parametro1 e parametro2
}
```

O código que a função executa fica dentro de chaves `{}`. É o "corpo" da função. Você pode colocar qualquer código lá dentro, e ele só será executado quando a função for chamada.

```javascript
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

// Chamando a função
saudar('João'); // "Olá, João!"
saudar('Maria'); // "Olá, Maria!"
```

Exemplo mais completo:

```javascript
let saldo = 1000;

// Função declarada
function saudar(nome) {
  return `Olá, ${nome}! Bem-vindo ao Banco InovaWeb.`;
}

console.log(saudar('João')); // "Olá, João! Bem-vindo ao Banco InovaWeb."
console.log(saudar('Maria')); // reutilizando a mesma função

// Função com múltiplos parâmetros
function depositar(saldoAtual, valor) {
  if (valor <= 0) {
    console.log('Valor inválido!');
    return saldoAtual; // retorna sem alterar
  }
  const novoSaldo = saldoAtual + valor;
  console.log(`Depósito de R$ ${valor}. Novo saldo: R$ ${novoSaldo}`);
  return novoSaldo;
}

saldo = depositar(saldo, 500);  // 1500
saldo = depositar(saldo, -100); // inválido, saldo não muda
console.log(`Saldo final: R$ ${saldo}`);
```

**Por que usar funções?**
Sem função, você copiaria o mesmo bloco `if/else` em vários lugares.
Com função, escreve uma vez e chama quantas vezes precisar.

**✏️ Faça você mesmo:**
Crie uma função `exibirConta(titular, saldo)` que exibe:
```
══════════════════
  BANCO INOVAWEB
══════════════════
Titular: [titular]
Saldo:   R$ [saldo]
══════════════════
```
Chame a função duas vezes com dados diferentes.

---

## 7. Exercício Final — Mini Banco

Junte tudo que aprendeu para criar um mini sistema bancário:

```javascript
// Dados da conta
const numeroConta = '001';
const titular = 'Seu Nome';
let saldo = 1000;
let contaAtiva = true;

// Função para exibir a conta
function exibirConta() {
  // seu código aqui
}

// Função para depositar
function depositar(valor) {
  // seu código aqui
  // valida se valor > 0
  // atualiza o saldo
  // exibe mensagem de sucesso ou erro
}

// Função para sacar
function sacar(valor) {
  // seu código aqui
  // valida se valor > 0
  // valida se há saldo suficiente
  // valida se a conta está ativa
  // atualiza o saldo
  // exibe mensagem de sucesso ou erro
}

// Teste do sistema
exibirConta();
depositar(500);
sacar(200);
sacar(9999);  // deve falhar
sacar(-50);   // deve falhar
exibirConta();
```

- [ ] `exibirConta()` exibe os dados da conta formatados
- [ ] `depositar()` valida e atualiza o saldo
- [ ] `sacar()` valida as 3 condições e atualiza o saldo
- [ ] Todas as mensagens de erro aparecem corretamente
- [ ] O saldo final está matematicamente correto

---

## 💡 Dicas de IA

- Se travar em algum conceito, pergunte ao Copilot:
  *"Me explica o que é uma função em JavaScript
  com um exemplo simples"*
- Use `console.log()` para inspecionar variáveis
  no meio do código — é seu melhor amigo
- **Escreva o código você mesmo** — não peça para a IA
  resolver o exercício inteiro. Peça explicações,
  exemplos e dicas de uma parte por vez
- Se um erro aparecer no console, copie e pergunte
  à IA o que significa