import './CartaoPerfil.css'

function CartaoPerfil() {
  const nome = "Diego Cezar"
  const cargo = "Instrutor de Programação"
  const bio = "Sou um instrutor de programação apaixonado por ensinar e compartilhar conhecimento. Com anos de experiência em desenvolvimento de software, estou comprometido em ajudar meus alunos a alcançarem seus objetivos e se tornarem profissionais de sucesso na área de tecnologia."

  const habilidades = ['JavaScript', 'React', 'Node.js', 'Python']

  return (
    <div className="cartao">
      <img
        className='cartao-foto'
        src='https://placehold.co/100x100'
        alt={`Foto de ${nome}`}
      />
      <h2 className='cartao-nome'>{nome}</h2>
      <p className='cartao-cargo'>{cargo}</p>
      <p className='cartao-bio'>{bio}</p>
      <h3 className='cartao-habilidades-titulo'>Habilidades</h3>
      <ul className='cartao-habilidades'>
        {habilidades.map((habilidade, index) => (
          <li key={index} className='cartao-habilidade'>{habilidade}</li>
        ))}
      </ul>
    </div>
  )
}

export default CartaoPerfil