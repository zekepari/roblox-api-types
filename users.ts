export interface RobloxPagingExclusiveStartKeyCursor<T> {
    key: number; // integer($int64)
    sortOrder: number; // integer($int32) ['Asc' = 1, 'Desc' = 2]
    pagingDirection: number; // integer($int32) ['Forward' = 1, 'Backward' = 2]
    pageNumber: number; // integer($int32)
    discriminator: string;
    count: number; // integer($int32)
}

export interface RobloxPagingStartIndexCursor {
    startIndex: number; // integer($int64)
    discriminator: string;
    count: number; // integer($int32)
}

export interface RobloxUsersApiAuthenticatedUserResponse {
    id: number; // integer($int64)
    name: string;
    displayName: string;
}

export interface RobloxUsersApiBirthdateRequest {
    birthMonth: number; // integer($int32)
    birthDay: number; // integer($int32)
    birthYear: number; // integer($int32)
    password: string;
}

export interface RobloxUsersApiBirthdateResponse {
    birthMonth: number; // integer($int32)
    birthDay: number; // integer($int32)
    birthYear: number; // integer($int32)
}

export interface RobloxUsersApiDescriptionRequest {
    description: string;
}

export interface RobloxUsersApiDescriptionResponse {
    description: string;
}

export interface RobloxUsersApiGenderRequest {
    gender: string;
}

export interface RobloxUsersApiGenderResponse {
    gender: number; // integer($int32)
}

export interface RobloxUsersApiGetUserResponse {
    created: string; // ($date-time)
    isBanned: boolean;
    externalAppDisplayName: string;
    hasVerifiedBadge: boolean;
    id: number; // integer($int64)
    name: string;
    displayName: string;
}

export interface RobloxUsersApiMultiGetByUserIdRequest {
    userIds: number[]; // integer($int64)[]
    excludeBannedUsers: boolean;
}

export interface RobloxUsersApiMultiGetByUsernameRequest {
    usernames: string[];
    excludeBannedUsers: boolean;
}

export interface RobloxUsersApiMultiGetUserByNameResponse {
    requestedUsername: string;
    hasVerifiedBadge: boolean;
    id: number; // integer($int64)
    name: string;
    displayName: string;
}

export interface RobloxUsersApiSetDisplayNameRequest {
    newDisplayName: string;
}

export interface RobloxUsersApiUserAgeBracketResponse {
    ageBracket: number; // integer($int32)
}

export interface RobloxUsersApiUserCountryCodeResponse {
    countryCode: string;
}

export interface RobloxUsersApiUserRolesResponse {
    roles: string[];
}

export interface RobloxUsersApiUserSearchResponse {
    previousUsernames: string[];
    hasVerifiedBadge: boolean;
    id: number; // integer($int64)
    name: string;
    displayName: string;
}

export interface RobloxUsersApiUsernameHistoryResponse {
    name: string;
}

export interface RobloxUsersApiVerifiedBadgeUserResponse {
    hasVerifiedBadge: boolean;
    id: number; // integer($int64)
    name: string;
    displayName: string;
}