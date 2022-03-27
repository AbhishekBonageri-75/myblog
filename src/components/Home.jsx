import React from "react";
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
   
    
    const [blogs,setBlogs] = useState(null);
    const [isLoading , setIsLoading] = useState(true);


   useEffect(() =>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
           return res.json();
       })
       .then(data=>{
            setBlogs(data);
            setIsLoading(false);
       })
   },[])

    return ( 
        <div className="homeContent">
            {isLoading && <div>Loading Blogs ......</div>}
            {blogs && <Bloglist blogs={blogs} title={"All Blogs"}/>}
        </div>
     );
}
 
export default Home;