package com.et.main.controller;

import com.et.main.service.MessageMeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("${apiPrefix}/message")
public class MessageMeController {
    private final MessageMeService service;

    @Autowired
    public MessageMeController(MessageMeService messageMeService) {
        this.service = messageMeService;
    }

    @PostMapping
    public ResponseEntity<String> sendMessage(@RequestParam String sentBy, HttpServletRequest request) {
        service.saveMessage();
        return ResponseEntity.ok().body("");
    }
}
