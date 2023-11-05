import { Link } from "react-router-dom";
import logo from '../assets/logo.png'


const Header = () => {
    const navItems =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'> Available Foods</Link></li>
    <li><Link>Add Food</Link></li>
<li><Link>Manage My Foods</Link></li>
<li><Link>My Food Request</Link></li>

   
    
    </>
    return (
        <div>
              <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-amber-700 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case mb-10 text-xl"><div className="mb-10"><img className="w-[100px] bg-transparent" src={logo} alt="" /></div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-amber-700 px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn bg-amber-500 text-white btn-warning">Login</button>
  </div>
</div>
        </div>
    );
};

export default Header; 