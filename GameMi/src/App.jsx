import { useState } from 'react'
import GameList from  './components/gameList'
import GameCard from './components/gameCard'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>🎮 GameCatalog</h1>
      <GameList/>
      <GameCard/>

     </div>
    </>
  )
}

export default App;
