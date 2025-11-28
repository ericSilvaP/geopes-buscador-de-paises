import geopes from '/src/assets/geopes-logo.png'

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center text-center text-[0.8rem] py-0.5 bg-[#868993] text-white">
      <div className="flex items-center gap-1">
        <img className="size-8" src={geopes} alt="logo GeoPes" />
        <p className="text-1xl">GeoPes</p>
      </div>

      <p>Kauã Neres, Eric Silva, José Wilk</p>
    </footer>
  )
}

export default Footer
