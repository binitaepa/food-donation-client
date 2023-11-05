
import {IoIosContacts,IoIosHappy} from 'react-icons/io'
import {ImShield,ImUserTie} from "react-icons/im";
const Review = () => {
    return (
        <div>
               <div className="mt-10 items-center text-center mb-10">
            <div>
                <h2 className="text-3xl font-bold text-amber-400 ">Why Choose US ?</h2>
                <hr />
            </div>
            <div className="flex flex-col text-amber-600 mt-5 font-semibold border text-xl">
                
                <div className='flex items-center justify-center'>
                <h2>Exceptional Quality</h2>
                <IoIosHappy></IoIosHappy>
                </div>
                <div className='flex items-center justify-center'>
                <h2>Outstanding Customer Service</h2>
                <IoIosContacts></IoIosContacts> 
                </div>
                <div  className='flex items-center justify-center'>
                <h2>Innovation and Uniqueness</h2>
                <ImShield></ImShield>
                </div>
               <div className='flex items-center justify-center'>
               <h2>Social Responsibility and Ethics</h2>
               <ImUserTie></ImUserTie></div> 
               <p>Our ratings</p>
               <div className="stats stats-vertical lg:stats-horizontal  shadow">
  
  <div className="bg-amber-200">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat bg-amber-400">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat bg-amber-300">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
               
                <hr />
            </div>
            <hr />
        </div>
        </div>
    );
};

export default Review;