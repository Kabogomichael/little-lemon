import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/NavBar/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Nav />
    <Main />
    <Footer />
    
    </>
  )
}

export default App
