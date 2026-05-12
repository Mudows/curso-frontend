// Variáveis da conta
    let saldo = 1000;

    // Referências aos elementos do DOM
    const elSaldo     = document.querySelector('#saldo');
    const campo       = document.querySelector('#campo-valor');
    const btnDepositar = document.querySelector('#btn-depositar');
    const btnSacar    = document.querySelector('#btn-sacar');
    const elMensagem  = document.querySelector('#mensagem');
    const elHistorico = document.querySelector('#historico');

    // Funções auxiliares
    function atualizarSaldo() {
      elSaldo.textContent = `R$ ${saldo.toFixed(2)}`;
    }

    function exibirMensagem(texto, cor) {
      elMensagem.textContent = texto;
      elMensagem.style.color = cor;
    }

    function adicionarHistorico(texto) {
      // Remove o placeholder "Nenhuma transação ainda"
      if (elHistorico.children.length === 1 &&
          elHistorico.children[0].style.color === 'rgb(99, 110, 114)') {
        elHistorico.innerHTML = '';
      }
      const item = document.createElement('li');
      item.textContent = texto;
      // Insere no início da lista (mais recente primeiro)
      elHistorico.insertBefore(item, elHistorico.firstChild);
    }

    // Evento — botão Depositar
    btnDepositar.addEventListener('click', function() {
      const valor = Number(campo.value);

      if (!valor || valor <= 0) {
        exibirMensagem('⚠️ Digite um valor válido.', '#dc3545');
        return;
      }

      saldo += valor;
      atualizarSaldo();
      adicionarHistorico(`⬆ Depósito de R$ ${valor.toFixed(2)}`);
      exibirMensagem(`✅ Depósito de R$ ${valor.toFixed(2)} realizado!`, '#198754');
      campo.value = ''; // limpa o campo
    });

    // Evento — botão Sacar
    btnSacar.addEventListener('click', function() {
      const valor = Number(campo.value);

      if (!valor || valor <= 0) {
        exibirMensagem('⚠️ Digite um valor válido.', '#dc3545');
        return;
      }

      if (valor > saldo) {
        exibirMensagem(`❌ Saldo insuficiente! Disponível: R$ ${saldo.toFixed(2)}`, '#dc3545');
        return;
      }

      saldo -= valor;
      atualizarSaldo();
      adicionarHistorico(`⬇ Saque de R$ ${valor.toFixed(2)}`);
      exibirMensagem(`✅ Saque de R$ ${valor.toFixed(2)} realizado!`, '#198754');
      campo.value = '';
    });