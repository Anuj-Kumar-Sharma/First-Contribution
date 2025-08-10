import  axios  from 'axios'
import { setMovies } from '../slice';
import { useSelector } from 'react-redux';

const BaseURL =  'http://www.omdbapi.com/?i=tt3896198&apikey=91a4005e'

export const getMovies = () => async dispatch =>{
    const url = `${BaseURL}&s=batman&page=1`;
    try{
        const { data } = await axios.get(url);
        dispatch(setMovies(data))
    }catch(err){
        return err;
    }
   
}

// export const getMoviesByGeners = () => async dispatch =>{
//     const { selectedValues } = useSelector((state) => state.movie);
//     const url = `${BaseURL}&s=${selectedValues}&page=1`;
//     try{
//         const { data } = await axios.get(url);
//         dispatch(setMovies(data))
//     }catch(err){
//         return err;
//     }
   
// }

