import CartaoPerfil from './components/CartaoPerfil';
import FormContato from './components/FormContato';
import equipe from './data/equipe';
import './App.css';

function App() {
  return (
    <div className="app">

      <header className="app-header">
        <h1>InovaWeb</h1>
        <p>Soluções web com inteligência artificial</p>
      </header>

      <section className="secao">
        <h2 className="secao-titulo">Nossa Equipe</h2>
        <div className="grade">
          {equipe.map(pessoa => (
            <CartaoPerfil
              key={pessoa.id}
              nome={pessoa.nome}
              cargo={pessoa.cargo}
              bio={pessoa.bio}
              foto={pessoa.foto}
              habilidades={pessoa.habilidades}
            />
          ))}
        </div>
      </section>

      <section className="secao secao-contato">
        <FormContato />
      </section>

    </div>
  );
}

export default App;