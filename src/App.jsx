import Nav from './Components/Nav'
import Home from './Components/Home'
import HomeCryptos from './Components/HomeCryptos'
import { CryptoProvider } from './Components/CryptoContext'
import './App.css'
import MarketUpdate from './Components/MarketUpdate'
import ChooseUS from './Components/ChooseUS'
import JoinUs from './Components/JoinUs'

function App() {


  return (
    <>
      <div className="max-w-6xl mx-auto px-40 ">
        <div className="min-h-screen">
          <Nav />
          <Home />
          <CryptoProvider>
            <HomeCryptos />
          </CryptoProvider>
        </div>
        <div>
          <CryptoProvider>
            <MarketUpdate />
          </CryptoProvider>
        </div>
        <ChooseUS />
        <JoinUs />
      </div >

    </>
  )
}

export default App
