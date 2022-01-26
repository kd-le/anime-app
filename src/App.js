import React, { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import { BASE_URL } from './globals';
import axios from 'axios';


const App = () => {
  const [animes, setAnimes] = useState([])
  const [selectedAnime, setSelectedAnime] = useState(null)


useEffect(()=>{
  async function getAnimes() {
    const response = await axios.get(`${BASE_URL}top/anime`)
  setAnimes(response.data.data.slice(0,10))
  console.log(response.data.data)
  }
getAnimes()
},[])

  return (
    <div>
      <Header />
      <AnimeList animes={animes}/>
    </div>
  );
}

export default App;
