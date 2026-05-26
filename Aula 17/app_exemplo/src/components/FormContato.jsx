import { useState } from 'react';
import './FormContato.css'

function FormContato() {
  const [nome, setNome]       = useState('');
  const [email, setEmail]     = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro]       = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // impede recarregamento da página

    // Validação
    if (!nome || !email || !mensagem) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (!email.includes('@')) {
      setErro('Digite um email válido.');
      return;
    }

    // Sucesso
    setErro('');
    setEnviado(true);
  }

  // Renderização condicional — mostra mensagem ou formulário
  if (enviado) {
    return (
      <div className="sucesso">
        <h3>Mensagem enviada!</h3>
        <p>Entraremos em contato em breve, {nome}.</p>
        <button onClick={() => {
          setEnviado(false);
          setNome('');
          setEmail('');
          setMensagem('');
        }}>
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-contato">
      <h2>Fale Conosco</h2>

      {/* Exibe erro se existir */}
      {erro && <p className="form-erro">{erro}</p>}

      <div className="form-grupo">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu nome completo"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          placeholder="Como podemos ajudar?"
          rows={4}
        />
      </div>

      <button type="submit" className="btn-enviar">
        Enviar mensagem
      </button>
    </form>
  );
}

export default FormContato;