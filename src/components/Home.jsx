import React from "react";
const Home = () => {

    function sayHello(name) {
        alert("Hello "+name);
    }


    return ( 
        <div className="homeContent">
            <h2> This is home page</h2>
            <button  onClick={() =>sayHello("Abhishek")}>Click me</button> {/* passing the data to another function on button click  */}
            
        </div>
     );
}
 
export default Home;