import "../../components/Product/style.css";

function Product({ product, handleClick }) {
  return (
    <li className="conteiner_card">
      <img className="product--img" src={product.img} alt="imagem produto" />
      <h3 className="product--name">{product.name}</h3>
      <p className="product--category">{product.category}</p>
      <p className="product--price">{product.price}</p>
      <button className="button--green" id={product.id} onClick={(event) => handleClick(parseInt(event.target.id,10))}>
        Adicionar
      </button>
    </li>
  );
  /* Imagem, nome, categoria, preço e button para adicionar ao carrinho */
}

export default Product;
