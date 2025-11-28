// import { FaHeart } from 'react-icons/fa'
import InfoCard from '../InfoCard'

function DetailsCard() {
  return (
    <div className="bg-white shadow-md w-full max-w-xl p-6 rounded-sm sm:p-8">
      <h1 className="text-3xl font-bold">País</h1>
      <img
        className="w-32 sm:w-40 md:w-48 lg:w-56 object-cover rounded-sm"
        src="/src/assets/brasil.jpg"
        alt="#"
      />
      <p>Nome completo do país</p>

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

      <InfoCard
        typeInformation="Português"
        typeIcon="Idioma"
        description="Português-Tupy"
      />
    </div>
  )
}

export default DetailsCard
