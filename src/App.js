import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=edf7b039'

function App() {
    const serachMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }
 useEffect(()=>{
    serachMovies('spiderman');
 },[])
  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input placeholder='Search for movies'
         value="siperman"
         onChange={()=>{}}
        />
      </div>
    </div>
  );
}

export default App;