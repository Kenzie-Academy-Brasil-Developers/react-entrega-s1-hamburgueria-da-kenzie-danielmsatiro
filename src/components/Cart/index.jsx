import "../../components/Cart/style.css";
function Cart({ currentSale, setcurrentSale, cartTotal }) {
  /* >Desenvolver a função de remover itens aqui dentro
>usar classes similares aos do Menuconteiner
>usar classe diferente para botão remover
criar um botão geral de remover tudo*/
  function removeItem(productId) {
    setcurrentSale(currentSale.filter((item) => item.id !== productId));
  }

  return (
    <div className="box-cart">
      <h2 className="titleCart">Carrinho de compras</h2>
      {!currentSale.length ? (
        <div className="card">
          <p className="message">Sua sacola está vazia</p>
          <p className="message--adicionar">Adicionar Itens</p>
        </div>
      ) : (
        <div className="card">
          <ul className="card_products">
            {currentSale.map((item) => (
              <li key={item.id} className="card_product">
                <img
                  className="product--img"
                  src={item.img}
                  alt="imagem produto"
                />
                <div className="card_name">
                  <h3 className="product--name">{item.name}</h3>
                  <p className="product--category">{item.category}</p>
                </div>
                <button
                  className="button--remove"
                  id={item.id}
                  onClick={(event) => removeItem(event.target.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="card_total">
            <p className="total--text">Total</p>
            <p className="total--text">R$ {cartTotal}</p>
          </div>
          <hr className="card_line" />
          <button
            className="button--remove-all"
            onClick={() => setcurrentSale([])}
          >
            Remover todos
          </button>
        </div>
      )}

      {/* Usar condicional para o caso de a sacola estar vazia */}
    </div>
  );
}

export default Cart;
