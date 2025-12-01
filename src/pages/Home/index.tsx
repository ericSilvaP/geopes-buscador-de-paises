import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer'
import './style.css'
import Card from '../../components/CountryCard'
import CountriesAPI from '../../api/countriesAPI'
import { useEffect, useState } from 'react'
import type { Country } from '../../types/country'
import FavoriteHandler from '../../favorite/favorite'
import { useLocation, useSearchParams } from 'react-router-dom'

interface HomeProps {
  isFav?: boolean
}

type FilterOptions = {
  regions?: string
}

function Home({ isFav }: HomeProps) {
  const api = new CountriesAPI()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const favHandler = new FavoriteHandler()
  const [params] = useSearchParams()
  const searchQueryString = params.get('q')
  const location = useLocation()
  const filterOptions: FilterOptions = {
    regions: params.get('regions') ?? '',
  }

  async function filterCountries(q: FilterOptions) {
    if (!q.regions) return []

    const regions = q.regions.split(',')
    const promises = regions.map((r) => api.getByRegion(r))
    const results = await Promise.all(promises)

    return results.flat()
  }

  async function searchCountries(q: string) {
    try {
      return await api.getByName(q)
    } catch (e) {
      try {
        return await api.getByTranslation(q)
      } catch (e) {
        return []
      }
    }
  }

  async function loadCountries() {
    try {
      const filteredCountries = await filterCountries(filterOptions)
      let data = searchQueryString
        ? await searchCountries(searchQueryString)
        : await api.getAll()

      if (filteredCountries.length) {
        data = filteredCountries
      }

      if (isFav) {
        data = data.filter((c) => favHandler.isFavorite(c.cca3))
      }
      setCountries(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCountries()
  }, [location])

  if (loading) return <p>Carregando...</p>

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center gap-3">
        <SearchBar />
        <h2 className="text-3xl font-bold text-[#194167]">
          Países{isFav && ' - Favoritos'}
        </h2>
        <section className="w-full flex flex-col items-center gap-5 m-3 countries-container">
          {countries.length ? (
            countries
              .sort((c1, c2) => c2.population - c1.population)
              .map((country) => <Card country={country} />)
          ) : isFav ? (
            <p className="text-3xl text-center font-bold">Não há favoritos</p>
          ) : (
            <p className="text-3xl text-center font-bold">
              Nenhum país para "{searchQueryString}"
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
