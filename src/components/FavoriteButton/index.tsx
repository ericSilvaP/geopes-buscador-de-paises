import { FaHeart, FaRegHeart } from 'react-icons/fa'
import FavoriteHandler from '../../favorite/favorite'
import { useEffect, useState } from 'react'

interface FavButtonProps {
  code: string
}

function FavButton({ code }: FavButtonProps) {
  const favHandler = new FavoriteHandler()
  const [isFav, setIsFav] = useState(false)

  function toggleFav(e: React.MouseEvent, code: string) {
    e.stopPropagation()
    favHandler.isFavorite(code) ? favHandler.remove(code) : favHandler.add(code)
  }

  useEffect(() => {
    setIsFav(favHandler.isFavorite(code))
  })

  if (!isFav)
    return (
      <FaRegHeart
        className={`text-2xl text-[#194167] cursor-pointer`}
        onClick={(e) => toggleFav(e, code)}
      />
    )

  return (
    <FaHeart
      className={`text-2xl text-[#194167] cursor-pointer`}
      onClick={(e) => toggleFav(e, code)}
    />
  )
}

export default FavButton
