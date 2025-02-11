type ISearch = {
  loadUser: (username: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

const Search = ({ loadUser }: ISearch) => {
  const [username, setUsername] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
