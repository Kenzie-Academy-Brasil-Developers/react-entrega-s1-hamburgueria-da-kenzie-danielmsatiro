import "../../components/Cart/style.css";
function Cart({ currentSale, setCurrentSale, setCartTotal, cartTotal }) {
  function removeItem(productId) {
    setCurrentSale(
      currentSale.filter((item) => item.id !== parseInt(productId, 10))
    );
  }
  setCartTotal(currentSale.reduce((acc, item) => acc + item.price, 0));

  return (
    <div className="box-cart">
      <h2 className="title-cart">Carrinho de compras</h2>
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
                <div className="card_img">
                  <img
                    className="product--img-cart"
                    src={item.img}
                    alt="imagem produto"
                  />
                </div>
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
            onClick={() => setCurrentSale([])}
          >
            Remover todos
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
