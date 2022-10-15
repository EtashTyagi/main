package com.et.main.controller;

import com.et.main.models.responses.LikeResponse;
import com.et.main.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("${apiPrefix}/like")
public class LikeController {
    private final LikeService service;

    @Autowired
    public LikeController(LikeService likeService) {
        this.service = likeService;
    }

    @GetMapping
    public ResponseEntity<LikeResponse> getLikes(HttpServletRequest request) {
        return ResponseEntity.ok(service.getLikeInfo(request.getSession().getId()));
    }
    @PostMapping
    public ResponseEntity<LikeResponse> addLike(HttpServletRequest request) {
        return ResponseEntity.ok(service.insertLike(request.getSession().getId()));
    }
    @DeleteMapping
    public ResponseEntity<LikeResponse> deleteLike(HttpServletRequest request) {
        return ResponseEntity.ok(service.deleteLikeInfo(request.getSession().getId()));
    }

}
