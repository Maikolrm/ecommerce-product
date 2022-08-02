export default function ShoppingCart(props) {
  return (
    <section className="flex-1 flex flex-col justify-center p-6 lg:px-10">
      <h2 className="font-semibold text-sm text-pr-orange uppercase">sneaker company</h2>
      <h1 className="mt-5 font-bold text-vark-blue text-4xl">Fall Limited Edition Sneakers</h1>
      <p className="mt-10 text-base text-gr-blue leading-6">Adipisicing eius veritatis repellendus mollitia in Sunt beatae consectetur facilis tempora et impedit alias Pariatur eveniet ullam vero ipsum et.</p>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold leading-none">$125.00 <span className="text-pr-pale-oraneg">50%</span></h2>
          <h4>250.00</h4>
        </div>
        <form className="mt-10 lg:flex">
          <div className="flex bg-light-blue rounded-md overflow-hidden">
            <button className="w-12 h-12 text-center text-pr-orange leading-10">
              <i className="fa-solid fa-minus"></i>
            </button>
            <input className="flex-1 text-center bg-transparent" type="number" name="count" id="count" value="0" />
            <button className="w-12 h-12 text-center text-pr-orange leading-10">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button className="block w-full mt-4 lg:flex-1 lg:mt-0 lg:ml-4 font-semibold text-white text-center rounded-md bg-pr-orange shadow-xl leading-[50px]">
           <i className="fa-solid fa-shopping-cart"></i> Add to cart
          </button>
        </form>
      </div>
    </section>
  )
}
