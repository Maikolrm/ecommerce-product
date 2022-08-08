import { useContext } from "react"

// context
import AppState from "../AppState"
import AppDispatch from "../AppDispatch"

export default function SlideControls(props) {
  // app state
  const { selectedImage } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)
  return (
    <div className={props.styles}>
      {props.product.images.map((button, index) => (
        <button
          onClick={() => appDispatch({ type: "select-product-image", value: index })}
          key={index}
          className={"flex-1 border-2 border-transparent rounded-xl outline-none overflow-hidden hover:border-pr-orange focus:border-pr-orange group " + (index === selectedImage ? "border-pr-orange" : "")}>
          <img
            className={"w-full h-full object-cover group-hover:opacity-50 group-focus:opacity-50 " + (index === selectedImage ? "opacity-50" : "")}
            src={`/image-product-${index + 1}-thumbnail.jpg`}
            alt={props.product.name}
          />
        </button>
      ))}
    </div>
  )
}
