import { useEffect } from "react";
import { useState } from "react";
import Blogs from "../blogs/blog";
import "./body.css";

function Body(){
    const[blogs,setBlogs]=useState([]);
    
    useEffect( ()=>{
        fetch('data.json')
        .then( res => res.json())
        .then( data => setBlogs(data))

    },[]);
    
    return(
        <div>
            <div>
                {
                    blogs.map(blog=>
                        <Blogs key={blog.id} blog={blog}></Blogs>
                    )
                }
            </div>
            <div>
                <h3>Bookmarked Blogs</h3>
            </div>
        </div>
    )
}

export default Body;