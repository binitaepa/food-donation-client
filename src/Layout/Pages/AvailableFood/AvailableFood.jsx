import { useEffect, useState } from "react";
import AVailablefoodcard from "./AVailablefoodcard";



const AvailableFood = () => {
    const [feature,setFeature]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/feature')
        .then(res => res.json())
            .then(data => setFeature(data));
    })
    return (
        <div>
          <div className="relative mt-5">
        <input type="text" placeholder="filter food" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary bg-amber-400 text-black  absolute top-0 right-0 rounded-l-none">filter Food</button>
      </div>
            <div className="relative mt-5">
        <input type="text" placeholder="search.." className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary bg-amber-200 text-black  absolute top-0 right-0 rounded-l-none">Search Food</button>
      </div>
            <div>
                <h2 className="text-5xl mb-5 items-center text-center text-amber-500">Food available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10 gap-10 ml-10">
           {
                feature.map(feature=><AVailablefoodcard  key={feature._id} feature={feature}></AVailablefoodcard>)
            }
           </div>
            </div>
        </div>
    );
};

export default AvailableFood;