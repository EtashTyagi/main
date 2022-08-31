export default interface LikeResponse {
    totalLikes: number;
    userLiked: boolean;
    message?: string;
}

export const DEFAULT_LIKE_RESPONSE: LikeResponse = {
    totalLikes: 0,
    userLiked: false
}

