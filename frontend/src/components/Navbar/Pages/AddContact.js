import React from "react";

import ContactForm from "./ContactForm";
import Navbar from "../Navbar";
function AddContact(){
    return(
        <div>
        <Navbar/>
        <h2> Add a contact </h2>,
        <ContactForm/>
        </div>
    )
}

export default AddContact;