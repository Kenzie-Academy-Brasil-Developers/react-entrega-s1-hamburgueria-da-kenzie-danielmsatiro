import "../../components/Product/style.css";

function Product({ product, handleClick }) {
  return (
    <li className="conteiner_card">
      <div className="conteiner_img">
        <img className="product--img" src={product.img} alt="imagem produto" />
      </div>
      <div className="conteiner_outros">
        <h3 className="product product--name">{product.name}</h3>
        <p className="product product--category">{product.category}</p>
        <p className="product product--price">R$ {product.price.toFixed(2)}</p>
        <button
          className="product button--green"
          id={product.id}
          onClick={(event) => handleClick(parseInt(event.target.id, 10))}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
  /* Imagem, nome, categoria, preço e button para adicionar ao carrinho */
}

export default Product;
