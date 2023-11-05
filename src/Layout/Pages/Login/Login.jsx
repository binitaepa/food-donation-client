import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

import img from '../../../assets/undraw_mobile_payments_re_7udl.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Login = () => {
    const {signIn,signInWithGoogle}=useContext(AuthContext)
   
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
const location=useLocation();
const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
      const form=new FormData(e.currentTarget);
      
      const email= form.get('email');
      const password=form.get('password');
      console.log(email,password)
      setRegisterError('');
      setSuccess('');

    signIn(email,password)
    .then(result=>{console.log(result);
        navigate(location?.state? location.state:'/');
        if(result){
            setSuccess('User Logged in Successfully.')
        }
        else{
            setSuccess('Please verify your email address.')
        }
    })
    .catch(error=>{
        console.error(error)
    setRegisterError(error.message);
}
)
    }
    const handleGoogle= () =>{
        signInWithGoogle()
        .then(result=>{console.log(result)})
        .catch(error=>{console.error(error)})
    }
    
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-200">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Nourish Neighbor <Link className='text-orange-600 font-bold' to="/registration">Register Now</Link> </p>

                        <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-3xl">Login With</h2>
                <button onClick={handleGoogle} className="btn btn-outline w-full text-white bg-pink-500">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <h2 className="text-3xl items-center flex justify-center">OR</h2>
            </div>










</div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;