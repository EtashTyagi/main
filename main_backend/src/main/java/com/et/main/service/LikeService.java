package com.et.main.service;

import com.et.main.models.documents.Like;
import com.et.main.models.responses.LikeResponse;
import com.et.main.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class LikeService {
    private final LikeRepository likeRepository;

    @Autowired
    public LikeService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    public LikeResponse getLikeInfo(String sessionId) {
        return new LikeResponse(likeRepository.findAll().size(), likeRepository.findById(sessionId).isPresent());
    }

    public LikeResponse insertLike(String sessionId) {
        LikeResponse previousResponse = getLikeInfo(sessionId);
        if (previousResponse.getUserLiked()) {
            LikeResponse newResponse = getLikeInfo(sessionId);
            newResponse.setMessage("Session has already liked");
            return newResponse;
        } else {
            likeRepository.insert(new Like(sessionId, new Date()));
            return getLikeInfo(sessionId);
        }
    }

    public LikeResponse deleteLikeInfo(String sessionId) {
        LikeResponse previousResponse = getLikeInfo(sessionId);
        if (previousResponse.getUserLiked()) {
            likeRepository.deleteById(sessionId);
            return getLikeInfo(sessionId);
        } else {
            LikeResponse newResponse = getLikeInfo(sessionId);
            newResponse.setMessage("Session tried to delete like without liking.");
            return newResponse;
        }
    }
}
