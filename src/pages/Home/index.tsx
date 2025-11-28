import geopes from '/src/assets/geopes-logo.png'
import './style.css'
import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'

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

        <section className="w-full flex flex-col items-center gap-4 p-4">
          <div className="bg-white shadow-md w-5/6 h-2/3 p-6 rounded-sm  sm:p-8 md:w-4/6 md:p-10 lg:w-3/6">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  className="h-auto w-24 sm:w-28 md:w-32"
                  src="/src/assets/brasil.jpg"
                  alt="#"
                />
                <h2 className="text-2xl font-bold">País</h2>
              </div>
              <FaHeart className="text-2xl text-[#194167]" />
            </div>

            <div>
              <p className="font-bold">
                Capital: <span className="font-normal">Brasilia</span>
              </p>
              <p className="font-bold">
                Região: <span className="font-normal">Américas</span>
              </p>
              <p className="font-bold">
                População: <span className="font-normal">214,3 M</span>
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md w-5/6 h-2/3 p-6 rounded-sm  sm:p-8 md:w-4/6 md:p-10 lg:w-3/6">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  className="h-auto w-24 sm:w-28 md:w-32"
                  src="/src/assets/brasil.jpg"
                  alt="#"
                />
                <h2 className="text-2xl font-bold">País</h2>
              </div>
              <FaRegHeart className="text-2xl text-[#194167]" />
            </div>

            <div>
              <p className="font-bold">
                Capital: <span className="font-normal">Brasilia</span>
              </p>
              <p className="font-bold">
                Região: <span className="font-normal">Américas</span>
              </p>
              <p className="font-bold">
                População: <span className="font-normal">214,3 M</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
