

const AddFoodShow = ({food}) => {
    const { photo, foodName,name, quantity,  pickup, date, description, email,donarimage,foodstatus}=food;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl h-[240px] w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{foodName}</h2>
    <div className="flex gap-3"><p>food Quantity: {quantity}</p>
    <p>Address: {pickup}</p></div>
    <p>Date:{date}</p>
    <p>Donar:{name}</p>
    <img src={donarimage} alt="" className="w-24 rounded-full" />
    <p>Email:{email}</p>
    <p>Description:{description}</p>
    <p>Food Status:{foodstatus}</p>
    
    
  </div>
</div>
        </div>
    );
};

export default AddFoodShow;