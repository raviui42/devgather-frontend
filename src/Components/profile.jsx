import { EditProfile } from "./EditProfile"
import { useSelector } from 'react-redux';

export const Profile = () => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            {user && <EditProfile user={user}/>}
        </div>
    )
}