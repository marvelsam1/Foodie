import { Link } from "react-router-dom";
const RecipeItem = ({ item }) => {

    const baseUrl = 'https://img.spoonacular.com/recipes/';
    return ( 
        <div className="flex flex-col w-80 bg-white shadow-xl p-5 rounded-2xl card" >
            <div className="flex justify-center items-center ">
                <img src={`${baseUrl}${item.image}`} alt="Food recipe" className="rounded-2xl h-40 w-72" />
            </div>
            <div className="flex flex-col gap-2 py-5">
                <h2 className="font-semibold text-2xl">{item.title}</h2>
                {/* <p>Ready in: {item.readyInMinutes} minutes</p> */}
                <p className=" text-gray-400">Servings: {item.servings}</p>
            </div>
            <Link to={`/recipe-item/${item.id}`} className="bg-black rounded-lg text-white font-semibold py-2 px-5 text-center">Recipe Details</Link>
        </div>
     );
}
 
export default RecipeItem;