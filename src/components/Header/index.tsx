import geopes from '../../assets/geopes-logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 bg-[#868993] text-white">
      <Link to="/">
        <div className="flex items-center gap-1">
          <img className="size-16" src={geopes} alt="logo GeoPes" />
          <p className="text-1xl">GeoPes</p>
        </div>
      </Link>
      <p className="text-1xl flex gap-6">
        <Link to="/favorites" className="hover:opacity-80 transition-opacity">
          Favoritos
        </Link>
        <Link to="/about" className="hover:opacity-80 transition-opacity">
          Sobre{' '}
        </Link>
      </p>
    </header>
  )
}

export default Header
