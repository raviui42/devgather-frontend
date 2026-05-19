import { FeedCard } from "./feedcard";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { addUser } from "../Utls/userSlice";
import { BASE_URL } from "../Utls/constant.js";

export const EditProfile = ({user}) => {
    const { firstName, lastName, about, photoUrl, Skills, age} = user;
      const [formData, setFormData] = useState({
        firstName: firstName || "",
        lastName: lastName || "",
        about: about || "",
        photoUrl: photoUrl || "",
        age: age || "",
        Skills: Skills || [],
        gender: user?.gender || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const updateDetails = async() => {
        try {
            const updateRes = await axios.patch(`${BASE_URL}/profile/edit`, 
             formData
            , { withCredentials: true });

            dispatch(addUser(updateRes.data));

        } catch (error) {
            setError(error.response?.data || 'Failed to update profile');
        }
    }

    return (
        <div className="flex justify-center gap-x-8 my-8">
            <div className="card bg-base-100 w-96 card-bordershadow-sm shadow-lg">
                <div className="card-body gap-y-8">
                    <h2 className="card-title flex justify-center font-black text-4xl">Edit Profile</h2>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <label className="input validator">

                                <input type="input" name="firstName" value={formData.firstName} placeholder="firstname" onChange={handleChange} />
                            </label>
                    
                        </div> 
                        <div>
                            <label className="input validator">

                                <input type="input" name="lastName" value={formData.lastName} placeholder="lastname" onChange={handleChange} />
                            </label>
                        </div> 
                        <div>
                            <label className="input validator">

                                <input type="input" name="about" value={formData.about}  placeholder="about" onChange={handleChange} />
                            </label>
                        </div> 
                         <div>
                            <label className="input validator">

                                <input type="input" name="age" value={formData.age}  placeholder="age" onChange={handleChange} />
                            </label>
                        </div> 
                     <select className="select select-bordered"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                         <div>
                            <label className="input validator">

                                <input type="url" name="photoUrl" value={formData.photoUrl} placeholder="URL" onChange={handleChange} />
                            </label>
                        </div> 
                    </div>
             
                {error &&
                <p className="text-red-500">{error}</p>} 
                <div className="card-actions justify-center">
                <button className="btn btn-primary text-xl" onClick={updateDetails}>Save details</button>
                </div>
            </div>
            </div>
            <FeedCard feed={{ firstName: formData.firstName, lastName: formData.lastName, about: formData.about, photoUrl: formData.photoUrl, age: formData.age }} />
        </div>
    )
}