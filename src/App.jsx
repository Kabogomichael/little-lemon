import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/NavBar/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import {Routes,Route,} from 'react-router-dom'
import Home from './components/NavBar/Home'
import About from './components/NavBar/About'
import Blog from './components/NavBar/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog />} ></Route>
    </Routes>
   <Nav />
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App
