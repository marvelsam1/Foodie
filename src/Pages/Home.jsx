import RecipeItem from "../components/RecipeItem";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Suggestion from "../components/Suggestion";
import LatestBlogs from "../components/LatestBlogs";
import Subscribe from "../components/Subscribe";
const Home = ({ loading, recipes, handleItemClick }) => {
   
    return ( 
        <div className="my-4  home" id="Home">
            <Hero />
            <h1 className="md:text-2xl text-1xl font-semibold md:mx-32 text-center mt-20">Search Results</h1>
            <div className="py-8 container flex mx-auto gap-10 justify-center px-2 flex-wrap">
            { recipes && recipes.length > 0 ? 
                recipes.map(item => <RecipeItem key={item.id} item={item}/> ) 
                : <div className="lg:text-3xl lg:font-normal text-deepGray text-2xl text-center">Nothing to show pls search something</div> }
                {/* <div>{loading? <div>Loading...</div>:null}</div> */}
            </div>
            <Suggestion />
            <Subscribe />
            <LatestBlogs />
            <Footer />
        </div>
     );
}
 
export default Home;