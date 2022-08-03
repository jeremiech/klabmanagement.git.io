import klab from '../img/klab.jpg';
import {Link} from 'react-router-dom';
// import React, { useState,useEffect } from 'react';

// import axios from 'axios'
// const url = "http://localhost:8000/Employee";




const NavBar = () => {
  



  return (
    <div className='navBar'>
        <img src={klab} alt="klab" className='klab'/>
        <ul className="list">
            <li><Link to="/admin" className='link'>Admin</Link></li>
            <li><Link to="/todo" className='link'>Add todo</Link></li>
            <li><Link to="/login" className='link'>Log In</Link></li>

    
        </ul>
  
    </div>
  )
}

export default NavBar