package com.et.main.repository;

import com.et.main.models.documents.Like;
import com.et.main.models.documents.Message;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface MessageMeRepository extends MongoRepository<Message, String> {

}