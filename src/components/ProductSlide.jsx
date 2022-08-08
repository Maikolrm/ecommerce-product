// components
import SlideImage from "./SlideImage"
import SlideControls from "./SlideControls"

export default function ProductSlide(props) {
  return (
    <section className="flex-1 lg:px-10">
      <div className="relative lg:rounded-xl overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center px-4 w-full lg:hidden">
          <button disabled={!props.selectedImage} onClick={() => props.dispatch({ type: "select-product-image", value: props.selectedImage - 1})} className="w-10 h-10 rounded-full bg-white shadow-md text-dark-blue leading-10 hover:text-pr-orange">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button disabled={(props.product.images.length - 1 ) === props.selectedImage} onClick={() => props.dispatch({ type: "select-product-image", value: props.selectedImage + 1})} className="ml-auto w-10 h-10 rounded-full bg-white shadow-md text-dark-blue leading-10 hover:text-pr-orange">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <SlideImage styles="xl:rounded-xl overflow-hidden" />
      </div>
      <SlideControls product={props.product} styles="gap-6 grid-cols-4 mt-6 hidden xl:grid" />
    </section>
  )
}
