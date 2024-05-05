import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="flex lg:flex-row flex-col justify-between items-top my-10 lg:mx-24 mx-4 ">
            <div className="lg:w-[300px] w-[100%] text-center md:text-left">
                <h1 className="font-semibold text-2xl">F<span className="text-green">oo</span>die</h1>
                <p className="text-gray text-sm leading-6 pt-3">Foodie is a recipe website with a wide variety of delicious recipes, esay-to-use instructions and search functions. Join us now and get the best recipe you could ever think of</p>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-black text-2xl pt-5 md:pt-0">Company</h1>
                <ul className="flex flex-col gap-5 pt-3 pl-1 text-deepGray text-sm">
                    <a href="#Home">Home</a>
                    <a href="#team">Team</a>
                    <Link to={'/about'}>About us</Link>
                </ul>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-black text-2xl pt-5 md:pt-0">Resources</h1>
                <ul className="flex flex-col gap-5 pt-3 pl-1 text-deepGray text-sm">
                    <a href="#blog">Blog</a>
                    <a href="#suggested">Explore</a>
                    <a href="#hero">Insights</a>
                </ul>
            </div>
            <div className="text-center md:text-left">
                <h1 className="font-semibold text-2xl pt-5 md:pt-0">F<span className="text-green">oo</span>die</h1>
                <p className="py-3 text-deepGray lg:w-[300px] w-[100%] text-sm leading-6">Sign up on our news letter today to always get the latest from us</p>
                <form action="">
                    <input type="email" placeholder="Enter your email" className="footer-input py-2 px-5 rounded-lg outline-none" />
                    <button className="bg-green text-white py-2 px-6 rounded-lg md:ml-3 mt-2 lg:mt-0">Subscribe</button>
                </form>
            </div>
        </div>
     );
}
 
export default Footer;