import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import BasketPage from './Pages/BasketPage'
import AddProductPage from './Pages/AddProductPage'
import NotFoundPage from './Pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path= "/basket" element= {<BasketPage/>}/>
        <Route path="/add-product" element= {<AddProductPage/>}/>
        <Route path= "*" element= {<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
