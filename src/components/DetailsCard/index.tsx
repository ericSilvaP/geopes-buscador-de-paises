import { FaHeart } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import InfoCard from '../InfoCard'

function DetailsCard() {
  return (
    <div className="flex flex-col items-center gap-4 bg-white shadow-md w-full max-w-xl p-6 rounded-sm sm:p-8">
      <div className="w-full text-[#194167] flex flex-row justify-between">
        <IoArrowBack className="text-xl sm:text-2xl md:text-3xl cursor-pointer" />
        <FaHeart className="text-xl sm:text-2xl md:text-3xl cursor-pointer" />
      </div>

      <h1 className="text-3xl font-bold">País</h1>
      <div className="flex flex-col gap-3 text-[#194167] font-bold items-center">
        <img
          className="w-32 sm:w-40 md:w-48 lg:w-56 object-cover rounded-sm"
          src="/src/assets/brasil.jpg"
          alt="#"
        />
        <p>Nome completo do país</p>
      </div>

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
        nameInformation="Idioma"
        typeIcon="language"
        description="Português-Tupy"
      />

      <InfoCard
        nameInformation="Moeda(s)"
        typeIcon="currency"
        description="Real(BRL)"
      />

      <InfoCard
        nameInformation="Fronteira(s)"
        typeIcon="border"
        description="Países: Guiana Francesa - Suriname - Guiana - Venezuela - Colômbia - Peru - Bolívia - Paraguai - Argentina - Uruguai"
      />
    </div>
  )
}

export default DetailsCard
