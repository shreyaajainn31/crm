package com.crm.crm.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import org.springframework.web.bind.annotation.*;
import com.crm.crm.Model.Contact;
import com.crm.crm.Service.ContactService;


@RestController
@RequestMapping("/contact")
public class ContactController{
    
    @Autowired
    private ContactService contactService;

    @CrossOrigin
    @GetMapping("/viewContacts")
    public List<Contact> getContacts(){
        return contactService.getContacts();
    }

    @CrossOrigin
    @PostMapping("/addContact")
    public String addContact(@RequestBody Contact contact){
          return contactService.addContact(contact);
    }
    @CrossOrigin
    @PutMapping("/updateContact")
    public String updateContact(@RequestBody Contact contact){
        return contactService.updateContact(contact);
    }

    @CrossOrigin
    @DeleteMapping("/deleteContact")
    public String deleteContact(@RequestParam("id") int id){
        return contactService.deleteContact(id);
    }
}
