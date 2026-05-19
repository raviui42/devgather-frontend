import { Outlet , useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Navbar } from "./Components/navbar";
import { addUser } from "./Utls/userSlice.js";
import { BASE_URL } from "./Utls/constant.js";

export const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true });
            dispatch(addUser(res.data));
        }catch (error) {
            if(error.status === 401) {
                navigate('/login');
            }
            console.error("Failed to fetch user data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
       <>
           <Navbar />
           <Outlet />
       </>
    )
}
