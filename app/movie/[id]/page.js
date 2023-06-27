import React from 'react'
import MovieContainer from '@/containers/movie'
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation'


function MoviePage({params, searchParams}) {    
 
    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id)

    if(!movieDetail){
        notFound();
    }
    if(searchParams.error === "error")
    {
        throw new Error("Error Happened")
    }
    return (
    <div>
        <MovieContainer movie={movieDetail}/>
    </div>
  )
}

export default MoviePage