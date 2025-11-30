import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'

function SearchBar() {
  return (
    <div className="bg-[#868993] text-[#194167] text-xl flex items-center justify-between px-6 py-6 h-8 w-5/6 rounded-sm m-4">
      <form className="flex items-center gap-2 w-full">
        <button type="submit" className="cursor-pointer p-2">
          <FaSearch />
        </button>
        <input
          type="search"
          name="q"
          id="q"
          placeholder='Ex: "Hungria"'
          autoComplete="off"
          className="bg-[#00000018] text-white w-full focus-within:outline-0 px-1 py-2  focus-within:bg-[#ffffff18]"
        />
      </form>
      <button className="cursor-pointer p-2">
        <FaSlidersH />
      </button>
    </div>
  )
}

export default SearchBar
