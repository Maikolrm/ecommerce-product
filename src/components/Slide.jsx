export default function Slide(props) {
  // local state
  const buttons = [1, 2, 3, 4]
  return (
    <section className="flex-1 px-10">
      <div className="rounded-xl overflow-hidden">
        <img className="block w-full" src="/image-product-1.jpg" alt="" />
      </div>
      <div className="flex gap-8 mt-8">
        {buttons.map((button, index) => (
          <button key={index} className="flex-1 border-2 border-transparent rounded-xl overflow-hidden">
            <img className="w-full h-full object-cover" src={`/image-product-${index + 1}-thumbnail.jpg`} alt="product image" />
          </button>
        ))}
      </div>
    </section>
  )
}
