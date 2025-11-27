import geopes from '/src/assets/geopes-logo.png'
import './style.css'
import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

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

      <main className="flex flex-col items-center">
        <div className="bg-[#868993] text-[#194167] flex items-center justify-between px-2 h-8 w-5/6 rounded-sm m-4">
          <div className="flex items-center gap-2">
            <FaSearch />
            <p>Pesquisar</p>
          </div>
          <FaSlidersH />
        </div>

        <section>
          <div>
            <div>
              <img
                className="h-auto w-24"
                src="/src/assets/brasil.jpg"
                alt="#"
              />
              <h2>País</h2>
            </div>

            <FaHeart />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
