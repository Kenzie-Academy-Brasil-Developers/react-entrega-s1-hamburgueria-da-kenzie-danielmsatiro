import react from "react";
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
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function showProducts(input) {
    setFilteredProducts(products.filter((item) => item.name === input));
  }

  function handleClick(productId) {
    /* if(!currentSale.some(item=>item.id===productId)) */
    setCurrentSale([
      ...currentSale,
      products.find((item) => item.id === productId),
    ]);
   /*  console.log(currentSale) */
  }

  if (currentSale.length > 0)
    setCartTotal(currentSale.reduce((acc, item) => acc + item.price, 0));

  return (
    <div className="App">
      <header className="App-header">
        <img src="#" alt="logo"/>
        <div className="search">
          <input type="text" /* value */></input>
          <button>Pesquisar</button>
        </div>

      </header>
      <div className="App-main">
        <MenuConteiner products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
        <Cart currentSale={currentSale} cartTotal={cartTotal}/>
      </div>
    </div>
  );
}

export default App;
