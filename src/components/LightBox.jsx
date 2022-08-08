// components
import SlideImage from "./SlideImage"
import SlideControls from "./SlideControls"

export default function Lightbox(props) {
  return (
    <div className="absolute z-10 inset-0 flex items-center justify-center px-10 bg-black/80">
      <div className="max-w-lg">
        <div className="flex">
          <button className="w-10 h-10 ml-auto text-xl text-white leading-10">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="mt-2 rounded-xl overflow-hidden">
          <SlideImage product={props.product} styles="" dispatch={props.dispatch} />
        </div>
        <div>
          <SlideControls product={props.product} styles="flex gap-6 pt-6" dispatch={props.dipatch} />
        </div>
      </div>
    </div>
  )
}
