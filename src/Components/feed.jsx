import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../Utls/feedSlice';
import { FeedCard } from './feedcard';
import { BASE_URL } from '../Utls/constant';

export const Feed = () => {
    const feed = useSelector((state) => state.feed);
    const dispatch = useDispatch();
    const feedData = async() => {
        try{
            const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
            dispatch(addFeed(res.data));
        }catch (error) {
            console.error("Failed to fetch feed data:", error);
        }
    }

    useEffect(() => {
        feedData();
    }, []);

    console.log(feed);

    return (
        <div className='flex justify-center gap-y-4 my-8'>
            {feed?.data?.length > 0 ? (
                <FeedCard feed={feed.data[feed.data.length - 1]} />
            ) : (
                <p>No feed data available.</p>
            )}
            
        </div>
    )
}

