import "../../components/MenuConteiner/style.css";
import Product from "../Product";

/* Usar uma condicional para o caso de os produtos estarem filtrados */

function MenuConteiner({ products, /* filteredProducts, */ handleClick }) {
  return (
    <ul className="conteiner">
      {/* filteredProducts.length ? filteredProducts.map((item) => (
            <Product key={item.id} product={item} handleClick={handleClick} />
          ))
        :  */products.map((item) => (
            <Product key={item.id} product={item} handleClick={handleClick} />
          ))}
    </ul>
  );
}

export default MenuConteiner;
