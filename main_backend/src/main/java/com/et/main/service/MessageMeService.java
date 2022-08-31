package com.et.main.service;

import com.et.main.repository.MessageMeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageMeService {
    private final MessageMeRepository messageMeRepository;

    @Autowired
    public MessageMeService(MessageMeRepository messageMeRepository) {
        this.messageMeRepository = messageMeRepository;
    }

    public void saveMessage() {
        System.out.println("SAVED");
    }
}
