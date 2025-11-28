import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer'
import './style.css'
import Card from '../../components/CountryCard'
import CountriesAPI from '../../api/countriesAPI'
import { useEffect, useState } from 'react'
import type { Country } from '../../types/country'

function Home() {
  const api = new CountriesAPI()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  async function loadCountries() {
    try {
      const data = await api.getAll()
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
    <div className="flex flex-col items-center">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <SearchBar />
        <section className="w-full flex flex-col items-center gap-4 py-4 countries-container">
          {countries.map((country) => (
            <Card country={country} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
