

import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Tab from './components/Tab/Tab'
import Card from './components/Card/Card'

function App() {
   const [players,setPlayers]=useState([]);
   const [balance,setBalance]=useState(600000);
   useEffect(()=>{
    fetch('/api/api.json').then(res=>res.json()).then(data=>setPlayers(data.players))
   },[])

  return (
    <>
     <Nav balance={balance}></Nav>
     <Header setBalance={setBalance} balance={balance}></Header>
     <Tab></Tab>
     <div className='max-w-[1250px] mx-auto grid md:grid-cols-3 gap-5'>
        {
          players.map(player=><Card player={player}></Card>)
        }
     </div>
    </>
  )
}

export default App
