export default function ShoppingCart() {
  return (
    <div className="absolute top-[110%] right-[1%] w-[98%] max-w-lg bg-white rounded-xl shadow-xl hidden">
      <h2 className="p-6 border-b border-gr-blue font-semibold text-base text-vark-blue leading-none">Cart</h2>
      <div className="h-64">
        <h3 className="relative text-center top-1/2 -translate-y-1/2 font-semibold text-dark-blue leading-none">Your cart is empty.</h3>
      </div>
    </div>
  )
}
