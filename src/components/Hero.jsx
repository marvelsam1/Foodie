const Hero = () => {
    return ( 
        <div className="hero rounded-3xl md:px-10 px-5 md:mx-20 flex flex-col justify-center mx-3" id="hero">
            <div className="md:w-[600px]">
                <p className="text-orange text-sm leading-10 font-medium">Trending Now</p>
                <h1 className="md:text-6xl text-5xl md:font-normal font-semibold text-white">Mike's famous salad with cheese</h1>
                <p className="text-white">by John Mike</p>
            </div>
        </div>
     );
}
 
export default Hero;