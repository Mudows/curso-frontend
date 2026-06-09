# Guia: Instalando Node.js, React e Angular

Um guia simples e direto para configurar seu ambiente local de desenvolvimento front-end.

---

## Parte 1: O que é Node.js e por que você precisa?

**Node.js** é um ambiente que permite executar JavaScript fora do navegador (no seu computador). Quando você trabalha com **React** ou **Angular**, precisa de ferramentas que só funcionam com Node.js instalado.

**Pense assim:** Node.js é como uma "máquina" que roda JavaScript. React e Angular são frameworks que precisam dessa máquina para funcionar.

---

## Parte 2: Instalando Node.js

### Passo 1: Baixar o instalador

Acesse: **https://nodejs.org/**

Na página inicial, você verá duas opções:
- **LTS** (Long Term Support) - Versão estável e recomendada
- **Current** - Versão mais nova

**Escolha LTS.** É a versão que será suportada por mais tempo.

### Passo 2: Executar o instalador

1. Abra o arquivo baixado
2. Clique em "Next" em todas as telas (as configurações padrão estão ótimas)
3. Finalize a instalação
4. Reinicie seu computador (importante!)

### Passo 3: Verificar se instalou corretamente

Abra o **Terminal** (ou Command Prompt no Windows) e digite:

```bash
node --version
```

Se aparecer um número de versão (como `v18.17.0`), Node.js foi instalado com sucesso! 🎉

---

## Parte 3: Iniciando um Projeto React com Vite

### O que você vai fazer

Você criará uma pasta com toda a estrutura pronta para desenvolver em React. O **Vite** é uma ferramenta moderna e rápida que é mais leve e inicia o servidor quase instantaneamente.

### Passo 1: Abra o Terminal

- **Windows:** Procure por "Command Prompt" ou "PowerShell"
- **Mac/Linux:** Abra o aplicativo "Terminal"

### Passo 2: Navegue até a pasta onde quer o projeto

```bash
cd Desktop
```

Este comando leva você até a pasta `Desktop`. Se preferir outra pasta, substitua `Desktop` pelo caminho.

### Passo 3: Crie o projeto React com Vite

```bash
npm create vite@latest meu-projeto-react --template react
```

**O que cada parte significa:**
- `npm create` - Comando para criar um novo projeto
- `vite@latest` - Usa a versão mais recente do Vite
- `meu-projeto-react` - Nome da sua pasta (você pode mudar para qualquer nome)
- `--template react` - Especifica que é um projeto React

Este processo leva **30 segundos a 1 minuto**. É muito mais rápido que `create-react-app`!

### Passo 4: Entre na pasta do projeto

```bash
cd meu-projeto-react
```

Este comando entra dentro da pasta que foi criada.

### Passo 5: Instale as dependências

```bash
npm install
```

**O que acontece:**
- Node.js baixa e instala todos os pacotes necessários
- Cria uma pasta chamada `node_modules` (não edite!)
- Leva **1-3 minutos** dependendo da sua internet

### Passo 6: Inicie o servidor local

```bash
npm run dev
```

**O que acontece:**
- O servidor inicia em `http://localhost:5173` (por padrão)
- Você verá a página inicial do React funcionando
- Qualquer mudança que fazer nos arquivos é atualizada **automaticamente** (muito rápido!)
- O Vite recarrega apenas o que mudou (não precisa recarregar tudo)

**Para parar o servidor:** Aperte `Ctrl + C` no terminal.

### Arquivos principais que você vai editar

- `src/App.jsx` - Componente principal (código React)
- `src/App.css` - Estilo do componente
- `index.html` - Estrutura HTML base (fica na raiz do projeto, não em `public`)

---

## Parte 4: Iniciando um Projeto Angular

### O que você vai fazer

Assim como React, você criará uma pasta com a estrutura pronta para Angular. O processo é bem parecido.

### Passo 1: Instale a ferramenta Angular globalmente

Você só faz isso **uma única vez** no seu computador:

```bash
npm install -g @angular/cli
```

**O que significa:**
- `npm install` - Instala um pacote
- `-g` - "global" (em todo seu computador, não só neste projeto)
- `@angular/cli` - A ferramenta oficial do Angular

### Passo 2: Abra o Terminal e navegue até sua pasta

```bash
cd Desktop
```

### Passo 3: Crie o projeto Angular

```bash
ng new meu-app-angular
```

**O que significa:**
- `ng` - Comando do Angular
- `new` - Criar novo projeto
- `meu-app-angular` - Nome da pasta (escolha o que quiser)

Durante a criação, pode pedir para escolher opções (routing, stylesheet). Se não tiver certeza, clique Enter para aceitar as padrões.

Este processo leva **3-7 minutos**.

### Passo 4: Entre na pasta do projeto

```bash
cd meu-app-angular
```

### Passo 5: Inicie o servidor local

```bash
ng serve
```

Ou, se preferir abrir o navegador automaticamente:

```bash
ng serve --open
```

**O que acontece:**
- Seu navegador abre em `http://localhost:4200`
- Você verá a página inicial do Angular funcionando
- Mudanças nos arquivos são atualizadas automaticamente

**Para parar o servidor:** Aperte `Ctrl + C` no terminal.

### Comandos importantes do Angular

Enquanto seu servidor está rodando, você pode usar esses comandos em **outra aba do terminal** para gerar componentes automaticamente:

#### Gerar um novo componente

```bash
ng g c nome-do-componente
```

**O que significa:**
- `ng` - Comando do Angular
- `g` - "generate" (gerar)
- `c` - "component" (componente)
- `nome-do-componente` - Nome do seu componente

**Exemplo:**
```bash
ng g c Header
```

Isso cria uma pasta com 4 arquivos:
- `header.component.ts` - Lógica do componente
- `header.component.html` - Template (estrutura)
- `header.component.css` - Estilos
- `header.component.spec.ts` - Testes (você pode ignorar por enquanto)

#### Gerar um novo serviço

```bash
ng g s nome-do-servico
```

Serviços são usados para compartilhar dados e lógica entre componentes.

**Exemplo:**
```bash
ng g s user
```

#### Gerar um novo módulo

```bash
ng g m nome-do-modulo
```

Módulos organizam e agrupam funcionalidades da sua aplicação.

### Arquivos principais que você vai editar

- `src/app/app.component.ts` - Lógica do componente principal (TypeScript)
- `src/app/app.component.html` - Template do componente (HTML)
- `src/app/app.component.css` - Estilos do componente
- `src/app/app.module.ts` - Módulo raiz (declara componentes e importa módulos)
- `src/main.ts` - Arquivo de inicialização da aplicação

---

## Parte 5: Comparação Rápida

| | React (Vite) | Angular |
|---|---|---|
| **Comando de início** | `npm create vite@latest` | `ng new` |
| **Instalação** | `npm install` | Automático |
| **Iniciar servidor** | `npm run dev` | `ng serve` |
| **Porta padrão** | 5173 | 4200 |
| **Arquivo principal** | `App.jsx` | `app.component.ts` |
| **Linguagem** | JavaScript | TypeScript |
| **Complexidade** | Mais simples e leve | Mais estruturado e completo |
| **Tempo de inicialização** | Muito rápido | Um pouco mais lento |

---

## Parte 6: Dicas Importantes

### ✅ Boas práticas

1. **Nomes de pasta sem espaços ou caracteres especiais**
   ```bash
   ✅ meu-app-react
   ❌ meu app react
   ❌ meu@app#react
   ```

2. **Sempre use o Terminal do seu editor (VSCode)**
   - Mais fácil de navegar entre pastas
   - Mais integrado ao seu fluxo de trabalho

3. **Deixe o servidor rodando enquanto desenvolve**
   - Abra outro terminal (aba nova) se precisar de mais espaço
   - Não feche a aba do servidor

### ⚠️ Problemas comuns

**"Comando não encontrado"**
- Reinicie seu computador após instalar Node.js
- Verifique se Node.js foi realmente instalado: `node --version`

**"Porta 3000 ou 4200 já está em uso"**
- Feche outro projeto que pode estar rodando
- Ou especifique outra porta: `npm start -- --port 3001`

**"npm: command not found"**
- Node.js pode não ter instalado corretamente
- Desinstale e reinstale o Node.js

---

## Parte 7: Próximos Passos

Depois que sua aplicação está rodando:

1. **Explore o código gerado** - Veja como está organizado
2. **Edite o arquivo principal** - Faça mudanças simples e veja a página atualizar
3. **Instale pacotes adicionais** - Use `npm install nome-do-pacote` quando precisar
4. **Construa para produção** - Use `npm run build` para gerar arquivos otimizados

---

## Resumo dos Comandos

```bash
# Verificar instalação
node --version
npm --version

# REACT COM VITE
npm create vite@latest meu-projeto-react --template react
cd meu-projeto-react
npm install
npm run dev

# ANGULAR (primeira vez - instalar CLI)
npm install -g @angular/cli

# ANGULAR (novo projeto)
ng new meu-app
cd meu-app
ng serve --open

# ANGULAR (gerar componentes, enquanto servidor está rodando)
ng g c Header
ng g c Footer
ng g s UserService

# Parar qualquer servidor
Ctrl + C
```

---

**Sucesso! Você já tem tudo configurado para começar a desenvolver.**