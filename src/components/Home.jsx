import React from "react";
import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [title , setTitle] = useState();
    const [author , setAuthor] = useState();
    const [body , setBody] = useState();
    
    const [blogs,setBlogs] = useState([
        {title: "Mobile Development",body:"Blog content ... 1" , author: "Abhishek",id:1},
        {title: "SpringBoot Applications",body:"Blog content ... 2" , author: "Prasad",id:2},
        {title: "Web Development",body:"Blog content ... 3" , author: "Ravi",id:3}
    ]);

   

    return ( 
        <div className="homeContent">
           <Bloglist blogs={blogs} title={"All Blogs"}/>
           <Bloglist blogs={blogs.filter((blog)=>blog.author==="Abhishek")} title={"Abhishek's Blogs"}/> {/* searching for a specific blog by its author */}
           
        </div>
     );
}
 
export default Home;