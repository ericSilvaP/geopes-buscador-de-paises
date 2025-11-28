import geopes from '/src/assets/geopes-logo.png'

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 bg-[#868993] text-white">
      <div className="flex items-center gap-1">
        <img className="size-16" src={geopes} alt="logo GeoPes" />
        <p className="text-1xl">GeoPes</p>
      </div>
      <p className="text-1xl">
        <a href="#">Sobre</a>
      </p>
    </header>
  )
}

export default Header
