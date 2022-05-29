import { useState } from "react";
import "../styles/home.scss";

type Props = {
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      onSearch(searchValue);
    }
  };

  return (
    <div className="button">
      <input
        type="text"
        placeholder="digite aqui o usuario"
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button onClick={() => onSearch(searchValue)}>Pesquisar</button>
    </div>
  );
};
