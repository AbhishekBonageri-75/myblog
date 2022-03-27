import React from "react";
import { useState } from "react";

const Home = () => {

    const [name , setName] = useState("Abhishek");
    const [age , setAge] = useState("21");

    function sayHello() {
        setName('Pachhu');
        setAge(25);
    }


    return ( 
        <div className="homeContent">
            <h2> This is home page</h2>
            <p>{name} is {age}</p>
            <button  onClick={sayHello}>Click me</button> {/* passing the data to another function on button click  */}
        </div>
     );
}
 
export default Home;