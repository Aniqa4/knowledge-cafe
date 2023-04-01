import { useEffect } from "react";
import { useState } from "react";
import LeftSection from "../left-section/left-section";
import RightSection from "../right-section/right-section";
import "./body.css";

function Body(){
    const[blogs,setBlogs]=useState([]);
    const[totalTime,setTotalTime]=useState(0);
    
    useEffect( ()=>{
        fetch('data.json')
        .then( res => res.json())
        .then( data => setBlogs(data))

    },[]);

    const totalTimeSpent=(newSpentTime)=>{
        setTotalTime(totalTime+newSpentTime);
    }

    return(
        <div className="body">
            <div>
                {
                    blogs.map(blog=>
                        <LeftSection key={blog.id} blog={blog} totalTimeSpent={totalTimeSpent}></LeftSection>
                    )
                }
            </div>
            <RightSection totalTime={totalTime}></RightSection>
        </div>
    )
}

export default Body;