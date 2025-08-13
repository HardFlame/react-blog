import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { toggleFavorite } from "../store/favoritePosts/favoritePosts.slice";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { useDispatch } from "react-redux";

export default function PostFavoriteComponent({postId,isFavorite}:{postId:number,isFavorite?:boolean}) {
    const favorites = useTypedSelector(state=>state.favorites)
    if (isFavorite !== true && isFavorite !== false) {
        isFavorite = favorites.find(favoritePostId=>favoritePostId === postId) !== undefined
        console.log('isFavorite',isFavorite)
    }
    const dispatch = useDispatch()
    return (< ><div className="" onClick={()=>{dispatch(toggleFavorite(postId))}}>
        {isFavorite?<MdFavorite />:<MdFavoriteBorder />}</div>
    </>)
}