import "../../components/MenuConteiner/style.css";
import Product from "../Product";

function MenuConteiner({
  products,
  filteredProducts,
  handleClick,
  input,
  found,
}) {
  console.log(found);
  return (
    <>
      {filteredProducts.length && input ? (
        <h2 className="search-result">
          Resultados para: <span className="search-target">{input}</span>
        </h2>
      ) : (
        <div></div>
      )}
      {!found ? (
        <>
          <h2 className="search-result">
            Resultados para: <span className="search-target">{input}</span>
          </h2>
          <p className="search-result search-result--red">
            Sem correspondência. Busque um produto ou categoria.
          </p>
        </>
      ) : (
        <div></div>
      )}
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
