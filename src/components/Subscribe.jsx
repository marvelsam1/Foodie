const Subscribe = () => {
    return ( 
        <div className="py-24 bg-green flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="md:text-6xl font-semibold pb-6 md:w-[700px] text-4xl">Deliciousness to your inbox</h1>
            <p className="text-1xl pb-6 md:w-[500px]">Enter your email to never miss any of our full recipes list. We will always 
            update you with the latest recipes to make you never miss out on your delicious meal</p>
            <form action="" className="flex md:flex-row items-center justify-center flex-col">
                    <input type="email" placeholder="Enter your email" className="footer-input py-2 px-5 rounded-lg outline-none md:w-[400px] w-[250px]" />
                    <button className="bg-orange text-white py-2 px-6 rounded-lg md:ml-2 mt-2 lg:mt-0 w-[250px] md:w-32">Subscribe</button>
            </form>
            <p className="pt-6">Subscribe now!</p>
        </div>
     );
}
 
export default Subscribe;