import { useState } from "react";
import classes from "./Search.module.css";

// receber por props os items e filtrar os produtos de acordo com o modelo e marca
// se estiver vazio a text box mostrar todos os produtos

const Search = (props) => {
  console.log(props.model);

  const [query, setquery] = useState("");
  const handleChange = (e) => {
    setquery(e.target.value);
  };

  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
