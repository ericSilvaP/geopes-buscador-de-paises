import { FaGlobe, FaDollarSign, FaFlag } from 'react-icons/fa'
import React from 'react'

type TypeMiniCard = 'Idioma' | 'Moeda' | 'Fronteira'

interface MiniCardProps {
  description: string
  typeIcon: TypeMiniCard
  typeInformation: string
}

const iconMap: Record<TypeMiniCard, React.ReactNode> = {
  Idioma: <FaGlobe />,
  Moeda: <FaDollarSign />,
  Fronteira: <FaFlag />,
}

function InfoCard({ typeIcon, typeInformation, description }: MiniCardProps) {
  return (
    <div className="flex flex-col gap-1 bg-[#C0E0FF] p-4  rounded-sm text-[#194167]">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">{typeInformation}</p>
        <p className="text-xl sm:text-2xl ">{iconMap[typeIcon]}</p>
      </div>

      <p>{description}</p>
    </div>
  )
}

export default InfoCard
