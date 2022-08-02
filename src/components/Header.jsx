export default function Header(props) {
  return (
    <header className="flex items-center border-b border-gray-200">
      <a href="#">
        <img src="/logo.svg" alt="sneakers" />
      </a>
      <nav className="flex gap-4 pl-20">
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Collections</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Men</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Women</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">About</a>
        <a href="#" className="inline-block py-12 border-b-4 border-transparent text-dark-blue hover:border-pr-orange hover:text-vark-blue">Contact</a>
      </nav>
      <div className="flex items-center ml-auto">
        <button className="w-10 h-10 mr-10 text-xl text-center text-dark-blue leading-10 hover:text-vark-blue">
          <i className="fa-solid fa-shopping-cart"></i>
        </button>
        <button className="inline-block w-14 h-14 border-2 border-transparent rounded-full outline-none overflow-hidden hover:border-pr-orange focus:border-pr-orange">
          <img src="/image-avatar.png" alt="hernandez maikol" />
        </button>
      </div>
    </header>
  )
}
