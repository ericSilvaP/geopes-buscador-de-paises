import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import DetailsCard from '../../components/DetailsCard'
import Footer from '../../components/Footer'
import './style.css'

function DetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <SearchBar />
        <section className="w-full flex flex-col items-center gap-4 p-4">
          <DetailsCard />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DetailsPage
