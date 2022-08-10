// components
import SlideImage from "./SlideImage"
import SlideControls from "./SlideControls"
import ImageControls from "./ImageControls"

export default function Lightbox(props) {
  return (
    <div className="absolute z-[100] inset-0 flex items-center justify-center px-10 bg-black/80">
      <div className="max-w-lg">
        <div className="flex">
          <button onClick={() => props.dispatch({ type: "show-lightbox", value: false })} className="w-10 h-10 ml-auto text-2xl text-white text-right leading-10">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="relative mt-2">
          <ImageControls translate={true} dispatch={props.dispatch} />
          <SlideImage product={props.product} styles="rounded-xl overflow-hidden" dispatch={props.dispatch} />
        </div>
        <SlideControls product={props.product} styles="flex gap-6 pt-6 md:px-6" dispatch={props.dipatch} />
      </div>
    </div>
  )
}
