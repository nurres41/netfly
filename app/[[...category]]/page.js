import React from 'react'
import HomeContainer from '@/containers/home'
import {  getCategory, getPopularMovies, getTopRatedMovies, getSingleCategory } from '@/services/movie'


// PAGES

async function Pages({params}) {

  let selectedCategory;

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getCategory();
  
  // obj döner. obje içindeki results dizisi bize lazım olan. burada getTopRatedMovies().results'u popularMovies'e atadık.

  const [{results:topRatedMovies}, {results:popularMovies}, {genres: categories }] = await Promise.all([topRatedPromise,popularPromise,categoryPromise]);


  if(params.category?.length > 0 )
        {
        const {results} = await getSingleCategory(params.category[0])
        selectedCategory = results
        console.log(selectedCategory)
        }

  return (
    // params.category varsa [0]. elemanı. Çünkü [0] elemanı /tan sonra gelen ilk parametredir. /12/sadsad params.category[0] = 12 olacaktır.
    <HomeContainer popularMovies={popularMovies} topRatedMovies={topRatedMovies} categories={categories} selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? selectedCategory.slice(0,7) : [],
    }}/>
  )
}

export default Pages