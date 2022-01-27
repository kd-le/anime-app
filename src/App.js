import React, { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/Header';
import AnimeGrid from './components/AnimeGrid';
import { BASE_URL } from './globals';
import { SEARCH_URL } from './globals';
import axios from 'axios';
import SearchSection from './components/SearchSection';


const App = () => {
  const [animes, setAnimes] = useState([])
  const [animeResults, setAnimeResults] = useState([])
  const [search, setSearch] = useState([])

  async function getTopFive() {
    const response = await axios.get(`${BASE_URL}top/anime`)
  setAnimes(response.data.data.slice(0,5))
  }

  const handleSearch = event => {
    event.preventDefault()
    getAnimeResults(search)
    console.log(search)
  }

  async function getAnimeResults(query) {
    const response = await axios.get(`${SEARCH_URL}${query}&order_by=title&sort=asc&limit=10`)
  setAnimeResults(response.data.results)
  console.log(response.data.results)
  }



useEffect(()=>{
  getTopFive()
},[])

  return (
    <div>
      <Header />
      <div>
        <SearchSection 
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeResults={animeResults}/>
        <AnimeGrid animes={animes}/>
      </div>
    </div>
  );
}

export default App;
