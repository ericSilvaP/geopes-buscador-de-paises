import { FaHeart } from 'react-icons/fa'
import FavoriteHandler from '../../favorite/favorite'

interface FavButtonProps {
  code: string
}

function FavButton({ code }: FavButtonProps) {
  const favHandler = new FavoriteHandler()

  function toggleFav(code: string) {
    favHandler.isFavorite(code) ? favHandler.remove(code) : favHandler.add(code)
    console.log(favHandler.getAll())
  }

  return (
    <FaHeart
      className="text-2xl text-[#194167]"
      onClick={() => toggleFav(code)}
    />
  )
}

export default FavButton
