import React, {useState} from "react";
import axios from 'axios';
import './Contact.css'
import Navbar from "../Navbar";

export let contactArray = []

function ContactForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const handleFirstNamechange = e => {
        setFirstName(e.target.value);
    }
    const handleLastNamechange = e => {
        setLastName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handleOnclick = e =>{
        const contactObject = {firstName: firstName, lastName: lastName, email: email};
        axios.post('http://localhost:8080/contact/addContact', contactObject)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
    }
   
    return(
        <div>
        
        <form className = 'contact-form' onSubmit={handleSubmit}>
            <label> First Name </label>
            <input type="text" placeholder="first name" value={firstName} onChange={handleFirstNamechange}></input>
            <br></br>
            <label> Second Name </label>
            <input type = 'text' placeholder="second name" value = {lastName} onChange={handleLastNamechange}></input>
            <br></br>
            <label> Email</label>
            <input type = 'text' placeholder="email" value={email} onChange={handleEmailChange}></input>
            <br></br>
            <button onClick={handleOnclick}> Enter </button>
        </form>
        </div>
    )
};
export default ContactForm;