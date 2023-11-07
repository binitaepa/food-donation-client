import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useTable } from "react-table";
import FoodRow from "../FoodRow/FoodRow";



  
const ManageMyFood = () => {
    const {user}=useContext(AuthContext);
    const [foods, setFoods] = useState([]);
   
  
   
    const url=`http://localhost:5000/collection?email=${user?.email}`
    useEffect(() => {

        
          fetch(url)
            .then(res => res.json())
           .then(data => setFoods(data)
           )
           .catch(error => {
            console.error('Error fetching data:', error);
          });
    }
    , [url]);
    const handleFoodConfirm = id => {
        fetch(`http://localhost:5000/collection/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Available' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = foods.filter(booking => booking._id !== id);
                    const updated = foods.find(booking => booking._id === id);
                    updated.status = 'Available'
                    const newFood = [updated, ...remaining];
                    setFoods(newFood);
                }
            })
    }
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = foods.filter(booking => booking._id !== id);
                        setFoods(remaining);
                    }
                })
        }
    }
    
    return (
        
        <div className="overflow-x-auto bg-amber-100 mb-8 w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Food Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Food Status</th>
                            <th>Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map(food => <FoodRow
                                key={food._id}
                               food={food}
                                handleDelete={handleDelete}
                                handleFoodConfirm={handleFoodConfirm}
                            ></FoodRow>)
                        }
                    </tbody>

                </table>

  

         
        </div>
    );
};

export default ManageMyFood;