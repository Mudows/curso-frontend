import './CartaoPerfil.css'

function CartaoPerfil({ img, nome, cargo, bio, habilidades, email, telefone }) {
  return (
    <div className="cartao">
      <img
        className='cartao-foto'
        src={img || 'https://placehold.co/100x100?text=??'}
        alt={`Foto de ${nome}`}
      />
      <h2 className='cartao-nome'>{nome}</h2>
      <p className='cartao-cargo'>{cargo}</p>
      <p className='cartao-bio'>{email}</p>
      <p className='cartao-bio'>{telefone}</p>
      <ul className='cartao-habilidades'>
        {habilidades?.map(h => (
          <li key={h}>{h}</li>
        ))}
        </ul>

    </div>
  )
}

export default CartaoPerfil