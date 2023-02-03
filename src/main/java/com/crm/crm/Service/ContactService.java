package com.crm.crm.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import com.crm.crm.Model.Contact;
import com.crm.crm.Repository.ContactRepository;
import java.util.*;
import javax.transaction.Transactional;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getContacts(){
        return contactRepository.getContacts();
    }
    
    @Transactional
    public String addContact(Contact contact) {
        // int result = contactRepository.addContact(contact.getFirstName(), contact.getLastName(), contact.getEmail());
        Contact newContact = new Contact();
        newContact.setFirstName(contact.getFirstName());
        newContact.setLastName(contact.getLastName());
        newContact.setEmail(contact.getEmail());
        contactRepository.save(newContact);
        return "Succesful";
    }

    @Transactional
    public String updateContact(Contact contact) {
        int result = contactRepository.updateContact(contact.getFirstName(), contact.getLastName(), contact.getEmail(), contact.getId());
        return result ==1 ? "Succesful" : "unsuccesful";
    }

    @Transactional
    public String deleteContact(int id) {
        int result = contactRepository.deleteContact(id);
        return result ==1 ? "Succesful" : "unsuccesful";
        
    }

    

}
