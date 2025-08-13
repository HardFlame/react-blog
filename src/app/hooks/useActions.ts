import { bindActionCreators } from "redux"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import favoriteActions from "../store/favoritePosts/favoritePosts.slice"
import userActions from "../store/Users/Users.slice"

const rootActions = {
    ...favoriteActions,
    ...userActions
}

const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}