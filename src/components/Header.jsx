import { useContext } from "react"

// context
import AppState from "../AppState"
import AppDispatch from "../AppDispatch"

// components
import ShoppingCart from "./ShoppingCart"

export default function Header(props) {
  // app dispatch
  const { cart } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return (
    <header className="relative flex items-center p-4 border-b border-gray-200">
      <ShoppingCart visible={cart.visible} items={cart.items} dispatch={appDispatch} />
      <button className="w-10 h-10 mr-2 bg-light-blue rounded-md text-base text-vark-blue leading-10 lg:hidden">
        <i className="fa-solid fa-bars"></i>
      </button>
      <a href="#">
        <img src="/logo.svg" alt="sneakers" />
      </a>
      <nav className="flex gap-4 pl-20 hidden">
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Collections</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Men</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Women</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">About</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Contact</a>
      </nav>
      <div className="flex items-center ml-auto">
        <button onClick={() => appDispatch({ type: "show-cart", value: !cart.visible })} className="w-10 h-10 mr-4 text-base lg:text-xl text-center text-dark-blue leading-10 hover:text-vark-blue">
          <i className="fa-solid fa-shopping-cart"></i>
        </button>
        <button className="inline-block w-10 h-10 lg:w-14 lg:h-14 border-2 border-transparent rounded-full outline-none overflow-hidden hover:border-pr-orange focus:border-pr-orange">
          <img src="/image-avatar.png" alt="hernandez maikol" />
        </button>
      </div>
    </header>
  )
}
