import { useState } from 'react'
import { useImmerReducer } from "use-immer"

// context
import AppState from "./AppState"
import AppDispatch from "./AppDispatch"

// components
import Header from "./components/Header"
import ProductSlide from "./components/ProductSlide"
import ProductInfo from "./components/ProductInfo"

function App() {
  // initial state
  const initialState = {
    cart: {
      items: [],
      visible: false
    }
  }
  
  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "add-cart-product":
        draft.cart.items.push(action.product)
        break
      case "delete-cart-product":
        draft.cart.items = draft.cart.items.filter(product => product.id != action.id)
        break
      case "show-cart":
        draft.cart.visible = action.value
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <div className="container m-auto">
          <Header />
          <div className="lg:flex lg:py-16">
            <ProductSlide />
            <ProductInfo dispatch={dispatch} />
          </div>
        </div>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
