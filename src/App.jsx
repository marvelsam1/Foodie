import { useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import Details from './Pages/Details'
import SuggestedDetails from './Pages/SuggestedDetails'
import About from './Pages/About'

function App() {

  const[search, setSearch] = useState('')
  const[loading, setLoading] = useState(false)
  const[recipes, setRecipes] = useState([])
  // const[error, setError] = useState(false)
  const[recipeDetails, setRecipeDetails] = useState(null)
  const[favouriteList, setFavouriteList] = useState([])
  const[suggestedFavourite, setSuggestedFavourite] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      // const apiKey = 'e8c02f6fcc63455cabfb40a137afdfb9'
      setLoading(true)
      const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${search}&apiKey=e8c02f6fcc63455cabfb40a137afdfb9`)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json()
      // console.log(data)
      setRecipes(data.results);
       // Assuming 'results' contains the array of recipes
      setLoading(false);
      setSearch('')

    } catch(error){
      // setError(error.message)
      console.log(error.message)
      setLoading(false)
      setSearch('')
    }
  }

  // console.log(recipes)
  // handling add to favourites for seafrched result
  const handleAddToFavourite = (getCurrentItem) => {
    // console.log(getCurrentItem)
    let cpyFavouriteList = [...favouriteList]
    const index = cpyFavouriteList.findIndex(item => item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavouriteList.push(getCurrentItem)
    } else {
      cpyFavouriteList.splice(index)
    }

    setSuggestedFavourite(cpyFavouriteList)

    console.log(favouriteList)
    
  }


  // handling add to favourite for suggested recipes
  const suggestedAddToFavourite = (currentItem) => {
    // console.log(getCurrentItem)
    let cpyFavouriteList = [...suggestedFavourite]
    const index = cpyFavouriteList.findIndex(item => item.id === currentItem.id)

    if(index === -1) {
      cpyFavouriteList.push(currentItem)
    } else {
      cpyFavouriteList.splice(index)
    }

    setFavouriteList(cpyFavouriteList)

    console.log(suggestedFavourite)
    
  }


  return (
    <>
          <Navbar  search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
          <Routes>
              <Route path='/' element={<Home loading={loading} recipes={recipes} />} />
              <Route  path='/Favourites' element={<Favourites favouriteList={favouriteList} suggestedFavourite={suggestedFavourite} />} />
              <Route  path='/recipe-item/:id' element={<Details  recipeDetails={recipeDetails} setRecipeDetails={setRecipeDetails} handleAddToFavourite={handleAddToFavourite} />}/>
              <Route path='/suggested-recipe-item/:id' element={<SuggestedDetails   suggestedAddToFavourite={suggestedAddToFavourite}/>}/>
              <Route path='/about' element={<About />}/>
          </Routes> 
    </>
  )
}

export default App
