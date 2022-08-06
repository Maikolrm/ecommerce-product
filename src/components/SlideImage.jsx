import { useContext } from "react"

// context
import AppState from "../AppState"

export default function SlideImage(props) {
  // app state
  const { product, selectedImage } = useContext(AppState)

  return (
    <div className={props.styles}>
      <img className="block w-full" src={product.images[selectedImage]} alt={product.name} />
    </div>
  )
}
