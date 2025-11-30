import './style.css'
import type { Country } from '../../types/country'
import formatNumber from '../../utils/formatNumber'
import FavButton from '../FavoriteButton'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  country: Country
}

function Card({ country }: CardProps) {
  const navigate = useNavigate()

  function onCardClick(code: string) {
    navigate(`/details?code=${code}`)
  }

  return (
    <div
      className="bg-[#f0f0f0] shadow-md w-[20rem] p-4 rounded-sm country-card
                flex flex-col gap-4 h-full min-h-72"
      onClick={() => onCardClick(country.cca3)}
    >
      <div className="flex flex-col gap-3 w-full">
        <div className="w-full h-32 sm:h-40 md:h-48 bg-[#f0f0f0] overflow-hidden rounded-xs">
          <img
            className="max-w-full max-h-full object-contain"
            src={country.flags.png}
            alt={country.flags.alt}
            onClick={() => onCardClick(country.cca3)}
          />
        </div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold max-w-2/3 md:max-w-full">
            {country.translations.por.common ?? 'Nome não disponível'}
          </h2>
          <FavButton code={country.cca3} />
        </div>
      </div>

      <div>
        <p className="font-bold">
          Capital:{' '}
          <span className="font-normal">
            {country.capital[0] ?? 'Capital não disponível'}
          </span>
        </p>
        <p className="font-bold">
          Continente:{' '}
          <span className="font-normal">
            {country.region ?? 'Região não disponível'}
          </span>
        </p>
        <p className="font-bold">
          População:{' '}
          <span className="font-normal">
            {formatNumber(country.population ?? 0)}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card
