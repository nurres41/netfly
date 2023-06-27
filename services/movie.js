const API_URL = "https://api.themoviedb.org/3"

const fetchMovieApi = async (pathname,query = "") => {

    try{
        const response = await fetch(`
        ${API_URL}/${pathname}?api_key=${process.env.API_KEY}&${query}
     `)
     return response.json()
    }
    catch(error){
        throw new Error(error)
    }
}

const getSingleCategory = async (genreId) => {
    return fetchMovieApi("discover/movie",`with_genres=${genreId}`)
  }
  
  const getTopRatedMovies = async () => {
    return fetchMovieApi('movie/top_rated','page=1');
  }
  
  const getCategory = async () => {
    return fetchMovieApi('genre/movie/list');
  }
  
  const getPopularMovies = async () => {
    return fetchMovieApi('movie/popular','page=1')
  }

  const getMovie = async (movieId) => {
    return fetchMovieApi(`movie/${movieId}`)
}
  

export {fetchMovieApi, getCategory, getPopularMovies, getTopRatedMovies, getSingleCategory, getMovie}