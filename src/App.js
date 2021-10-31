import "./App.css";
import { useState } from "react";
import MenuConteiner from "./components/MenuConteiner";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca Cola",
      category: "Bebidas",
      price: 7.0,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: 10.0,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [input, setInput] = useState("");
  function showProducts(input) {
    return setFilteredProducts([...products].filter((item) => item.category === input));
  }
  console.log(filteredProducts)
  function handleClick(productId) {
    /* if(!currentSale.some(item=>item.id===productId)) */
    console.log(products.find((item) => item.id === productId))
    /* return setCurrentSale([
      ...currentSale,
      products.find((item) => item.id === productId)
    ]); */
    /*  console.log(currentSale) */
  }

  if (currentSale.length > 0)
    setCartTotal(currentSale.reduce((acc, item) => acc + item.price, 0));

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1 className="logo--maior">
            Burguer <span className="logo--menor">Kenzie</span>{" "}
          </h1>
        </div>
        <div className="search">
          <input
            className="search_input"
            type="text"
            value={input}
            placeholder="Digitar Pesquisa"
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <button
            className="button--green"
            onClick={() => setFilteredProducts(showProducts(input))}
          >
            Pesquisar
          </button>
        </div>
      </header>
      <div className="App-main">
        <MenuConteiner
          products={products}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart currentSale={currentSale} cartTotal={cartTotal} />
      </div>
    </div>
  );
}

export default App;
