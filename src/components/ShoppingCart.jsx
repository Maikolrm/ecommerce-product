import { useEffect } from "react"

export default function ShoppingCart(props) {
  // handle keyup
  function handleKeyup(e) {
    if (e.keyCode === 27) {
      props.dispatch({ type: "show-cart", value: false })
    }
  }

  // calculate price
  function calculatePrice(product) {
    return product.price - (product.price * (product.discount / 100))
  }

  // first mount
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup)
    return () => document.removeEventListener("keyup", handleKeyup)
  }, [])

  return (
    <div className={"absolute top-[110%] right-[1%] w-[98%] z-[100] max-w-lg bg-white rounded-xl shadow-xl " + (props.visible ? "" : "hidden")}>
      <h2 className="p-6 border-b border-gray-200 font-semibold text-base text-vark-blue leading-none">Cart</h2>
      <div className={props.items.length ? "" : "h-64"}>
        {Boolean(props.items.length) ? (
          <div className="p-6">
            {props.items.map(product => (
              <div key={product.id} className="flex items-center">
                <div className="w-16 rounded-md overflow-hidden">
                  <img className="w-full h-full object-cover" src={product.images[0]} alt={product.name} />
                </div>
                <div className="flex-1 pl-4 text-base text-dark-blue">
                  <h2 className="leading-none truncate">{product.name}</h2>
                  <p className="mt-3 leading-none">${calculatePrice(product).toFixed(2)} x {product.quantity} <span className="ml-1 font-bold text-vark-blue">${(calculatePrice(product) * product.quantity).toFixed(2)}</span></p>
                </div>
                <button onClick={() => props.dispatch({ type: "delete-cart-product", id: product.id })} className="w-10 h-10 text-base text-right text-gr-blue leading-10 outline-none hover:text-red-500 focus:text-red-500">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
            <div className="mt-6">
              <button className="block w-full bg-pr-orange rounded-lg font-semibold text-base text-white leading-[3.5rem]">Checkout</button>
            </div>
          </div>
        ) : (
          <h3 className="relative text-center top-1/2 -translate-y-1/2 font-semibold text-dark-blue leading-none">Your cart is empty.</h3>
        )}
      </div>
    </div>
  )
}
