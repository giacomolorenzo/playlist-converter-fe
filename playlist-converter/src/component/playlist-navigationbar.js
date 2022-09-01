import React,{useState}from 'react';
import { Link,NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


function Header(props){
 const [pages,setPages] = useState(['Home','Service','Product','Pricing'])
 const [token,setToken] = useState('')
    return(
        <nav>
            <div className="nav-wrapper cyan darken-3">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li key={"Service"+uuidv4()}><NavLink as={Link} to="/service">Service</NavLink></li>
            <li key={"Product"+uuidv4()} ><NavLink as={Link} to="/product">Product</NavLink></li>
                <li key={"Pricing"+uuidv4()} ><NavLink as={Link} to="/pricing">Pricing</NavLink> </li>
                <li key={"pricing"+uuidv4()} ><NavLink as={Link} to="/about">About</NavLink> </li>
                <li key={"login"+uuidv4()} ><NavLink as={Link} to="/login">Login</NavLink> </li>
            </ul>
            </div>
        </nav>
    )


}

export default Header;
