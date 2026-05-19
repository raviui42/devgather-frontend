import { useDispatch } from "react-redux";
import { addConnection } from "../Utls/connectionSlice";
import {  useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../Utls/constant";
import axios from "axios";
export const Connection = () => {
    const dispatch = useDispatch();
    const connectionData = useSelector((store) => store.connection);

    const fetchConnections = async () => {
        try{
            const res = await axios(`${BASE_URL}/user/connections`, {withCredentials: true});
            dispatch(addConnection(res?.data?.data));
        } catch (error) {
            console.error("Error fetching connections:", error);
        }
    };

    useEffect(() => {
        fetchConnections();
    }
    , []);

    console.log(connectionData);
  return (
    <div className="flex flex-col items-center gap-y-4 my-8">
      <h2 className="text-lg font-semibold">Connections</h2>
         {connectionData?.length > 0 ? (
            connectionData.map((connection) => (
                <div key={connection.id} className="shadowcard w-96 bg-base-100 shadowcard-xs shadow-sm">
                    <div className="shadowcard-body flex gap-x-4">
                        <div className="figure w-24 h-24 rounded-full overflow-hidden">
                            <img src={connection.photoUrl} alt={`${connection.firstName} ${connection.lastName}`} />
                        </div>
                        <div>
                            <h2 className="shadowcard-title">{connection.firstName + ' ' + connection.lastName}</h2>
                            <p>{connection.about}</p>
                            <p>Skills: {connection.Skills.join(', ')}</p>
                            <p>Age: {connection.age}</p>
                        </div>
                    </div>
                </div>
            ))
         ) : (
            <p>No connections found.</p>
        )}
    </div>
  );
};
