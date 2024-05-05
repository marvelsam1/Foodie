import RecipeItem from "../components/RecipeItem";

const Favourites = ({ favouriteList, suggestedFavourite }) => {
    return ( 
        <div className="f;ex flex-col items-center">
            <div className="py-8 container flex md:flex-row flex-col mx-auto gap-10 md:justify-center items-center flex-wrap">
            { favouriteList && favouriteList.length > 0 ? 
                favouriteList.map(item => <RecipeItem key={item.id} item={item}/> ) 
                : <div className="text-5xl font-semibold"></div> }
            </div>

            <div className="py-8 container md:flex-row flex-col flex mx-auto md:justify-center gap-10 items-center flex-wrap">
            {
                suggestedFavourite && suggestedFavourite.length > 0 ? 
                suggestedFavourite.map(item => <RecipeItem key={item.id} item={item}/> ) 
                : <div></div>    
            }
            </div>
        </div>
     );
}
 
export default Favourites;