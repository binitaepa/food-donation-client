import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";


const Features = () => {
    const [feature,setFeature]=useState([]);
    useEffect(()=>{
        fetch('https://food-sharing-website-server.vercel.app/feature')
        .then(res => res.json())
            .then(data => setFeature(data));
    })
    return (
        <div>
             <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-600">Food for donation</h3>
                <h2 className="text-5xl text-amber-400">Feature FOOD</h2>
                <p className="text-amber-600 text-xl mb-2">Discover a world of culinary generosity on our food sharing platform. </p>
        
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10">
           {
                feature.map(feature=><FeatureCard key={feature._id} feature={feature}></FeatureCard>)
            }
           </div>
           <div className="mt-5 align-middle items-center flex justify-center"> 
            <Link to='/availablefood'><button className="btn btn-warning text-xl bg-amber-300 w-[500px] flex justify-center items-center">Show All</button></Link>
           </div>
        </div>
    );
};

export default Features;