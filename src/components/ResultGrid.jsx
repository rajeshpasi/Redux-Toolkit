import { useDispatch, useSelector } from "react-redux"
import {fetchUnsplashImages, fetchPexelsImages} from "../api/mediaApi"
import {setQuery, setLoading, setError, setError} from "../utilities/features/searchSlice"

const ResultGrid = () => {
  return (
    <div>ResultGrid</div>
  )
}

export default ResultGrid