import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  regions: string[]
}

function SearchBar() {
  const navigate = useNavigate()
  const regions = [
    { value: 'americas', label: 'Américas' },
    { value: 'europe', label: 'Europa' },
    { value: 'asia', label: 'Ásia' },
    { value: 'africa', label: 'África' },
    { value: 'oceania', label: 'Oceania' },
    { value: 'antarctic', label: 'Antártida' },
  ]
  const { register, handleSubmit } = useForm<FormValues>()

  function onSubmit(data: FormValues) {
    let url = '/?'
    if (data.regions) {
      url += 'regions=' + data.regions.join(',')
    }
    navigate(url)
  }

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
      <div className="h-screen w-screen bg-[#00000052] top-0 left-0 fixed flex justify-center items-center ">
        <div className="bg-[#868993] text-[#ffffff] p-6 rounded-xl">
          <h3 className="text-center text-3xl font-bold">Filtrar por</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-2xl">Continentes</h4>
            <div>
              {regions.map((r) => (
                <label key={r.value} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={r.value}
                    {...register('regions')}
                  />
                  {r.label}
                </label>
              ))}
            </div>
            <button type="submit">Mandar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
