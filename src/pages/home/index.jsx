import React from "react";
import NavigationBar from "../../components/Navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies} from "../../api/service";
import MovieCard from "../../components/MovieCard";
import { Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, searchValue, selectedValues } = useSelector((state) => state.movie);
  const allMovies = movies.Search;
  console.log(selectedValues);

  // const { geners, year } = setSelectedValue;


  const filteredMovies = allMovies?.filter(item => item.Title.toLowerCase().includes(searchValue.toLowerCase()) || item.Type.toLowerCase().includes(selectedValues.toLowerCase())) 
  console.log("filteredMovies", filteredMovies);


  useEffect(() => {
    dispatch(getMovies());
  }, []);


  return (
    <>
      <NavigationBar />
      <Grid container spacing={6} sx={{margin: 10,justifyContent:"space-between"} }>
      {filteredMovies?.map((movie) => (
        <main id={movie.imdbID}>
          <MovieCard id={movie.imdbID} movie={movie} />
        </main>
      ))}
    </Grid>
    </>
  );
};

export default Home;
