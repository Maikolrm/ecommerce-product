import { useState } from 'react'

// components
import Header from "./components/Header"
import Slide from "./components/Slide"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  return (
    <div className="container m-auto">
      <Header />
      <div className="flex">
        <Slide />
        <ShoppingCart />
      </div>
    </div>
  )
}

export default App
