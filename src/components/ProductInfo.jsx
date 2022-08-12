import { useState } from "react"

export default function ProductInfo(props) {
  // local state
  const [quantity, setQuantity] = useState(0)

  // capitalize product name
  function capitalizeProductName(name) {
    return name
      .toLowerCase()
      .split(" ")
      .map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ")
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault()
    props.dispatch({ type: "add-cart-product", product: { ...props.product, quantity: quantity } })
  }

  // handle quantity
  function handleQuantity(e, action) {
    e.preventDefault()
    if (action === "increase") {
      setQuantity(prev => prev + 1)
    } else {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <section className="flex-1 flex flex-col justify-center p-6 bg-white lg:px-10">
      <h2 className="font-semibold text-sm text-pr-orange uppercase">sneaker company</h2>
      <h1 className="mt-5 font-bold text-vark-blue text-4xl xl:text-6xl">{capitalizeProductName(props.product.name)}</h1>
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
          <h3 className="font-bold text-sm text-gr-blue line-through">{props.product.price}</h3>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 lg:flex">
          <div className="flex bg-light-blue rounded-lg overflow-hidden">
            <button onClick={e => handleQuantity(e, "decrease")} className="w-[60px] h-[60px] text-center text-pr-orange leading-[60px]">
              <i className="fa-solid fa-minus"></i>
            </button>
            <input
              onChange={e => setQuantity(parseInt(e.target.value))}
              value={quantity ? quantity : ""}
              className="flex-1 font-bold text-xl text-center text-vart-blue bg-transparent leading-[60px] xl:w-24"
              type="text"
              name="quantity"
              id="quantity"
              placeholder="0"
            />
            <button onClick={e => handleQuantity(e, "increase")} className="w-[60px] h-[60px] text-center text-pr-orange leading-[60px]">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="flex-1 mt-4 lg:mt-0 lg:pl-4">
            <button disabled={!quantity ? "disabled" : ""} className="block w-full font-semibold text-base text-white text-center rounded-xl bg-pr-orange shadow-xl leading-[60px] hover:opacity-70">
              <i className="inline-block mr-2 fa-solid fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
