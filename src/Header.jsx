import React from "react";
import {Link } from "react-router-dom";

const Header =()=>{
  return(
    <>
      <header className="headerContainer">
        <div className="Logo">Pi-xcels <span className="movieSpan" >Movies</span ></div>
        <div className="link"><Link to="/">Home</Link></div>        
      </header> 
    </>
  )
  
}
export default Header;