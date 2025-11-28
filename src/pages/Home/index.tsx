import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer'
import './style.css'
import Card from '../../components/Card'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <SearchBar />
        <section className="w-full flex flex-col items-center gap-4 p-4">
          <Card />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
