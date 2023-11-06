import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import pic from '../../../assets/common-pic.jpg'


const AVailablefoodcard = ({feature}) => {
    const {_id,foodName,foodImage,donatorName,foodQuantity,pickupLocation,expiredDateTime,additionalNotes}=feature;
    return (
        <div>
             <div className="card w-96 bg-gray-200 ">
            <figure className="px-2 pt-2">
                <img src={foodImage} alt="Shoes" className="rounded-xl h-[240px] w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <h2 className="font-bold">Food Quantity: {foodQuantity} <br /> <span>Expire date:{expiredDateTime}</span></h2>
                <p>Location: {pickupLocation}</p>
                <p>Notes: {additionalNotes}</p>
                <p className="items-center justify-center flex text-amber-900 border-b-2">DONATED BY</p>
               <div className="flex justify-between"> <p className="text-3xl mt-5 text-orange-500">{donatorName}</p>
               <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={pic} />
  </div>
</div></div>
                <div className="card-actions items-center">
                    <Link to={`/fooddetail/${_id}`}>
                        <button className="btn bg-amber-400 w-full ">View Details <ArrowRightIcon></ArrowRightIcon></button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AVailablefoodcard;