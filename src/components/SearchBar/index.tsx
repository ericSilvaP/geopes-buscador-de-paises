import { FaSearch } from 'react-icons/fa'
import { FaSlidersH } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type FormValues = {
  regions: string[]
}

function SearchBar() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormValues>()
  const [showModal, setShowModal] = useState(false)
  const regions = [
    { value: 'americas', label: 'Américas' },
    { value: 'europe', label: 'Europa' },
    { value: 'asia', label: 'Ásia' },
    { value: 'africa', label: 'África' },
    { value: 'oceania', label: 'Oceania' },
    { value: 'antarctic', label: 'Antártida' },
  ]

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
      <button
        className="cursor-pointer p-2"
        onClick={() => setShowModal(!showModal)}
      >
        <FaSlidersH />
      </button>
      <div
        className="h-screen w-screen bg-[#00000052] top-0 left-0 fixed flex justify-center items-center"
        hidden={!showModal}
        onClick={() => setShowModal(false)}
      >
        <div
          className="bg-[#868993] text-[#ffffff] py-6 px-10 rounded-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-center text-3xl font-bold mb-6">Filtrar por</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
            <button
              type="submit"
              className="bg-[#f0f0f0] text-[#868993] px-4 py-1 cursor-pointer rounded-xs transition-all duration-300 hover:bg-[#dddddd] w-fit mx-auto"
              onClick={() => setShowModal(false)}
            >
              Mandar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
