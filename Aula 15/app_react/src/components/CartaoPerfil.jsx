import './CartaoPerfil.css'

function CartaoPerfil({ imagem, nome, cargo, bio, habilidades }) {
  return (
    <div className="cartao">
      <img
        className='cartao-foto'
        src={imagem || 'https://placehold.co/100x100?text=??'}
        alt={`Foto de ${nome}`}
      />
      <h2 className='cartao-nome'>{nome}</h2>
      <p className='cartao-cargo'>{cargo}</p>
      <p className='cartao-bio'>{bio}</p>
      <ul className='cartao-habilidades'>
        {habilidades.map(h => (
          <li key={h}>{h}</li>
        ))}
        </ul>

    </div>
  )
}

export default CartaoPerfil