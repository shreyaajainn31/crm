import React, {Component} from "react";
import PrintView from "./PrintView";
import Navbar from "../Navbar";
const ViewContact = () => {
    
    return (
        <div>
            <Navbar/>
           <h2>These are the contacts </h2>
           <PrintView/>
        </div>
    )
}
export default ViewContact;