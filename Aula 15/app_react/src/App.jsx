import './App.css';
// import Exemplo from './components/Exemplo.jsx'
import CartaoPerfil from './components/CartaoPerfil.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <h1>Nossa Equipe</h1>
      <div className="grade">
        <CartaoPerfil />
        <CartaoPerfil />
        <CartaoPerfil />
        <CartaoPerfil />
      </div>
    </div>
  );
}

export default App;
