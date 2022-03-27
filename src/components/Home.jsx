import React from "react";
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
   
    
    const [blogs,setBlogs] = useState([
        {title: "Mobile Development",body:"Blog content ... 1" , author: "Abhishek",id:1},
        {title: "SpringBoot Applications",body:"Blog content ... 2" , author: "Prasad",id:2},
        {title: "Web Development",body:"Blog content ... 3" , author: "Ravi",id:3}
    ]);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }

   useEffect(() =>{
       console.log("Rendered"); // this will be called everytime the component is rendered
   })

    return ( 
        <div className="homeContent">
           <Bloglist blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;