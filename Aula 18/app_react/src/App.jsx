import './App.css';
// import CartaoPerfil from './components/CartaoPerfil.jsx';
import Header from './components/Header.jsx';
// import funcionarios from './data/funcionarios.js';
import FormContato from './components/FormContato.jsx';
import SecaoEquipe from './components/SecaoEquipe';

function App() {
  return (
    <div className="app">
      <Header />
      <h1>Nossa Equipe</h1>
      <SecaoEquipe />
      <h1>Formulário de Contato</h1>
      <FormContato />
    </div>
  );
}

export default App;
