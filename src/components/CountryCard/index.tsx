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
      className="bg-[#f0f0f0] shadow-md min-w-5/6 min-h-2/3 p-6 rounded-sm sm:p-8 md:min-w-4/6 md:p-10 lg:min-w-3/6 country-card"
      onClick={() => onCardClick(country.cca3)}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-2 max-w-fit md:flex-col pb-3">
          <img
            className="h-auto w-24 sm:w-28 md:w-32"
            src={country.flags.png}
            alt={country.flags.alt}
          />
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
