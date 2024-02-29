export interface RobloxGroupsApiCreateWallPostRequest {
    body: string;
    captchaId: string;
    captchaToken: string;
    captchaProvider: string;
    challengeId: string;
}

export interface RobloxGroupsApiGroupMembershipResponse {
    group: RobloxWebResponsesGroupsGroupBasicResponse;
    role: RobloxWebResponsesGroupsGroupRoleBasicResponse;
}

export interface RobloxGroupsApiGroupRoleResponse {
    id: number; // integer($int64)
    name: string;
    description: string;
    rank: number; // integer($int32)
    memberCount: number; // integer($int64)
}

export interface RobloxGroupsApiGroupWallPostV2Model {
    id: number; // integer($int64)
    poster: RobloxGroupsApiUserGroupRoleResponse;
    body: string;
    created: string; // ($date-time)
    updated: string; // ($date-time)
}

export interface RobloxGroupsApiModelsResponseUserModel {
    buildersClubMembershipType: number; // integer($int32)
    hasVerifiedBadge: boolean;
    userId: number; // integer($int64)
    username: string;
    displayName: string;
}

export interface RobloxGroupsApiUserGroupRoleResponse {
    user: RobloxGroupsApiModelsResponseUserModel;
    role: RobloxGroupsApiGroupRoleResponse;
}

export interface RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfo {
    SortOrder: number; // integer($int32) readOnly
    PagingDirection: number; // integer($int32) readOnly
    Count: number; // integer($int32) readOnly
}

export interface RobloxWebResponsesGroupsGroupBasicResponse {
    id: number; // integer($int64)
    name: string;
    memberCount: number; // integer($int64)
    hasVerifiedBadge: boolean;
}

export interface RobloxWebResponsesGroupsGroupResponseV2 {
    id: number; // integer($int64)
    name: string;
    description: string;
    owner: RobloxWebResponsesRelatedEntityTypeResponse;
    memberCount: number; // integer($int64)
    created: string; // ($date-time)
    hasVerifiedBadge: boolean;
}

export interface RobloxWebResponsesGroupsGroupRoleBasicResponse {
    id: number; // integer($int64)
    name: string;
    rank: number; // integer($int32)
}

export interface RobloxWebResponsesRelatedEntityTypeResponse {
    id: number; // integer($int64)
    type: number; // integer($int32)
    name: string;
}