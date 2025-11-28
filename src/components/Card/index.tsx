import { FaHeart } from 'react-icons/fa'

function Card() {
  return (
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
  )
}

export default Card
