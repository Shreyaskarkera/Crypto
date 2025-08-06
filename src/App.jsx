import Nav from './Components/Nav'
import Home from './Components/Home'
import HomeCryptos from './Components/HomeCryptos'
import { CryptoProvider } from './Components/CryptoContext'
import './App.css'
import MarketUpdate from './Components/MarketUpdate'
import ChooseUS from './Components/ChooseUS'
import JoinUs from './Components/JoinUs'
import Footer from './Components/Footer'
import { useEffect } from 'react'



function App() {

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      alert("For the best experience, please use a tablet or desktop. ");
    }
  }, [])
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <Nav className="fixed top-0" />
        <div className="min-h-screen">
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
      </div>
      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
