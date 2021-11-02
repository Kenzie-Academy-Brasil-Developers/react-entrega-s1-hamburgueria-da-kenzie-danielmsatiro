import "../../components/MenuConteiner/style.css";
import Product from "../Product";

function MenuConteiner({ products, filteredProducts, handleClick, input }) {
  console.log(input)
  return (
    <>
      {filteredProducts.length?(
        <h2 className="search-result">Resultados para: <span className="search-target">{input}</span></h2>
      ) : (
        <div></div>
      )
      }
      <ul className="conteiner">
        {filteredProducts.length
          ? filteredProducts.map((item) => (
              <Product key={item.id} product={item} handleClick={handleClick} />
            ))
          : products.map((item) => (
              <Product key={item.id} product={item} handleClick={handleClick} />
            ))}
      </ul>
    </>
  );
}

export default MenuConteiner;
