package com.et.main.controller;

import com.et.main.models.responses.LikeResponse;
import com.et.main.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class LikeController {
    private final LikeService likeService;

    @Autowired
    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping(value = "/like")
    public ResponseEntity<LikeResponse> getLikes(HttpServletRequest request) {
        return ResponseEntity.ok(likeService.getLikeInfo(request.getSession().getId()));
    }
    @PostMapping(value = "/like")
    public ResponseEntity<LikeResponse> addLike(HttpServletRequest request) {
        return ResponseEntity.ok(likeService.insertLike(request.getSession().getId()));
    }
    @DeleteMapping(value = "/like")
    public ResponseEntity<LikeResponse> deleteLike(HttpServletRequest request) {
        return ResponseEntity.ok(likeService.deleteLikeInfo(request.getSession().getId()));
    }

}
