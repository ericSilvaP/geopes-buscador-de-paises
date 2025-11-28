import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import DetailsCard from '../../components/DetailsCard'
import Footer from '../../components/Footer'
import './style.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Country } from '../../types/country'
import CountriesAPI from '../../api/countriesAPI'
import { IoArrowBack } from 'react-icons/io5'

function DetailsPage() {
  const [country, setCountry] = useState<Country>()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const api = new CountriesAPI()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  async function loadCountry(code: string) {
    try {
      const country = await api.getByAlphaCode(code, ['name'])
      setCountry(country)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCountry(code ?? '')
  })

  if (!code)
    return (
      <div className="flex flex-col gap-10 items-center pt-20 text-center text-3xl m-auto">
        <p>Informe um país!</p>
        <IoArrowBack
          className="text-xl sm:text-2xl md:text-3xl cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
    )

  if (loading) return <p>Carregando...</p>

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <SearchBar />
        <section className="w-full flex flex-col items-center gap-4 p-4">
          <DetailsCard country={country} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DetailsPage
