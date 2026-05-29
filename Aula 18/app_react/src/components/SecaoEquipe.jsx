import { useState, useEffect } from 'react';
import CartaoPerfil from './CartaoPerfil';

function SecaoEquipe() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [busca, setBusca] = useState('');
  const equipeFormatada = funcionarios
    .filter((funcionario) =>
      funcionario.name.toLowerCase().includes(busca.toLowerCase())
    )
    .map((funcionario) => ({
      key: funcionario.id,
      nome: funcionario.name,
      cargo: funcionario.company.name,
      email: funcionario.email,
      telefone: funcionario.phone,
      habilidades: ['Habilidade 1', 'Habilidade 2', 'Habilidade 3'],
      img: `https://i.pravatar.cc/150?img=${funcionario.id}`,
    }));

  useEffect(() => {
    async function fetchFuncionarios() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const equipe = await response.json();
        setFuncionarios(equipe);
      } catch (error) {
        console.error('Erro ao carregar os funcionários:', error);
      }
    }

    fetchFuncionarios();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Buscar funcionário..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="campo-busca"
      />
      <div className="grade">
        {equipeFormatada.map((funcionario) => (
          <CartaoPerfil {...funcionario} />
        ))}
      </div>
    </>
  );
}

export default SecaoEquipe;
