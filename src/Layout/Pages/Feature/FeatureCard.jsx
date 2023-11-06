import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


const FeatureCard = ({feature}) => {
    const {_id,foodName,foodImage,donatorName,foodQuantity,pickupLocation,expiredDateTime,additionalNotes}=feature;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={foodImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <h2>{foodQuantity} <span>{expiredDateTime}</span></h2>
                <p>{pickupLocation}</p>
                <p>{additionalNotes}</p>
               <div className="flex justify-between"> <p className="text-xl text-orange-500">{donatorName}</p>
               <img src="" alt="" /></div>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn bg-amber-400">View Details <ArrowRightIcon></ArrowRightIcon></button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FeatureCard;