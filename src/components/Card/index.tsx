import { FaHeart } from 'react-icons/fa'
import './style.css'

function Card() {
  return (
    <div className="bg-white shadow-md min-w-5/6 min-h-2/3 p-6 rounded-sm sm:p-8 md:min-w-4/6 md:p-10 lg:min-w-3/6 country-card">
      <div className="flex justify-between items-start">
        <div className="flex gap-2 max-w-fit md:flex-col pb-3">
          <img
            className="h-auto w-24 sm:w-28 md:w-32"
            src="/src/assets/brasil.jpg"
            alt="#"
          />
          <h2 className="text-2xl font-bold max-w-2/3 md:max-w-full">
            República Democárica do Congo
          </h2>
          <FaHeart className="text-2xl text-[#194167]" />
        </div>
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
  )
}

export default Card
