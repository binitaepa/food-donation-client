import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const FoodDetails = () => {
    const {id} =useParams();
    const foods=useLoaderData();
    const {user}=useContext(AuthContext);
    const currentDate = new Date().toLocaleDateString();
     
    const foodDetail= foods.find(foodDetail=> foodDetail._id == id);
    const handleAddFood = event =>{
        event.preventDefault();

        const form = event.target;
        const notes = form.notes.value;
        const money= form.money.value;
      
        const food = {
            notes: notes,
            money: money,
        }

      

        fetch(`https://food-sharing-website-server.vercel.app/feature/${foodDetail._id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(food)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount ){
                toast('Two data added successfully')
            }
        })

    }


    return (
        <div className="mb-10 items-center flex justify-center flex-col gap-5">
            <div>
                <h2 className="text-5xl ">Food Donar Name :  <span className="text-amber-600">{foodDetail.donatorName}</span></h2>
                <h2 className="text-3xl mt-2 ">Pick Up From :  <span className="text-amber-500">{foodDetail.pickupLocation}</span></h2>
            </div>
            <div>
                <img src={foodDetail.foodImage} alt="" className="w-11/12" />
                
            </div>
            <h2 className="text-4xl">{foodDetail.foodName}</h2>
                <p>QUANTITY : {foodDetail.foodQuantity}</p>
                <p>Expire Date:{foodDetail.expiredDateTime}</p>
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-amber-300" onClick={()=>document.getElementById('my_modal_5').showModal()}>Request</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleAddFood}>
                {/* form Photo url row */}
            <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image" disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                

                {/* form name and Brand Name row */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" value={foodDetail.foodName} disabled className="input input-bordered w-full" />
                        </label>
                        
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food Id</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name" value={id} disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>
                {/* form type and price row */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email of Donar</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Donar@email.com"  disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" disabled value={foodDetail.donatorName} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form description and ratings row */}
                <div className="md:flex mb-8">
                   
                   
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" disabled value={user.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Request date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Ratings" defaultValue={currentDate} disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* pick up location */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">pic up location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="" value={foodDetail.pickupLocation} disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Expire Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="" disabled value={foodDetail.expiredDateTime} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* additional notes */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="notes" placeholder="" value={foodDetail.additionalNotes}  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Donation Money</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="money" placeholder="enter amount"  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Request" className="btn btn-block bg-amber-400 text-white" />

            </form>
    <div className="modal-action align-middle">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-amber-400">Close</button>
      </form>
    </div>
  </div>
</dialog>
                </div>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default FoodDetails;