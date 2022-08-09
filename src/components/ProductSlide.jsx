// components
import SlideImage from "./SlideImage"
import SlideControls from "./SlideControls"
import ImageControls from "./ImageControls"

export default function ProductSlide(props) {
  return (
    <section className="flex-1 lg:px-10">
      <div className="relative lg:rounded-xl overflow-hidden">
        <button
          onClick={() => props.dispatch({ type: "show-lightbox", value: true })}
          className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-black/20 text-white rounded-md text-base leadging-10">
          <i className="fa-solid fa-expand"></i>
        </button>
        <ImageControls styles="left-0 w-full px-4 lg:hidden" dispatch={props.dispatch} />
        <SlideImage styles="overflow-hidden xl:rounded-xl" dispatch={props.dispatch} />
      </div>
      <SlideControls product={props.product} styles="gap-6 grid-cols-4 mt-6 hidden lg:grid" />
    </section>
  )
}
