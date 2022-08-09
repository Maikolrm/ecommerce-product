import { useContext } from "react"

// context
import AppState from "../AppState"

export default function ImageControls(props) {
  // app state
  const { product, selectedImage } = useContext(AppState)

  return (
    <div className={"absolute top-1/2 -translate-y-1/2 z-10 flex " + (props.styles)}>
      <button disabled={!selectedImage} onClick={() => props.dispatch({ type: "select-product-image", value: selectedImage - 1})} className="w-10 h-10 rounded-full bg-white shadow-md text-dark-blue leading-10 hover:text-pr-orange">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button disabled={(product.images.length - 1 ) === selectedImage} onClick={() => props.dispatch({ type: "select-product-image", value: selectedImage + 1})} className="ml-auto w-10 h-10 rounded-full bg-white shadow-md text-dark-blue leading-10 hover:text-pr-orange">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  )
}
