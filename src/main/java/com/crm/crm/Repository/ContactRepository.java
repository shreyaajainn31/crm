package com.crm.crm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.*;

import javax.transaction.Transactional;

import com.crm.crm.Model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Integer>{

    String getContactQuery = "SELECT * FROM contact";
    @Query(value = getContactQuery, nativeQuery = true)
    List<Contact> getContacts();

    
    String updateQuery = "Update contact set firstname=:first, lastname=:last, email=:email where id=:id";
    @Modifying
    @Query(value = updateQuery, nativeQuery = true)
    int updateContact(@Param("first")String firstName, @Param("last")String lastName, @Param("email") String email, @Param("id") int id);
    
    @Modifying
    @Transactional
    @Query(value = "delete from contact where id = :id", nativeQuery = true)
    int deleteContact(@Param("id") int id);
    
    
}
