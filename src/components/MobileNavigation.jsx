export default function MobileNavigation(props) {
  return (
    <div className="absolute inset-0 z-[500] bg-black/70 lg:hidden">
      <div className="w-2/3 h-full p-6 pt-4 bg-white border-l border-light-blue sm:max-w-sm">
        <div>
          <button onClick={() => props.dispatch({ type: "show-mobile-nav", value: false })} className="w-10 h-10 text-xl text-left text-dark-blue leading-10">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <nav className="mt-10 font-bold text-lg text-vark-blue">
          <a href="#" className="block my-4 text-vark-blue">Collectons</a>
          <a href="#" className="block my-4 text-vark-blue">Men</a>
          <a href="#" className="block my-4 text-vark-blue">Women</a>
          <a href="#" className="block my-4 text-vark-blue">About</a>
          <a href="#" className="block my-4 text-vark-blue">Contact</a>
        </nav>
      </div>
    </div>
  )
}
