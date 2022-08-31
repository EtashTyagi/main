package com.et.main.models.documents;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.redis.core.index.Indexed;

import java.util.Date;

@Setter
@Getter
@RequiredArgsConstructor
@NoArgsConstructor
@Document("likes")
public class Like {
    @Id
    @Indexed
    @NonNull private String sessionId;
    @NonNull private Date date;
}
