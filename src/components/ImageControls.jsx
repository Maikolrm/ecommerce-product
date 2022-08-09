import { useContext } from "react"

// context
import AppState from "../AppState"

// Button component
function Button(props) {
  // variable to define button dimensions
  const pixels = "50px"
  return (
    <button
      disabled={props.disabled}
      style={{ width: pixels, height: pixels, lineHeight: pixels }}
      onClick={() => props.dispatch({ type: "select-product-image", value: props.action === "prev" ? props.selectedImage - 1 : props.selectedImage + 1 })}
      className={`block rounded-full bg-white shadow-md text-dark-blue hover:text-pr-orange`}>
      <i className={"fa-solid " + (props.action === "prev" ? "fa-angle-left" : "fa-angle-right")}></i>
    </button>
  )
}

export default function ImageControls(props) {
  // app state
  const { product, selectedImage } = useContext(AppState)

  return (
    <div className={"absolute top-1/2 -translate-y-1/2 z-10 flex justify-between " + (props.styles)}>
      <Button action="prev" selectedImage={selectedImage} disabled={!selectedImage} dispatch={props.dispatch} />
      <Button action="next" selectedImage={selectedImage} disabled={(product.images.length - 1) === selectedImage} dispatch={props.dispatch} />
    </div>
  )
}
