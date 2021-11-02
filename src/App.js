import "./reset.css";
import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
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
  const [found, setFound] = useState(true);

  function showProducts(input) {
    const some = products.some(
      (item) =>
        input
          .toLowerCase()
          .split("")
          .every(
            (letter, index) => letter === item.category.toLowerCase()[index]
          ) ||
        input
          .toLowerCase()
          .split("")
          .every((letter, index) => letter === item.name.toLowerCase()[index])
    );
    setFound(some);
    const filter = products.filter(
      (item) =>
        input
          .toLowerCase()
          .split("")
          .every(
            (letter, index) => letter === item.category.toLowerCase()[index]
          ) ||
        input
          .toLowerCase()
          .split("")
          .every((letter, index) => letter === item.name.toLowerCase()[index])
    );
    setFilteredProducts(filter);
  }

  function handleClick(productId) {
    if (!currentSale.some((item) => item.id === productId))
      setCurrentSale([
        ...currentSale,
        products.find((item) => item.id === productId),
      ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search showProducts={showProducts} input={input} setInput={setInput} />
      </header>
      <div className="App-main">
        <MenuConteiner
          products={products}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
          input={input}
          found={found}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          setCartTotal={setCartTotal}
          cartTotal={cartTotal}
        />
      </div>
    </div>
  );
}

export default App;
