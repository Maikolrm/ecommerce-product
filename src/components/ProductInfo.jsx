import { useState } from "react"

export default function ProductInfo(props) {
  // local state
  const [quantity, setQuantity] = useState(0)

  // handle submit
  function handleSubmit(e) {
    e.preventDefault()
    props.dispatch({ type: "add-cart-product", product: { ...props.product, quantity: quantity } })
  }

  return (
    <section className="flex-1 flex flex-col justify-center p-6 bg-white lg:px-10">
      <h2 className="font-semibold text-sm text-pr-orange uppercase">sneaker company</h2>
      <h1 className="mt-5 font-bold text-vark-blue text-4xl">{props.product.name}</h1>
      <p className="mt-10 text-base text-gr-blue leading-6">
        {props.product.description}
      </p>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center font-bold text-2xl leading-none">
            <span>${(props.product.price - (props.product.price * (props.product.discount / 100)))}</span>
            <span className="inline-block ml-4 p-1 bg-pr-pale-orange rounded-sm text-base text-pr-orange leading-none">
              {props.product.discount}%
            </span>
          </h2>
          <h4 className="font-bold text-sm text-gr-blue line-through">{props.product.price}</h4>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 lg:flex">
          <div className="flex bg-light-blue rounded-md overflow-hidden">
            <button disabled={!quantity ? "disabled" : ""} className="w-12 h-12 text-center text-pr-orange leading-10">
              <i className="fa-solid fa-minus"></i>
            </button>
            <input onChange={e => setQuantity(parseInt(e.target.value))} value={quantity ? quantity : ""} className="flex-1 font-bold text-xl text-center text-vart-blue bg-transparent" type="number" name="count" id="count" placeholder="0" />
            <button className="w-12 h-12 text-center text-pr-orange leading-10">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button disabled={!quantity ? "disabled" : ""} className="block w-full mt-4 font-semibold text-base text-white text-center rounded-md bg-pr-orange shadow-xl leading-[50px] hover:opacity-70 lg:flex-1 lg:mt-0 lg:ml-4">
            <i className="inline-block mr-2 fa-solid fa-shopping-cart"></i> Add to cart
          </button>
        </form>
      </div>
    </section>
  )
}
