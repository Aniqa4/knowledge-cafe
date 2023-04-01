import { useEffect } from "react";
import { useState } from "react";
import LeftSection from "../left-section/left-section";
import RightSection from "../right-section/right-section";
import "./body.css";

function Body(){
    const[blogs,setBlogs]=useState([]);
    
    useEffect( ()=>{
        fetch('data.json')
        .then( res => res.json())
        .then( data => setBlogs(data))

    },[]);
    
    return(
        <div className="body">
            <div>
                {
                    blogs.map(blog=>
                        <LeftSection key={blog.id} blog={blog}></LeftSection>
                    )
                }
            </div>
            <RightSection></RightSection>
        </div>
    )
}

export default Body;