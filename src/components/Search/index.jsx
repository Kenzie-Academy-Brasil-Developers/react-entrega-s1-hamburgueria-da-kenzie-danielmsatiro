import "../../components/Search/style.css";

function Search({ showProducts, input, setInput }) {
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
          value={input}
          placeholder="Digitar Pesquisa"
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button
          className="button--green"
          onClick={() => {
            showProducts(input);
          }}
        >
          Pesquisar
        </button>
      </div>
    </>
  );
}

export default Search;
