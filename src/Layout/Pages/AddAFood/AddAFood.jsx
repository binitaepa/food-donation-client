

const AddAFood = () => {
    const handleAddFood=()=>{

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
                {/* form description and ratings row */}
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
                            <span className="label-text">Donar Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Your name"  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* pick up location */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="email"  className="input input-bordered w-full" />
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