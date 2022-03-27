import React from "react";
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
   
    
    const [blogs,setBlogs] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);


   useEffect(() =>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
           if(!res.ok){
               throw Error('Error while fetching blogs');
           }
           return res.json();
       })
       .then(data=>{
            setBlogs(data);
            setIsLoading(false);
            setError(null);
       })
       .catch(err => {
            setIsLoading(false);
            setError(err.message);
       })
   },[])

    return ( 
        <div className="homeContent">
            {error && <div className="error">{error}</div>}
            {isLoading && <div>Loading Blogs ......</div>}
            {blogs && <Bloglist blogs={blogs} title={"All Blogs"}/>}
        </div>
     );
}
 
export default Home;