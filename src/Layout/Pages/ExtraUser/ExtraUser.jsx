
import steps from '../../../assets/steps.jpg'
const ExtraUser = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 mb-5 container justify-center items-center'>
                <h2 className="text-lg text-amber-700">What to Expect ?</h2>
                
                <h1 className="font-extrabold mb-5 text-amber-500 text-4xl">Donate Extra Food AS Much You Want and Remove Hunger!!</h1>
                <img src={steps} alt="" className='w-1/2' />
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col items-center text-lg text-amber-500"><p>Start With Basic</p>
                     <span className="text-gray-400">Kick things off with your name and location</span>
                     </div>
                    <div className="flex flex-col items-center text-lg text-amber-500"><p>Tell Us Your Story</p>
                     <span className="text-gray-400">We will guide you tips along the way</span>
                     </div>
                    <div className="flex flex-col items-center text-lg text-amber-500"><p>Share With Friends And Family</p>
                     <span className="text-gray-400">People out there want to help you</span>
                     </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExtraUser;