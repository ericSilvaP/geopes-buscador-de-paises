import geopes from '/src/assets/geopes-logo.png'
import './style.css'
import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'

function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-8 bg-[#868993] text-white">
        <div className="flex items-center gap-1">
          <img className="size-16" src={geopes} alt="logo GeoPes" />
          <p className="text-1xl">GeoPes</p>
        </div>
        <p className="text-1xl">
          <a href="#">Sobre</a>
        </p>
      </header>

      <div>
        <div>
          <FaSearch />
          <p>Pesquisar</p>
        </div>
        <FaSlidersH />
      </div>
    </>
  )
}

export default Home
