package com.et.main.repository;

import com.et.main.models.documents.Like;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LikeRepository extends MongoRepository<Like, String> {
}
