
const FoodRow = ({ food, handleDelete, handleFoodConfirm }) => {
    const { _id, foodName, name, email, date, foodstatus } = food;
    return (
        
 <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
           
            <td>
                {foodName}
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{foodstatus}</td>
            <td>{date}</td>
            
            <th>
                
                    
                        <button onClick={() => handleFoodConfirm(_id)} className="btn btn-ghost btn-xs bg-gray-500 text-white">Edit</button>
            </th>
            <th><button className="btn bg-amber-600">Manage Food</button></th>
        </tr>
        
    );
};

export default FoodRow;