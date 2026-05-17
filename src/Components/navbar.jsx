
import axios from "axios";
import { useSelector } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeUser } from "../Utls/userSlice.js";


export const Navbar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = useCallback(async() => {
        try {
        await axios.post('/api/logout', {}, { withCredentials: true });
        dispatch(removeUser());
        navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }, [dispatch, navigate]);


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl">DevTogher</Link>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                {
                    user && 
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <span>{user.firstName}</span>
                            <div className="w-10 rounded-full">                            
                            <img
                                alt="profile"
                                src={user.profilePicture || 'https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1778648403~exp=1778652003~hmac=26a17f2c9396fdedce87157ec05152a74ed462ae7208991c7c72dc0e757bac8c&w=1060'} />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <Link to='/profile' className="justify-between">
                                Profile
                            </Link>
                            </li>
                           
                            <li>
                            <Link to='/connection' className="justify-between">
                                Connection
                            </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                }
               
            </div>
        </div>
    )
}