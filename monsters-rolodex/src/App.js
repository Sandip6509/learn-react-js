import { useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([])
  const fetchMonsterData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      return response.json()
    }).then(data =>{
      setMonsters(data)
    })
  }
  useEffect(() => {
    fetchMonsterData()
  },[])
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox />
      <CardList monsters={monsters}/>
    </div>
  );
}

export default App;
