import "../../components/MenuConteiner/style.css";
import Product from "../Product";


function MenuConteiner({ products, filteredProducts, handleClick }) {
  return (
    <ul className="conteiner">
      {filteredProducts.length ? filteredProducts.map((item) => (
            <Product key={item.id} product={item} handleClick={handleClick} />
          ))
        : products.map((item) => (
            <Product key={item.id} product={item} handleClick={handleClick} />
          ))}
    </ul>
  );
}

export default MenuConteiner;
