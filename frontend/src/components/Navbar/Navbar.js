import React,{Component, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = e => {

    setClick(!click)
  };
    return(
        <nav className="NavbarItems">
        <ul className = 'li-class'>
           <li><Link to = "/"> Logo </Link></li>
            <li>  <Link to = "/contact"> Contacts </Link> </li> 
            <li> <Link  to="/addContact" > Add Contact</Link> </li>
        </ul>
        </nav>
    )
}