export default function Header(props) {
  return (
    <header className="flex items-center py-8 border-b border-gray-200">
      <a href="#">
        <img src="/logo.svg" alt="sneakers" />
      </a>
      <nav>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex ml-auto">
        <button>c</button>
        <button className="inline-block w-16 h-16 rounded-full overflow-hidden">
          <img src="/image-avatar.png" alt="hernandez maikol" />
        </button>
      </div>
    </header>
  )
}
