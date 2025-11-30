import { IoArrowBack } from 'react-icons/io5'
import InfoCard from '../InfoCard'
import type { Country } from '../../types/country'
import FavButton from '../FavoriteButton'
import formatNumber from '../../utils/formatNumber'
import { useNavigate } from 'react-router-dom'
import CountriesAPI from '../../api/countriesAPI'
import { useEffect, useState } from 'react'
import './style.css'

interface DetailsProps {
  country?: Country
}

function DetailsCard({ country }: DetailsProps) {
  const navigate = useNavigate()
  const api = new CountriesAPI()
  const [countryBorders, setCountryBorders] = useState<string[]>([])

  async function getCountriesAlpha(countriesCodes?: string[]) {
    if (!countriesCodes) return []
    return (await api.getByAlphaCodes(countriesCodes)).map(
      (c) => c.translations.por.common ?? ''
    )
  }

  useEffect(() => {
    async function loadBorders() {
      if (country?.borders) {
        const borders = await getCountriesAlpha(country.borders)
        setCountryBorders(borders)
      } else {
        setCountryBorders([])
      }
    }

    loadBorders()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 bg-white shadow-md w-full max-w-xl p-6 rounded-sm sm:p-8">
      <div className="w-full text-[#194167] flex flex-row justify-between">
        <IoArrowBack
          className="text-xl sm:text-2xl md:text-3xl cursor-pointer"
          onClick={() => navigate('/')}
        />
        <FavButton code={country?.cca3 ?? ''} />
      </div>

      <h1 className="text-3xl font-bold">
        {country?.translations.por.common ?? 'Nome não disponível'}
      </h1>
      <div className="flex flex-col gap-3 text-[#194167] font-bold items-center">
        <img
          className="w-32 sm:w-40 md:w-48 lg:w-56 object-cover rounded-sm"
          src={country?.flags.png}
          alt="#"
        />
        <p>{country?.name?.official ?? 'Nome oficial não disponível'}</p>
      </div>

      <div className="info-container gap-2 sm:flex-row sm:gap-8">
        <p className="font-bold">
          Capital: <span className="font-normal">{country?.capital}</span>
        </p>
        <p className="font-bold">
          Continente: <span className="font-normal">{country?.region}</span>
        </p>
        <p className="font-bold">
          Sub-Região: <span className="font-normal">{country?.subregion}</span>
        </p>
        <p className="font-bold">
          População:{' '}
          <span className="font-normal">
            {formatNumber(country?.population ?? 0)}
          </span>
        </p>
      </div>

      <InfoCard
        nameInformation="Idioma"
        typeIcon="language"
        description={
          country?.languages
            ? Object.values(country?.languages ?? {}).join(', ')
            : 'Nenhum idioma'
        }
      />

      <InfoCard
        nameInformation="Moeda(s)"
        typeIcon="currency"
        description={
          country?.currencies
            ? Object.values(country?.currencies ?? {})
                .map((e) => `${e.name} - ${e.symbol}`)
                .join(', ')
            : 'Nenhuma moeda'
        }
      />

      <InfoCard
        nameInformation="Fronteira(s)"
        typeIcon="border"
        description={`Países: ${
          countryBorders.join(', ') ?? 'País sem fronteiras'
        }
        `}
      />
    </div>
  )
}

export default DetailsCard
