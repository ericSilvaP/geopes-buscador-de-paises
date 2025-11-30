import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer'
import './style.css'
import Card from '../../components/CountryCard'
import CountriesAPI from '../../api/countriesAPI'
import { useEffect, useState } from 'react'
import type { Country } from '../../types/country'
import FavoriteHandler from '../../favorite/favorite'

interface HomeProps {
  isFav?: boolean
}

function Home({ isFav }: HomeProps) {
  const api = new CountriesAPI()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const favHandler = new FavoriteHandler()

  async function loadCountries() {
    try {
      let data = await api.getAll()
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
          ) : (
            <p className="text-3xl text-center font-bold">Não há favoritos</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
