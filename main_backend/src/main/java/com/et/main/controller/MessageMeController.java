package com.et.main.controller;

import com.et.main.service.MessageMeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class MessageMeController {
    private final MessageMeService messageMeService;

    @Autowired
    public MessageMeController(MessageMeService messageMeService) {
        this.messageMeService = messageMeService;
    }

    @PostMapping(value = "/message")
    public ResponseEntity<String> sendMessage(@RequestParam String sentBy, HttpServletRequest request) {
        messageMeService.saveMessage();
        return ResponseEntity.ok().body("");
    }
}
