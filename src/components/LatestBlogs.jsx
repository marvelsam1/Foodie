const LatestBlogs = () => {
    return ( 
        <div className="my-20 md:mx-20 mx-6" id="blog">
        <h2 className="md:text-3xl text-1xl md:text-left text-center font-semibold">Latest Blogs</h2>
        <div className="flex md:flex-row flex-col items-center gap-10">
            <div className="">
                <h1 className="text-2xl font-semibold pt-10">Strawberry cream cheesecake</h1>
                <div>
                    <img src="" alt="" />
                    <p className="text-[10px] text-gray">Yersterday</p>
                </div>
                <p className=" text-sm text-deepGray py-3">One thing I learned living in the Canasie section of Brooklyn, NY was how to cook a good Italian meal. 
                        Here is a recipe I created after having a good meal in a restaurant</p>
                <div className="flex ">
                    <img className="h-[230px]" src="assets/cake2.avif" alt="blog img" />
                </div>
            </div>

            <div className="">
                <h1 className="text-2xl font-semibold pt-10">How to prepare chicken recipe</h1>
                <div>
                    <img src="" alt="" />
                    <p className="text-[10px] text-gray">Yersterday</p>
                </div>
                <p className=" text-sm text-deepGray py-3">One thing I learned living in the Canasie section of Brooklyn, NY was how to cook a good Italian meal. 
                        Here is a recipe I created after having a good meal in a restaurant</p>
                <div className="flex ">
                    <img className="" src="assets/food-bg.avif" alt="blog img" />
                </div>
            </div>

            <div className="">
                <h1 className="text-2xl font-semibold pt-10">Chips for the belly</h1>
                <div>
                    <img src="" alt="" />
                    <p className="text-[10px] text-gray">Yersterday</p>
                </div>
                <p className=" text-sm text-deepGray py-3">One thing I learned living in the Canasie section of Brooklyn, NY was how to cook a good Italian meal. 
                        Here is a recipe I created after having a good meal in a restaurant</p>
                <div className="flex ">
                    <img className="" src="assets/chips1.avif" alt="blog img" />
                </div>
            </div>
            
        </div>
        </div>
     );
}
 
export default LatestBlogs;