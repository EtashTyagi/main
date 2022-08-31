package com.et.main.models.responses;

import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
public class LikeResponse {
    @NonNull private Integer totalLikes;
    @NonNull private Boolean userLiked;
    private String message;
}
