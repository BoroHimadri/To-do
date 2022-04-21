import React from "react";
import './Header.css';
function Header () {
    return (
    <div className="ui header">
        <div className="ui container center" >
            <h1 style={{color: "red", textAlign:"center" }}>My To-Do List</h1>
        </div>    
    </div>
    );
};


export default Header;