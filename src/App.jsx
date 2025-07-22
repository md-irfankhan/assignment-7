

import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Tab from './components/Tab/Tab'
import Card from './components/Card/Card'
import { ToastContainer, Bounce } from 'react-toastify';
function App() {
  const [tab, setTab] = useState(true);
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState(600000);
  const [selected, setSelected] = useState([])
  useEffect(() => {
    fetch('/api/api.json').then(res => res.json()).then(data => setPlayers(data.players))
  }, [])

  return (
    <>

      <Nav balance={balance}></Nav>
      <Header setBalance={setBalance} balance={balance}></Header>
      <Tab tab={tab} setTab={setTab}></Tab>
      <div className='max-w-[1250px] mx-auto grid md:grid-cols-3 gap-5'>
        {
          players.map(player => <Card  balance={balance} setBalance={setBalance} selected={selected} setSelected={setSelected} player={player}></Card>)
        }
      </div>

      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
