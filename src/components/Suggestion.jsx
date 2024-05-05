import { useEffect } from "react";
import { useState } from "react";
import SuggestCard from "./SuggestCard";

const Suggestion = () => {

    const[suggest, setSuggest] = useState([])

    useEffect(() => {
        // Check if data exists in local storage
        const storedData = localStorage.getItem("suggestData");
        if (storedData) {
          setSuggest(JSON.parse(storedData));
        } else {
          fetch('http://localhost:3000/blogs')
            .then((res) => {
              if (!res.ok) {
                throw Error("Could not fetch data");
              }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              // Set data in local storage
              localStorage.setItem("suggestData", JSON.stringify(data));
              setSuggest(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
}, []);
    
    
    return ( 
        <div className=" my-14" id="suggested">
            <h1 className="md:text-2xl text-1xl font-semibold md:text-left text-center md:mx-32 ">Suggested for you</h1>
            <div className="py-8 container flex mx-auto gap-10 justify-center px-2 flex-wrap">
                { suggest && suggest.length > 0 ? 
                    suggest.map(item => <SuggestCard key={item.id} item={item}/> ) 
                : null }
            </div>
        </div>
     );
}
 
export default Suggestion;