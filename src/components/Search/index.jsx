import { useState } from "react";
import "../../components/Search/style.css";

function Search({ showProducts, input, setInput }) {
  const [typed, setTyped] = useState("");

  return (
    <>
      <div className="logo">
        <h1 className="logo--maior">
          Burguer <span className="logo--menor">Kenzie</span>{" "}
        </h1>
      </div>
      <div className="search">
        <input
          className="search_input"
          type="text"
          value={typed}
          placeholder="Digitar Pesquisa"
          onChange={(event) => setTyped(event.target.value)}
        ></input>
        <button
          className="button--green"
          onClick={() => {
            showProducts(input);
            setInput(typed);
          }}
        >
          Pesquisar
        </button>
      </div>
    </>
  );
}

export default Search;
