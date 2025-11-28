import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import './style.css'

function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center">
        <SearchBar />
        <section className="w-full flex flex-col items-center gap-4 p-4">
          <Card />
        </section>
      </main>
    </>
  )
}

export default Home
