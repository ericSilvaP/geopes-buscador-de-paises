import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'

function SearchBar() {
  return (
    <div className="bg-[#868993] text-[#194167] flex items-center justify-between px-2 h-8 w-5/6 rounded-sm m-4">
      <div className="flex items-center gap-2">
        <FaSearch />
        <p>Pesquisar</p>
      </div>
      <FaSlidersH />
    </div>
  )
}

export default SearchBar
