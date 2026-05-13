# Desafios aula 13

## Desafio 01
Adicione um botão "Limpar histórico" que, quando clicado, remova todas as transações do histórico e exibe novamente o placeholder "Nenhuma transação realizada ainda".

> [!TIP]
> Dá para usar innerHTML = '' para limpar

## Desafio 02
Faça o saldo mudar de cor conforme o valor:
- Verde quando o saldo > 5000
- Amarelo quando o saldo > 1000 e <= 5000
- Vermelho quando o saldo <= 1000

> [!TIP] Dica
> use `if/else` detro de `atualizarSaldo` e altere `elSaldo.style.color`

## Desafio 03

Adicione um campo de texto "Titular" que permite trocar o nomedo titular exibido no card de saldo, sem recarregar a página.

> [!TIP] Dica
> Crie o input no HTML e conecte com `addEventListener('input', ...)` no JS.