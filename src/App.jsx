import { useState } from 'react'
import './App.css'
import Header from './components/header'
import List from './components/list'
import Products from './components/Products'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <List/>
     <Products/>
     <Footer/>
    </>
  )
}

export default App
