import { FaGlobe, FaDollarSign, FaFlag } from 'react-icons/fa'
import React from 'react'

type TypeMiniCard = 'language' | 'currency' | 'border'

interface MiniCardProps {
  description: string
  typeIcon: TypeMiniCard
  nameInformation: string
}

const iconMap: Record<TypeMiniCard, React.ReactNode> = {
  language: <FaGlobe />,
  currency: <FaDollarSign />,
  border: <FaFlag />,
}

function InfoCard({ typeIcon, nameInformation, description }: MiniCardProps) {
  return (
    <div className="w-full flex flex-col gap-1 bg-[#C0E0FF] p-4  rounded-sm text-[#194167]">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">{nameInformation}</p>
        <p className="text-xl sm:text-2xl ">{iconMap[typeIcon]}</p>
      </div>

      <p>{description}</p>
    </div>
  )
}

export default InfoCard
