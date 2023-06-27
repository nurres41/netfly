import React from 'react'
import HomeContainer from '@/containers/home'
import Movies from '@/mocks/movies.json'

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function Pages({params}) {
   await delay(6000);
  let selectedCategory;
 console.log(params);
  if(params.category?.length > 0 )
        {
        selectedCategory = true
         }

  return (
    // params.category varsa [0]. elemanı. Çünkü [0] elemanı /tan sonra gelen ilk parametredir. /12/sadsad params.category[0] = 12 olacaktır.
    <HomeContainer selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? Movies.results.slice(7,13) : [],
    }}/>
  )
}

export default Pages