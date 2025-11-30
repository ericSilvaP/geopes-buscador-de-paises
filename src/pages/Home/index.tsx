import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer'
import './style.css'
import Card from '../../components/CountryCard'
import CountriesAPI from '../../api/countriesAPI'
import { useEffect, useState } from 'react'
import type { Country } from '../../types/country'
import FavoriteHandler from '../../favorite/favorite'
import { useSearchParams } from 'react-router-dom'

interface HomeProps {
  isFav?: boolean
}

function Home({ isFav }: HomeProps) {
  const api = new CountriesAPI()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const favHandler = new FavoriteHandler()
  const [params] = useSearchParams()
  const queryString = params.get('q')

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
      let data = queryString
        ? await searchCountries(queryString)
        : await api.getAll()
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
  })

  if (loading) return <p>Carregando...</p>

  return (
    <div className="flex flex-col item  s-center">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <SearchBar />
        <section className="w-full flex flex-col items-center gap-4 py-4 countries-container">
          {countries.length ? (
            countries.map((country) => <Card country={country} />)
          ) : isFav ? (
            <p className="text-3xl text-center font-bold">Não há favoritos</p>
          ) : (
            <p className="text-3xl text-center font-bold">
              Nenhum país para "{queryString}"
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
