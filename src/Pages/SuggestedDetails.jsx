import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const SuggestedDetails = ( {suggestedAddToFavourite} ) => {
    const[suggestedRecipeDetails, setSuggestedRecipeDetails] = useState(null)
    const {id} = useParams()

    useEffect(() => {

         // Retrieve the stored data from local storage
         const storedData = JSON.parse(localStorage.getItem("suggestData"));
         console.log(storedData)

         if (storedData) {
             // Find the details of the selected item from the stored data
             const selectedDetails = storedData.find(item => item.id === id);
             setSuggestedRecipeDetails(selectedDetails);
         } else {
             console.error("No stored data found");
         }
        // async function getSuggestedDetails() {
        //         try {
        //             const response = await fetch(`http://localhost:3000/blogs/${id}`);
        //             if (!response.ok) {
        //                 throw new Error('Failed to fetch blog post');
        //             }
        //             const data = await response.json();
        //             setSuggestedRecipeDetails(data)
        //             console.log(data)
                    
        //         } catch (error) {
        //             console.error("Error fetching recipe details:", error.message);
        //         }
        //     }
            // getSuggestedDetails()
    }, [id])
    return ( 
        <div>
            {suggestedRecipeDetails && (
                <div className="flex flex-col md:flex-row items-center gap-10 mx-auto mt-10 px-16">
                    <div className="">
                         {suggestedRecipeDetails.image && (
                             <img className="md:w-[460px] md:h-[350px] w-[460px] h-[200px] rounded-lg" src={suggestedRecipeDetails.image} alt={suggestedRecipeDetails.title} />
                         )}
                    </div>
                    
                    <div className="">
                        <h2 className="font-bold text-4xl">{suggestedRecipeDetails.title}</h2>
                        <h1>{suggestedRecipeDetails.author}</h1>
                        <p className="md:w-[500px] w-[300px]">Preparation: Preheat your oven to the specified temperature in the recipe. Grease and flour your cake pans to prevent sticking.
                            Mix Dry Ingredients: In a mixing bowl, combine flour, sugar, baking powder, and salt. Mix well to ensure even distribution of ingredients.
                            Mix Wet Ingredients: In another bowl, beat together eggs, oil, milk, and vanilla extract until well combined.
                            Combine and Mix: Gradually add the wet ingredients to the dry ingredients, mixing until just combined. Be careful not to overmix, as this can lead to a tough cake.
                            Bake: Pour the batter into the prepared cake pans and smooth the tops. Bake in the preheated oven for the specified time or until a toothpick inserted into the center comes out clean. Allow the cakes to cool in the pans for a few minutes before transferring them to a wire rack to cool completely. Once cooled, you can frost and decorate your cake as desired.</p>
                        <button onClick={() => suggestedAddToFavourite(suggestedRecipeDetails)} className="bg-black my-3 text-white text-center font-semibold rounded-lg py-2 px-5">Save as Favourite</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default SuggestedDetails;