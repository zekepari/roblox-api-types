export interface RobloxThumbnailsApiModelsUniverseThumbnailsResponse {
    description: string;
    universeId: number; // integer($int64)
    error: RobloxWebWebAPIModelsApiErrorModel;
    thumbnails: any[];
}

export interface RobloxThumbnailsApisModelsThumbnailBatchRequest {
    requestId: string;
    targetId: number; // integer($int64)
    token: string;
    alias: string;
    type: string; // ['Avatar' = 1, 'AvatarHeadShot' = 2, 'GameIcon' = 3, 'BadgeIcon' = 4, 'GameThumbnail' = 5, 'GamePass' = 6, 'Asset' = 7, 'BundleThumbnail' = 8, 'Outfit' = 9, 'GroupIcon' = 10, 'DeveloperProduct' = 11, 'AvatarBust' = 12, 'AutoGeneratedAsset' = 13, 'PlaceIcon' = 14, 'AutoGeneratedGameIcon' = 15, 'ForceAutoGeneratedGameIcon' = 16, 'Look' = 17]
    size: string;
    format: string;
    isCircular: boolean;
}

export interface RobloxThumbsImageParameters {
    Width: number; // integer($int32)
    Height: number; // integer($int32)
    Format: string;
    IsCircular: boolean;
    FileExtension: string;
    MimeType: string;
}

export interface RobloxWebResponseThumbnailsThumbnailBatchResponse {
    requestId: string;
    errorCode: number; // integer($int32)
    errorMessage: string;
    targetId: number; // integer($int64)
    state: string; // ['Error' = 0, 'Completed' = 1, 'InReview' = 2, 'Pending' = 3, 'Blocked' = 4, 'TemporarilyUnavailable' = 5]
    imageUrl: string;
    version: string;
}

export interface RobloxWebResponseThumbnailsThumbnailResponse {
    targetId: number; // integer($int64)
    state: string; // ['Error' = 0, 'Completed' = 1, 'InReview' = 2, 'Pending' = 3, 'Blocked' = 4, 'TemporarilyUnavailable' = 5]
    imageUrl: string;
    version: string;
}

export interface RobloxWebWebAPIModelsApiErrorModel {
    code: number; // integer($int32)
    message: string;
    userFacingMessage: string;
    field: string;
    fieldData: any;
}