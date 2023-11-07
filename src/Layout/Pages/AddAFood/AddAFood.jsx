import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddAFood = () => {
    const {user}=useContext(AuthContext);
    console.log(user.email)
    const handleAddFood=(event)=>{
       
            event.preventDefault();
    
            const form = event.target;
            
            const photo = form.photo.value;
            const foodName=form.foodname.value;
            const name = form.name.value;
            const quantity = form.Quantity.value;
            const pickup = form.pickup.value;
            const date = form.date.value;
            const description = form.description.value;
            const email= form.email.value;
            const donarimage= form.image.value;
            const foodstatus= form.foodstatus.value;
           
    
            const newFood = { photo, foodName,name, quantity,  pickup, date, description, email,donarimage,foodstatus}
    
            console.log(newFood);
            fetch('https://food-sharing-website-server.vercel.app/collection', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newFood)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Food Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
        
        
    }
    return (
        <div className="w-10/12 ml-10 mb-10 bg-amber-100">
            <h2 className="flex items-center justify-center text-3xl font-bold text-amber-500">Add Your Food</h2>
             <form onSubmit={handleAddFood}>
                {/* form Photo url row */}
            <div className="mb-8 ">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text ">Food Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image" className="input input-bordered w-full" />
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
                            <input type="text" name="foodname" placeholder="Name of Food" className="input input-bordered w-full" />
                        </label>
                        
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Quantity" placeholder="Food Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>
                {/* form type and price row */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Pick Up Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pickup" placeholder="location"  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Expire Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="date" placeholder="exp date"  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form description  row */}
                <div className="md:flex mb-8">
                   
                   
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Donar Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Your image" value={user.photoURL} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* name email */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" value={user.displayName}  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="email" value={user.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* additional notes */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-[3/4 text-center]">
                        <label className="label">
                            <span className="label-text">Food Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="foodstatus" placeholder="" defaultValue='Avaiable'  className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                
                <input type="submit" value="ADD" className="btn btn-block bg-amber-400 text-white" />

            </form>
   
        </div>
    );
};

export default AddAFood;