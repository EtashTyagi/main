package com.et.main.service;

import com.et.main.repository.MessageMeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageMeService {
    private final MessageMeRepository repository;

    @Autowired
    public MessageMeService(MessageMeRepository messageMeRepository) {
        this.repository = messageMeRepository;
    }

    public void saveMessage() {
        System.out.println("SAVED");
    }
}
