import { useState } from 'react';
import './FormContato.css';

function FormContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [servico, setServico] = useState('');
  const [tamanhoMensagem, setTamanhoMensagem] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !mensagem || !servico) {
      alert('Preencha todos os campos!');
      return;
    }

    if (mensagem.length < 20) {
      alert('A mensagem deve conter pelo menos 20 caracteres.');
      return;
    }

    setEnviado(true);
  }

  function handleMensagemChange(e) {
    const texto = e.target.value;
    setMensagem(texto);
    setTamanhoMensagem(texto.length);
  }

  if (enviado) {
    return (
      <div>
        <h3>Mensagem enviada!</h3>
        <p>
          Obrigado por entrar em contato, {nome}.<br />
          Em breve entraremos em contato sobre o serviço solicitado: {servico}
        </p>
        <button
          onClick={() => {
            setEnviado(false);
            setNome('');
            setEmail('');
            setMensagem('');
            setServico('');
          }}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </label>
      <label>
        Serviço:
        <select value={servico} onChange={(e) => setServico(e.target.value)}>
          <option value="">Selecione um serviço</option>
          <option value="Landing Page">Landing Page</option>
          <option value="Site Institucional">Site Institucional</option>
          <option value="E-Commerce">E-Commerce</option>
        </select>
      </label>
      <label>
        Mensagem:
        <textarea
          value={mensagem}
          onChange={handleMensagemChange}
          placeholder="Digite sua mensagem"
          maxLength={200}
        />
        {tamanhoMensagem} / 200 caracteres
      </label>
      <button type="submit">Enviar</button>
      <button
        type="button"
        onClick={() => {
          setNome('');
          setEmail('');
          setMensagem('');
          setServico('');
        }}
      >
        Limpar Formulário
      </button>
    </form>
  );
}

export default FormContato;
