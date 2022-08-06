export default function SlideControls(props) {
  return (
    <div className={props.styles}>
      {props.product.images.map((button, index) => (
        <button key={index} className="flex-1 border-2 border-transparent rounded-xl overflow-hidden">
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
