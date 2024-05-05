import Footer from "../components/Footer";

const About = () => {
    return ( 
        <div className="py-10 md:px-0 px-6">
            <h1 className="text-2xl md:xy-24  pb-2 text-center font-serif">About</h1>
            <h1 className="md:text-4xl font-serif font-semibold md:w-[900px] pt-6 md:px-24 text-center md:text-left">We are a group of people who love cooking</h1>
            <img src="assets/food-bg.avif" alt="" className="md:w-[85%] w-[100%] my-6 md:mx-24" />
            <p className="text-sm leading-8 md:px-24 text-center md:text-left">
                Welcome to Foodie, your ultimate destination for culinary inspiration and mouthwatering recipes!

                At Foodie, we believe that cooking is not just a necessity, but a delightful adventure waiting to be explored. Whether you're a seasoned chef or a kitchen novice, our mission is to empower you to create delicious dishes that ignite your passion for food.

                Our curated collection of recipes spans cuisines from around the globe, ensuring there's something to tantalize every palate. From quick and easy weeknight dinners to indulgent desserts that satisfy your sweet tooth, we've got you covered.

                But Foodie is more than just a recipe repository. It's a community of food enthusiasts, coming together to share tips, tricks, and stories about their culinary journeys. Join us as we celebrate the joy of cooking and the connections it fosters.

                So, whether you're looking for weekday meal ideas, planning a special dinner party, or simply craving a new culinary adventure, let Foodie be your guide. Get ready to unleash your inner chef and embark on a delicious voyage with us!
            </p>
            <p className="text-center text-gray py-10">copynrights Foodie</p>
            {/* <Footer /> */}
        </div>
     );
}
 
export default About;