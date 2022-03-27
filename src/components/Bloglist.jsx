import React from "react";
const Bloglist = ({blogs , title }) => {
    return ( 
        <div className="bloglist">
            <h1 style={{fontWeight: 'bold', color: '#5d98f7'}}>{title}</h1>
             {blogs.map((blog)=>(
                <div className="fulldiv">
                    <div className="preview" key={blog.id}> 
                        <h2>{blog.title}</h2>
                        <h5>Author : {blog.author}</h5>
                        {/* <p>{blog.body}</p>     */}
                    </div>
                    <div className="options">
                        <ul>
                            {/* <li><button onClick={()=> handleDelete(blog.id)}>Delete</button></li> */}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;