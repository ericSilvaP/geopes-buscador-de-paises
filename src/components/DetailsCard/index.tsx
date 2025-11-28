// import { FaHeart } from 'react-icons/fa'

function DetailsCard() {
  return (
    <div className="bg-white shadow-md w-full max-w-xl p-6 rounded-sm sm:p-8">
      <h1 className="text-3xl font-bold">País</h1>
      <img
        className="w-32 sm:w-40 md:w-48 lg:w-56 object-cover rounded-sm"
        src="/src/assets/brasil.jpg"
        alt="#"
      />
      <p>Nome Completo do País</p>

      <div className="flex gap-8">
        <p className="font-bold">
          Capital <span className="font-normal">Brasilia</span>
        </p>
        <p className="font-bold">
          Região <span className="font-normal">Américas</span>
        </p>
        <p className="font-bold">
          População <span className="font-normal">214,3 M</span>
        </p>
      </div>
    </div>
  )
}

export default DetailsCard
