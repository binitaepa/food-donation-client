import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Features = () => {
    const [feature,setFeature]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/feature')
        .then(res => res.json())
            .then(data => setFeature(data));
    })
    return (
        <div>
             <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Feature FOOD</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
           {
                feature.map(feature=><FeatureCard key={feature._id} feature={feature}></FeatureCard>)
            }
           </div>
        </div>
    );
};

export default Features;