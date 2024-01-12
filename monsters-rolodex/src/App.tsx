import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
interface Monster {
  id: number;
  name: string;
  email: string;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  const searchFieldHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((m) =>
    m.name.toLowerCase().includes(searchField.toLowerCase())
  );
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data: Monster[]) => {
        setMonsters(data);
      });
  }, []);

  return (
    <div className="py-10 bg-[#071e34] h-screen">
      <h1 className="text-white font-bold text-2xl tracking-wide text-center">
        Monsters Rolodex
      </h1>
      <SearchBox onChangeHandler={searchFieldHandler}/>
      <CardList  monsters={filteredMonsters}/>
    </div>
  );
};

export default App;
