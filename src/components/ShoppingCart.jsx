import { useEffect } from "react"

export default function ShoppingCart(props) {
  // handle keyup
  function handleKeyup(e) {
    if (e.keyCode === 27) {
      props.dispatch({ type: "show-cart", value: false })
    }
  }

  // first mount
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup)
    return () => document.removeEventListener("keyup", handleKeyup)
  }, [])

  return (
    <div className={"absolute top-[110%] right-[1%] w-[98%] max-w-lg bg-white rounded-xl shadow-xl " + (props.visible ? "" : "hidden")}>
      <h2 className="p-6 border-b border-gr-blue font-semibold text-base text-vark-blue leading-none">Cart</h2>
      <div className={props.items.length ? "" : "h-64"}>
        {Boolean(props.items.length) ? (
          <div className="p-6">
            {props.items.map(item => (
              <div key={item.id} className="flex items-center">
                <div className="w-16 rounded-md overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                </div>
                <div className="flex-1 pl-4 text-base text-dark-blue">
                  <h2 className="leading-none truncate">{item.name}</h2>
                  <p className="mt-3 leading-none">${item.price.toFixed(2)} x {item.count} <span className="ml-1 font-bold text-vark-blue">${(item.price * item.count).toFixed(2)}</span></p>
                </div>
                <button className="w-10 h-10 text-base text-right text-gr-blue leading-10">
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
