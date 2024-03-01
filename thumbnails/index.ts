export interface ThumbnailResponse {
    targetId: number;
    state: string;
    imageUrl: string;
    version: string;
};

export interface ThumbnailBatchResponse {
    requestId: string;
    errorCode: number;
    errorMessage: string;
    targetId: number;
    state: string;
    imageUrl: string;
    version: string;
};