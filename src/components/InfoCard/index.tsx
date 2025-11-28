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
    <div>
      <div>
        <p>{typeInformation}</p>
        {iconMap[typeIcon]}
      </div>

      <p>{description}</p>
    </div>
  )
}

export default InfoCard
