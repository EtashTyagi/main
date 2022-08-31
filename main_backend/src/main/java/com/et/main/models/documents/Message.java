package com.et.main.models.documents;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@RequiredArgsConstructor
@NoArgsConstructor
@Document("messages")
public class Message {
    @NonNull  private String sender;
}
