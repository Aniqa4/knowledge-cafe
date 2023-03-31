import { useEffect } from "react";
import { useState } from "react";
import Blogs from "../blogs/blog";
import Bookmarks from "../bookmarks/bookmarks";
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
                        <Blogs key={blog.id} blog={blog}></Blogs>
                    )
                }
            </div>
            <Bookmarks></Bookmarks>
        </div>
    )
}

export default Body;