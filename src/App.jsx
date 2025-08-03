import Nav from './Components/Nav'
import Home from './Components/Home'
import HomeCryptos from './Components/HomeCryptos'
import './App.css'

function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-indigo-950 via-blue-700/10 to-black'>
        <div className="max-w-6xl mx-auto px-40 ">
          <Nav />
          <Home />
          <HomeCryptos />
        </div>
      </div>

    </>
  )
}

export default App
