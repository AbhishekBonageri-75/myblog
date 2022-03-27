import React from "react";
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
   
    
    const [blogs,setBlogs] = useState(null);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }

   useEffect(() =>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
           return res.json();
       })
       .then(data=>{
            setBlogs(data);
       })
   },[])

    return ( 
        <div className="homeContent">
          {blogs && <Bloglist blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;