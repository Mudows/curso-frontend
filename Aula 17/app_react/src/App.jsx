import './App.css';
// import Exemplo from './components/Exemplo.jsx'
import CartaoPerfil from './components/CartaoPerfil.jsx';
import Header from './components/Header.jsx';
import funcionarios from './data/funcionarios.js';
// import Contador from './components/ExemploUseState.jsx';
import FormContato from './components/FormContato.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <h1>Nossa Equipe</h1>
      <div className="grade">
        {funcionarios.map(funcionario => (
          <CartaoPerfil
            key={funcionario.nome}
            imagem={funcionario.img}
            nome={funcionario.nome}
            cargo={funcionario.cargo}
            bio={funcionario.bio}
            habilidades={funcionario.habilidades}
          />
        ))}
      </div>
      <h1>Formulário de Contato</h1>
      <FormContato />
    </div>
  );
}

export default App;
