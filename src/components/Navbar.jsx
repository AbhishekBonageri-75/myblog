import React from 'react';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Blogger</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/allblogs">All Blogs</a>
                <a href="/recentblogs">Recent Blogs</a>
            </div>
        </nav>
    );
}
 
export default Navbar ;