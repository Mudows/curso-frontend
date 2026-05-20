import './CartaoPerfil.css';

function CartaoPerfil() {
  const nome = 'João Silva';
  const cargo = 'Desenvolvedor Front-End';
  const bio = 'Apaixonado por criar interfaces modernas com tecnologia e IA.';

  return (
    <div className="cartao">
      <img
        src="https://placehold.co/100x100/004a99/ffffff?text=JS"
        alt={`Foto de ${nome}`}
        className="cartao-foto"
      />
      <h2 className="cartao-nome">{nome}</h2>
      <p className="cartao-cargo">{cargo}</p>
      <p className="cartao-bio">{bio}</p>
    </div>
  );
}

export default CartaoPerfil;