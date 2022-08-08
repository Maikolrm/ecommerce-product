import { useContext } from "react"

// context
import AppDispatch from "../AppDispatch"

export default function SlideControls(props) {
  // app dispatch
  const appDispatch = useContext(AppDispatch)
  return (
    <div className={props.styles}>
      {props.product.images.map((button, index) => (
        <button onClick={() => appDispatch({ type: "select-product-image", value: index })} key={index} className="flex-1 border-2 border-transparent rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={`/image-product-${index + 1}-thumbnail.jpg`}
            alt={props.product.name}
          />
        </button>
      ))}
    </div>
  )
}
