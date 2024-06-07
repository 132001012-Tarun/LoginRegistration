package com.example.registrationlogindemo.entity;

import org.junit.jupiter.api.Test;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void setName() {
        User user = new User();
        user.setName("abc");
        assertEquals("abc", user.getName());
    }

    @Test
    void setEmail() {
        User user = new User();
        user.setEmail("abc@abc");
        assertEquals("abc@abc", user.getEmail());
    }
}