import { useEffect } from "react";
import { useState } from "react";
import LeftSection from "../left-section/left-section";
import RightSection from "../right-section/right-section";
import "./body.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Body(){
    const[blogs,setBlogs]=useState([]);
    const[totalTime,setTotalTime]=useState(0);
    const[bookmark,setBookmark]=useState([]);
    
    useEffect( ()=>{
        fetch('data.json')
        .then( res => res.json())
        .then( data => setBlogs(data))

    },[]);

    const totalTimeSpent=(newSpentTime)=>{
        setTotalTime(totalTime+newSpentTime);
    }

    const bookmarkBlogs=(x)=>{
        setBookmark([...bookmark,x]);
        if(bookmark.includes(x,0)){
            console.log('already exist');
            toast("this item already exist");
        }
    }

    return(
        <div className="body">
            <div>
                {
                    blogs.map(blog=>
                        <LeftSection key={blog.id} blog={blog} totalTimeSpent={totalTimeSpent} bookmarkBlogs={bookmarkBlogs}></LeftSection>
                    )
                }
            </div>
            <RightSection totalTime={totalTime} bookmark={bookmark}></RightSection>
            <ToastContainer />
        </div>
    )
}

export default Body;