import { useState } from 'react'

// components
import Header from "./components/Header"
import ProductSlide from "./components/ProductSlide"
import ProductInfo from "./components/ProductInfo"

function App() {
  return (
    <div className="container m-auto">
      <Header />
      <div className="lg:flex lg:py-16">
        <ProductSlide />
        <ProductInfo />
      </div>
    </div>
  )
}

export default App
