# DOM — Manipulando Paginas com JavaScript

Este material cobre o DOM (Document Object Model) — o que permite ao JavaScript
ler e modificar elementos de uma pagina HTML em tempo real.
Cada secao tem explicacoes, exemplos e exercicios para praticar.

**Como usar:**
- Crie um arquivo `index.html` com a estrutura basica do HTML5
- Adicione uma tag `<script>` antes do `</body>` para escrever o JavaScript
- Abra o arquivo com o **Live Server** no VSCode para ver as mudancas em tempo real
- Abra o **DevTools** (F12) e va na aba **Console** para ver os logs e erros
- Use o **Copilot** para tirar duvidas — mas escreva o codigo voce mesmo

---

## 1. O que e o DOM

Quando o navegador carrega um arquivo HTML, ele cria uma representacao
interna de todos os elementos da pagina — uma arvore de objetos chamada DOM.

O JavaScript usa o DOM como um mapa para encontrar e modificar qualquer
elemento da pagina sem precisar recarrega-la.

```
document
  html
    head
      title
    body
      h1
      p
      button
```

O ponto de entrada para o DOM e sempre o objeto `document`,
que representa a pagina inteira.

```javascript
// document e o ponto de partida para qualquer operacao no DOM
console.log(document.title);   // titulo da pagina
console.log(document.body);    // o elemento <body> inteiro
```

---

## 2. Selecionando elementos

Para modificar um elemento, primeiro voce precisa seleciona-lo.
Os dois metodos mais usados sao `getElementById` e `querySelector`.

```html
<!-- HTML de exemplo -->
<h1 id="titulo">Banco InovaWeb</h1>
<p class="descricao">Solucoes financeiras modernas</p>
<button id="btn-depositar">Depositar</button>
<ul id="lista-historico">
  <li>Nenhuma transacao ainda.</li>
</ul>
```

```javascript
// getElementById — busca pelo atributo id (retorna 1 elemento)
const titulo = document.getElementById('titulo');

// querySelector — busca pelo seletor CSS (retorna o PRIMEIRO encontrado)
const titulo2  = document.querySelector('#titulo');     // por id
const descricao = document.querySelector('.descricao'); // por classe
const botao    = document.querySelector('button');      // por tag
const lista    = document.querySelector('#lista-historico');

// querySelectorAll — retorna TODOS os elementos que correspondem
const todosOsBotoes = document.querySelectorAll('button');
const todosOsItens  = document.querySelectorAll('li');

console.log(todosOsBotoes.length); // quantos botoes ha na pagina
```

`querySelector` aceita qualquer seletor CSS — e o mais versatil.
Use `querySelectorAll` quando precisar de multiplos elementos.

**Exercicio:**
Crie um HTML com: um `<h1 id="nome">`, um `<p class="info">` e dois `<button>`.
No script, selecione cada elemento com `querySelector` e
exiba-os no console com `console.log` para confirmar que foram encontrados.

---

## 3. Lendo e alterando conteudo

Depois de selecionar um elemento, voce pode ler ou alterar seu conteudo.

```javascript
const titulo = document.querySelector('#titulo');

// textContent — le ou altera o texto puro do elemento
console.log(titulo.textContent); // le o texto atual
titulo.textContent = 'Novo Titulo'; // altera o texto

// innerHTML — le ou altera o conteudo HTML interno
// permite inserir tags HTML dentro do elemento
titulo.innerHTML = '<strong>Banco</strong> InovaWeb';

// value — le ou altera o valor de inputs e selects
const campo = document.querySelector('#campo-valor');
console.log(campo.value); // le o que o usuario digitou
campo.value = '';          // limpa o campo
campo.value = '100';       // define um valor
```

Prefira `textContent` quando estiver exibindo texto simples.
Use `innerHTML` apenas quando precisar inserir HTML de fato.

**Exercicio:**
Adicione ao HTML: `<h2 id="saldo">R$ 1000.00</h2>` e `<input id="campo" type="text">`.
No script, altere o texto do `h2` para `R$ 1500.00` com `textContent`.
Defina o valor do input para `'teste'` com `.value`.
Abra no Live Server e confirme as mudancas na pagina.

---

## 4. Alterando estilos e classes

Voce pode alterar a aparencia de um elemento diretamente via JavaScript.

```javascript
const titulo = document.querySelector('#titulo');

// style — aplica CSS inline diretamente no elemento
titulo.style.color = '#004a99';
titulo.style.fontSize = '2rem';
titulo.style.fontWeight = 'bold';
titulo.style.display = 'none';  // esconde o elemento
titulo.style.display = 'block'; // mostra o elemento

// classList — a forma correta de gerenciar classes CSS
titulo.classList.add('destaque');       // adiciona a classe
titulo.classList.remove('destaque');    // remove a classe
titulo.classList.toggle('ativo');       // adiciona se nao tem, remove se tem
console.log(titulo.classList.contains('ativo')); // true ou false
```

Use `classList` sempre que possivel — e mais organizado e mantenivel
do que aplicar estilos inline via `.style`.
Deixe o CSS cuidar da aparencia e o JavaScript cuidar do comportamento.

```css
/* No CSS: */
.saldo-positivo { color: #065f46; }
.saldo-negativo { color: #991b1b; }
```

```javascript
// No JavaScript — so troca a classe, o CSS cuida do visual
if (saldo > 0) {
  elSaldo.classList.add('saldo-positivo');
  elSaldo.classList.remove('saldo-negativo');
} else {
  elSaldo.classList.add('saldo-negativo');
  elSaldo.classList.remove('saldo-positivo');
}
```

**Exercicio:**
No HTML, adicione `<p id="status">Conta ativa</p>`.
No CSS, crie duas classes: `.ativo` com `color: green` e `.bloqueado` com `color: red`.
No script, use `classList.add` para aplicar `.ativo` ao elemento.
Depois use `classList.toggle` para alternar entre as duas classes.

---

## 5. Eventos — reagindo ao usuario

Eventos permitem que o JavaScript execute codigo em resposta
a acoes do usuario, como cliques, digitacao ou envio de formularios.

```javascript
const botao = document.querySelector('#btn-depositar');

// addEventListener(evento, funcao)
// e sempre desta forma que adicionamos eventos
botao.addEventListener('click', function() {
  console.log('Botao clicado!');
});

// Eventos mais comuns:

// click — clique em qualquer elemento
botao.addEventListener('click', function() {
  alert('Clicou!');
});

// input — dispara a cada caractere digitado
const campo = document.querySelector('#campo-valor');
campo.addEventListener('input', function() {
  console.log('Valor atual:', campo.value);
});

// keydown — tecla pressionada
campo.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter pressionado. Valor:', campo.value);
  }
});

// submit — formulario enviado
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o recarregamento da pagina
  console.log('Formulario interceptado');
});
```

O parametro `event` dentro da funcao contem informacoes sobre o evento —
qual tecla foi pressionada, qual elemento foi clicado etc.
`event.preventDefault()` cancela o comportamento padrao do navegador.

**Exercicio:**
Adicione ao HTML um `<button id="btn-teste">Clique aqui</button>`
e um `<p id="contador">0</p>`.
No script, use `addEventListener` para que cada clique no botao
incremente um contador e atualize o texto do `<p>` na tela.

---

## 6. Criando elementos dinamicamente

Ate agora modificamos elementos que ja existiam no HTML.
O `createElement` permite criar elementos novos e inseri-los na pagina.

```javascript
// 1. Cria o elemento na memoria — ainda nao aparece na pagina
const novoItem = document.createElement('li');

// 2. Configura o elemento
novoItem.textContent = 'Deposito: R$ 500.00';
novoItem.classList.add('transacao');

// 3. Insere na pagina — so agora aparece
const lista = document.querySelector('#lista-historico');
lista.appendChild(novoItem); // adiciona como ULTIMO filho

// Para inserir como PRIMEIRO filho (mais recente primeiro):
lista.insertBefore(novoItem, lista.firstChild);
```

A sequencia sempre e a mesma: **cria, configura, insere.**

**Removendo elementos:**

```javascript
const lista = document.querySelector('#lista-historico');

// remove() — remove o proprio elemento
const placeholder = lista.querySelector('.vazio');
if (placeholder) {
  placeholder.remove();
}

// removeChild — remove um filho especifico
lista.removeChild(lista.lastChild); // remove o ultimo filho

// Limitar a lista a no maximo 5 itens:
while (lista.children.length > 5) {
  lista.removeChild(lista.lastChild);
}

// innerHTML = '' — remove TODOS os filhos de uma vez
lista.innerHTML = '';
```

**Exercicio:**
No HTML, adicione `<ul id="lista"></ul>` e um `<button id="btn-add">Adicionar item</button>`.
No script, a cada clique no botao, crie um novo `<li>` com o texto
`'Item numero X'` (onde X e o numero do clique) e insira no inicio da lista.
Limite a lista a no maximo 5 itens visiveis.

---

## 7. Padrao completo — conectando HTML e JavaScript

Na pratica, o fluxo de uma funcionalidade no DOM segue este padrao:

```javascript
// 1. Seleciona todos os elementos necessarios no inicio
const elSaldo    = document.querySelector('#saldo');
const campValor  = document.querySelector('#campo-valor');
const btnDepositar = document.querySelector('#btn-depositar');
const elMensagem = document.querySelector('#mensagem');

// 2. Declara as variaveis de estado
let saldo = 1000;

// 3. Cria funcoes auxiliares que atualizam o DOM
function atualizarSaldo() {
  elSaldo.textContent = `R$ ${saldo.toFixed(2)}`;
}

function exibirMensagem(texto, tipo) {
  elMensagem.textContent = texto;
  elMensagem.style.display = 'block';
  elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro';
}

// 4. Cria as funcoes de logica do sistema
function depositar(valor) {
  if (valor <= 0) {
    exibirMensagem('Valor invalido.', 'erro');
    return;
  }
  saldo += valor;
  atualizarSaldo();
  exibirMensagem(`Deposito de R$ ${valor.toFixed(2)} realizado!`, 'sucesso');
}

// 5. Adiciona os eventos que conectam os botoes as funcoes
btnDepositar.addEventListener('click', function() {
  const valor = Number(campValor.value);
  depositar(valor);
  campValor.value = '';
  campValor.focus();
});
```

Este padrao — selecionar, declarar estado, funcoes auxiliares,
funcoes de logica, eventos — e a base de qualquer interface web interativa.

**Exercicio:**
Crie uma pagina HTML com:
- Um `<h2 id="contador">0</h2>`
- Tres botoes: `<button id="btn-mais">+</button>`,
  `<button id="btn-menos">-</button>` e
  `<button id="btn-reset">Reset</button>`

No script, implemente:
- O contador comeca em 0
- O botao `+` incrementa e atualiza o `<h2>`
- O botao `-` decrementa (nao deixa passar de zero)
- O botao Reset volta o contador a 0
- O numero fica vermelho quando for 0 e azul quando for maior que 0

---

## Exercicio Final — Mini Interface Bancaria

Crie uma pagina HTML completa que implemente uma interface
simples para deposito e saque, usando os conceitos deste material.

**HTML necessario:**
```html
<h2 id="saldo">R$ 1000.00</h2>
<input type="number" id="campo-valor" placeholder="Digite o valor">
<button id="btn-depositar">Depositar</button>
<button id="btn-sacar">Sacar</button>
<p id="mensagem"></p>
<ul id="historico">
  <li class="vazio">Nenhuma transacao ainda.</li>
</ul>
```

**O que implementar no script:**

- [ ] Seleciona todos os elementos necessarios com `querySelector`
- [ ] Declara `let saldo = 1000` e uma funcao `atualizarSaldo()` que atualiza o `<h2>`
- [ ] Cria `exibirMensagem(texto, tipo)` que exibe feedback na tag `<p>`
- [ ] Cria `adicionarHistorico(texto)` que usa `createElement` e `insertBefore`
      para adicionar itens no inicio da lista, limitando a 5 visiveis
- [ ] O botao Depositar valida o valor, atualiza o saldo, exibe mensagem e adiciona ao historico
- [ ] O botao Sacar valida o valor e o saldo disponivel, e faz o mesmo
- [ ] O campo limpa e recebe o foco apos cada operacao

---

## Dicas de IA

- Se travar no `createElement`, pergunte: "Qual a diferenca entre appendChild e insertBefore em JavaScript?"
- Use `console.log(document.querySelector('#id'))` para confirmar que um elemento foi encontrado
- Se aparecer `null` no console ao selecionar um elemento, verifique se o id no HTML e identico ao usado no querySelector
- Erros comuns: script carregado antes do HTML (coloque o script antes do `</body>`), id com typo, esqueceu de chamar a funcao
- Escreva o codigo voce mesmo — use a IA para explicacoes e dicas, nao para resolver os exercicios