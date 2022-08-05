export default function Slide(props) {
  return (
    <section className="flex-1 lg:px-10">
      <div className="lg:rounded-xl overflow-hidden">
        <img className="block w-full" src="/image-product-1.jpg" alt="" />
      </div>
      <div className="gap-8 mt-8 hidden lg:flex">
        {props.images.map((button, index) => (
          <button key={index} className="flex-1 border-2 border-transparent rounded-xl overflow-hidden">
            <img className="w-full h-full object-cover" src={`/image-product-${index + 1}-thumbnail.jpg`} alt="product image" />
          </button>
        ))}
      </div>
    </section>
  )
}
