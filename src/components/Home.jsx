import React from "react";
import { useState } from "react";

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
            {blogs.map((blog)=>(
                <div className="fulldiv">
                    <div className="preview" key={blog.id}> 
                        <h2>{blog.title}</h2>
                        <h5>Author : {blog.author}</h5>
                        <p>{blog.body}</p>    
                    </div>
                    <div className="options">
                        <ul>
                            <li>Delete</li>
                            <li>Edit</li>
                
                        </ul>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Home;