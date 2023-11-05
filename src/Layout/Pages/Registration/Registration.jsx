import { Link } from "react-router-dom";
import img from '../../../assets/undraw_mobile_payments_re_7udl.svg'
import { LinkIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {
    const {createUser}=useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name= form.get('name');
        const email=form.get('email')
        const password=form.get('password')
        const photo=form.get('photo')
        console.log(name,email,password,photo)

        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
       
        createUser(email,password)
      .then(result=>{console.log(result);
        setSuccess('User Created Successfully.')
    toast('You have registered successfully!')})
      .catch(error=>{
        console.error(error)
      })
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
                        <h1 className="text-3xl text-center font-bold">Register NOW!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Photo URL<LinkIcon className="text-black ml-2"></LinkIcon></span>
                                </label>
                                <input type="photo" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-amber-100 text-black" type="submit" value="Register" />
                            </div>
                        </form> 
                        {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 ml-10">{success}</p>
                }
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;