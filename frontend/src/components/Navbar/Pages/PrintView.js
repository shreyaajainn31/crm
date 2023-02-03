import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css'
import Navbar from '../Navbar';
function PrintView() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/contact/viewContacts')
      .then(response => setContacts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      
      {contacts.map(contact => (
        <div key={contact.id} className = "print-contact">
           <div className = 'name-email'>
            <p>Name: {contact.firstName} {contact.lastName}</p>
            <p>Email: {contact.email}</p>
          </div>
          <div className='buttons'>
            <button> Update </button>
            <button> Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PrintView;
