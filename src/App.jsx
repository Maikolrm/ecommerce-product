import { useEffect } from 'react'
import { useImmerReducer } from "use-immer"

// context
import AppState from "./AppState"
import AppDispatch from "./AppDispatch"

// components
import Header from "./components/Header"
import ProductSlide from "./components/ProductSlide"
import ProductInfo from "./components/ProductInfo"
import MobileNavigation from "./components/MobileNavigation"
import LightBox from "./components/LightBox"

function App() {
  // initial state
  const initialState = {
    product: {
      id: null,
      name: "",
      price: 0,
      description: "",
      images: [],
      discount: 0
    },
    selectedImage: 0, // product images array
    cart: {
      items: [],
      visible: false
    },
    mobileNav: false,
    showLightbox: false
  }
  
  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-product-information":
        draft.product = action.value
        break
      case "select-product-image":
        draft.selectedImage = action.value
        break
      case "show-mobile-nav":
        draft.mobileNav = action.value
        break
      case "add-cart-product":
        const exist = draft.cart.items.find(prev => prev.id == action.product.id)
        if (!exist) draft.cart.items.push(action.product)
        break
      case "delete-cart-product":
        draft.cart.items = draft.cart.items.filter(product => product.id != action.id)
        break
      case "show-cart":
        draft.cart.visible = action.value
        break
      case "show-lightbox":
        draft.showLightbox = action.value
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  // first mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json")
        const { product } = await response.json()
        dispatch({ type: "set-product-information", value: product })
      } catch(e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <div className="relative container min-h-screen m-auto">
          {state.showLightbox && <LightBox product={state.product} selectedImage={state.selectedImage} dispatch={dispatch} />}
          <Header dispatch={dispatch} />
          <main className="xl:flex lg:py-16">
            <ProductSlide product={state.product} selectedImage={state.selectedImage} dispatch={dispatch} />
            <ProductInfo product={state.product} dispatch={dispatch} />
          </main>
          {state.mobileNav && <MobileNavigation dispatch={dispatch} />}
        </div>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
