import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

const devs = [
  {
    id: 1,
    name: 'Eric Silva',
    role: 'BackEnd',
    image: '/eric.png',
  },
  {
    id: 2,
    name: 'Kaua Neres',
    role: 'FrontEnd',
    image: '/kaua.png',
  },
  {
    id: 3,
    name: 'Wilk Neves',
    role: 'FrontEnd',
    image: '/wilk.jpeg',
  },
]

function DevsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[d0d0d0]">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center py-12 px-4">
        <header className="w-full max-w-2xl mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-thighter text-gray-900 mb-4">
            Sobre os
            <br />
            Colaboradores
          </h1>
          <div className="w-24 h-1 bg-[#868993] mx-auto mt-6"></div>
        </header>

        <section className="w-full max-w-md space-y-8">
          {devs.map((dev) => (
            <div
              key={dev.id}
              className="flex flex-col items-center overflow-hidden border-none shadow-lg bg-white hovershadow-2xl text-center p-6"
            >
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-houver:scale-105 transition duration-500">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 tracking-thight mb-1">
                {dev.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 font-medium">
                {dev.role}
              </p>

              <div className="w-8 h-px bg-gray-300 mb-4 group-hover:w-16 group-hover:bg-[#868993] transition-all duration-500"></div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DevsPage
