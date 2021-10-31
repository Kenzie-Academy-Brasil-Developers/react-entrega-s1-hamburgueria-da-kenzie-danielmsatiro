import "../../components/Product/style.css";

function Product({ product, handleClick }) {
  return (
    <div className="box-product">
      <img src={product.img} alt="imagem produto" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">{product.price}</p>
      <button className="button--green" id={product.id} onClick={(event) => console.log(event.target.id)}>
        Adicionar
      </button>
    </div>
  );
  /* Imagem, nome, categoria, preço e button para adicionar ao carrinho */
}

export default Product;
