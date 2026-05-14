# DOM — Manipulando Páginas com JavaScript

Este material cobre o DOM (Document Object Model) — o que permite ao JavaScript
ler e modificar elementos de uma página HTML em tempo real.
Cada seção tem explicações, exemplos e exercícios para praticar.

**Como usar:**
- Crie um arquivo `index.html` com a estrutura básica do HTML5
- Adicione uma tag `<script>` antes do `</body>` para escrever o JavaScript
- Abra o arquivo com o **Live Server** no VSCode para ver as mudanças em tempo real
- Abra o **DevTools** (F12) e vá na aba **Console** para ver os logs e erros
- Use o **Copilot** para tirar dúvidas — mas escreva o código você mesmo

---

## 1. O que é o DOM

Quando o navegador carrega um arquivo HTML, ele cria uma representação
interna de todos os elementos da página — uma árvore de objetos chamada DOM.

O JavaScript usa o DOM como um mapa para encontrar e modificar qualquer
elemento da página sem precisar recarregá-la.

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

O ponto de entrada para o DOM é sempre o objeto `document`,
que representa a página inteira.

```javascript
// document é o ponto de partida para qualquer operação no DOM
console.log(document.title);   // título da página
console.log(document.body);    // o elemento <body> inteiro
```

---

## 2. Selecionando elementos

Para modificar um elemento, primeiro você precisa selecioná-lo.
Os dois métodos mais usados são `getElementById` e `querySelector`.

```html
<!-- HTML de exemplo -->
<h1 id="titulo">Banco InovaWeb</h1>
<p class="descricao">Soluções financeiras modernas</p>
<button id="btn-depositar">Depositar</button>
<ul id="lista-historico">
  <li>Nenhuma transação ainda.</li>
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

console.log(todosOsBotoes.length); // quantos botões há na página
```

`querySelector` aceita qualquer seletor CSS — é o mais versátil.
Use `querySelectorAll` quando precisar de múltiplos elementos.

**Exercício:**
Crie um HTML com: um `<h1 id="nome">`, um `<p class="info">` e dois `<button>`.
No script, selecione cada elemento com `querySelector` e
exiba-os no console com `console.log` para confirmar que foram encontrados.

---

## 3. Lendo e alterando conteúdo

Depois de selecionar um elemento, você pode ler ou alterar seu conteúdo.

```javascript
const titulo = document.querySelector('#titulo');

// textContent — lê ou altera o texto puro do elemento
console.log(titulo.textContent); // lê o texto atual
titulo.textContent = 'Novo Título'; // altera o texto

// innerHTML — lê ou altera o conteúdo HTML interno
// permite inserir tags HTML dentro do elemento
titulo.innerHTML = '<strong>Banco</strong> InovaWeb';

// value — lê ou altera o valor de inputs e selects
const campo = document.querySelector('#campo-valor');
console.log(campo.value); // lê o que o usuário digitou
campo.value = '';          // limpa o campo
campo.value = '100';       // define um valor
```

Prefira `textContent` quando estiver exibindo texto simples.
Use `innerHTML` apenas quando precisar inserir HTML de fato.

**Exercício:**
Adicione ao HTML: `<h2 id="saldo">R$ 1000.00</h2>` e `<input id="campo" type="text">`.
No script, altere o texto do `h2` para `R$ 1500.00` com `textContent`.
Defina o valor do input para `'teste'` com `.value`.
Abra no Live Server e confirme as mudanças na página.

---

## 4. Alterando estilos e classes

Você pode alterar a aparência de um elemento diretamente via JavaScript.

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
titulo.classList.toggle('ativo');       // adiciona se não tem, remove se tem
console.log(titulo.classList.contains('ativo')); // true ou false
```

Use `classList` sempre que possível — é mais organizado e manutenível
do que aplicar estilos inline via `.style`.
Deixe o CSS cuidar da aparência e o JavaScript cuidar do comportamento.

```css
/* No CSS: */
.saldo-positivo { color: #065f46; }
.saldo-negativo { color: #991b1b; }
```

```javascript
// No JavaScript — só troca a classe, o CSS cuida do visual
if (saldo > 0) {
  elSaldo.classList.add('saldo-positivo');
  elSaldo.classList.remove('saldo-negativo');
} else {
  elSaldo.classList.add('saldo-negativo');
  elSaldo.classList.remove('saldo-positivo');
}
```

**Exercício:**
No HTML, adicione `<p id="status">Conta ativa</p>`.
No CSS, crie duas classes: `.ativo` com `color: green` e `.bloqueado` com `color: red`.
No script, use `classList.add` para aplicar `.ativo` ao elemento.
Depois use `classList.toggle` para alternar entre as duas classes.

---

## 5. Eventos — reagindo ao usuário

Eventos permitem que o JavaScript execute código em resposta
a ações do usuário, como cliques, digitação ou envio de formulários.

```javascript
const botao = document.querySelector('#btn-depositar');

// addEventListener(evento, função)
// é sempre desta forma que adicionamos eventos
botao.addEventListener('click', function() {
  console.log('Botão clicado!');
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

// submit — formulário enviado
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o recarregamento da página
  console.log('Formulário interceptado');
});
```

O parâmetro `event` dentro da função contém informações sobre o evento —
qual tecla foi pressionada, qual elemento foi clicado etc.
`event.preventDefault()` cancela o comportamento padrão do navegador.

**Exercício:**
Adicione ao HTML um `<button id="btn-teste">Clique aqui</button>`
e um `<p id="contador">0</p>`.
No script, use `addEventListener` para que cada clique no botão
incremente um contador e atualize o texto do `<p>` na tela.

---

## 6. Criando elementos dinamicamente

Até agora modificamos elementos que já existiam no HTML.
O `createElement` permite criar elementos novos e inseri-los na página.

```javascript
// 1. Cria o elemento na memória — ainda não aparece na página
const novoItem = document.createElement('li');

// 2. Configura o elemento
novoItem.textContent = 'Depósito: R$ 500.00';
novoItem.classList.add('transacao');

// 3. Insere na página — só agora aparece
const lista = document.querySelector('#lista-historico');
lista.appendChild(novoItem); // adiciona como ÚLTIMO filho

// Para inserir como PRIMEIRO filho (mais recente primeiro):
lista.insertBefore(novoItem, lista.firstChild);
```

A sequência sempre é a mesma: **cria, configura, insere.**

**Removendo elementos:**

```javascript
const lista = document.querySelector('#lista-historico');

// remove() — remove o próprio elemento
const placeholder = lista.querySelector('.vazio');
if (placeholder) {
  placeholder.remove();
}

// removeChild — remove um filho específico
lista.removeChild(lista.lastChild); // remove o último filho

// Limitar a lista a no máximo 5 itens:
while (lista.children.length > 5) {
  lista.removeChild(lista.lastChild);
}

// innerHTML = '' — remove TODOS os filhos de uma vez
lista.innerHTML = '';
```

**Exercício:**
No HTML, adicione `<ul id="lista"></ul>` e um `<button id="btn-add">Adicionar item</button>`.
No script, a cada clique no botão, crie um novo `<li>` com o texto
`'Item número X'` (onde X é o número do clique) e insira no início da lista.
Limite a lista a no máximo 5 itens visíveis.

---

## 7. Padrão completo — conectando HTML e JavaScript

Na prática, o fluxo de uma funcionalidade no DOM segue este padrão:

```javascript
// 1. Seleciona todos os elementos necessários no início
const elSaldo    = document.querySelector('#saldo');
const campValor  = document.querySelector('#campo-valor');
const btnDepositar = document.querySelector('#btn-depositar');
const elMensagem = document.querySelector('#mensagem');

// 2. Declara as variáveis de estado
let saldo = 1000;

// 3. Cria funções auxiliares que atualizam o DOM
function atualizarSaldo() {
  elSaldo.textContent = `R$ ${saldo.toFixed(2)}`;
}

function exibirMensagem(texto, tipo) {
  elMensagem.textContent = texto;
  elMensagem.style.display = 'block';
  elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro';
}

// 4. Cria as funções de lógica do sistema
function depositar(valor) {
  if (valor <= 0) {
    exibirMensagem('Valor inválido.', 'erro');
    return;
  }
  saldo += valor;
  atualizarSaldo();
  exibirMensagem(`Depósito de R$ ${valor.toFixed(2)} realizado!`, 'sucesso');
}

// 5. Adiciona os eventos que conectam os botões às funções
btnDepositar.addEventListener('click', function() {
  const valor = Number(campValor.value);
  depositar(valor);
  campValor.value = '';
  campValor.focus();
});
```

Este padrão — selecionar, declarar estado, funções auxiliares,
funções de lógica, eventos — é a base de qualquer interface web interativa.

**Exercício:**
Crie uma página HTML com:
- Um `<h2 id="contador">0</h2>`
- Três botões: `<button id="btn-mais">+</button>`,
  `<button id="btn-menos">-</button>` e
  `<button id="btn-reset">Reset</button>`

No script, implemente:
- O contador começa em 0
- O botão `+` incrementa e atualiza o `<h2>`
- O botão `-` decrementa (não deixa passar de zero)
- O botão Reset volta o contador a 0
- O número fica vermelho quando for 0 e azul quando for maior que 0

---

## Exercício Final — Mini Interface Bancária

Crie uma página HTML completa que implemente uma interface
simples para depósito e saque, usando os conceitos deste material.

**HTML necessário:**
```html
<h2 id="saldo">R$ 1000.00</h2>
<input type="number" id="campo-valor" placeholder="Digite o valor">
<button id="btn-depositar">Depositar</button>
<button id="btn-sacar">Sacar</button>
<p id="mensagem"></p>
<ul id="historico">
  <li class="vazio">Nenhuma transação ainda.</li>
</ul>
```

**O que implementar no script:**

- [ ] Seleciona todos os elementos necessários com `querySelector`
- [ ] Declara `let saldo = 1000` e uma função `atualizarSaldo()` que atualiza o `<h2>`
- [ ] Cria `exibirMensagem(texto, tipo)` que exibe feedback na tag `<p>`
- [ ] Cria `adicionarHistorico(texto)` que usa `createElement` e `insertBefore`
      para adicionar itens no início da lista, limitando a 5 visíveis
- [ ] O botão Depositar valida o valor, atualiza o saldo, exibe mensagem e adiciona ao histórico
- [ ] O botão Sacar valida o valor e o saldo disponível, e faz o mesmo
- [ ] O campo limpa e recebe o foco após cada operação

---

## Dicas de IA

- Se travar no `createElement`, pergunte: "Qual a diferença entre appendChild e insertBefore em JavaScript?"
- Use `console.log(document.querySelector('#id'))` para confirmar que um elemento foi encontrado
- Se aparecer `null` no console ao selecionar um elemento, verifique se o id no HTML é idêntico ao usado no querySelector
- Erros comuns: script carregado antes do HTML (coloque o script antes do `</body>`), id com typo, esqueceu de chamar a função
- Escreva o código você mesmo — use a IA para explicações e dicas, não para resolver os exercícios
