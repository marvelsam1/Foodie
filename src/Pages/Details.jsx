import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = ({ recipeDetails, setRecipeDetails, handleAddToFavourite }) => {
    // const [recipeDetails, setRecipeDetails] = useState(null);

    const {id} = useParams()
    

    useEffect(() => {
        async function getRecipesDetails() {
                try {
                    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e8c02f6fcc63455cabfb40a137afdfb9`);
                    const data = await response.json();
                    setRecipeDetails(data)
                    
                } catch (error) {
                    console.error("Error fetching recipe details:", error);
                }
            }
        getRecipesDetails()
    }, [id])
    // console.log(recipeDetails, 'recipeDetailsData')
    return ( 
        <div>
            {/* Render recipe details here */}
            {recipeDetails && (
                <div className="flex md:flex-row flex-col items-center gap-10 md:mx-auto mx-0 mt-10 md:px-16 px-0">
                    <div className="">
                        <img className="md:w-[460px] md:h-[350px] w-[300px] h-[200px] rounded-lg" src={recipeDetails.image} alt={recipeDetails.title} />
                    </div>
                    
                    <div className="md:w-[800px] w-[300px]">
                        <h2 className="font-bold text-4xl">{recipeDetails.title}</h2>
                        <button onClick={() => handleAddToFavourite(recipeDetails)} className="bg-black my-3 text-white text-center font-semibold rounded-lg py-2 px-5">Save as Favourite</button>
                        <p className="font-semibold">Ready in: {recipeDetails.readyInMinutes} minutes</p>
                        <p className="font-semibold">Servings: {recipeDetails.servings}</p>
            
                        <p className="font-semibold">Credits: <span className=" font-normal">{recipeDetails.creditsText}</span></p>
                        <p className="font-semibold">Instructions: <span className=" font-normal">{recipeDetails.instructions}</span></p>
                        {/* <p className="font-semibold w-[100px] md:w-[100%]">Source URL: <span><a className="font-light" href={recipeDetails.sourceUrl} target="_blank" rel="noopener noreferrer">{recipeDetails.sourceUrl}</a></span></p> */}
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Details;