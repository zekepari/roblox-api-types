export interface GroupResponseV2 {
    id: number;
    name: string;
    description: string;
    owner: GroupOwnerType;
    memberCount: number;
    created: string;
    hasVerifiedBadge: boolean;
};

export interface GroupOwnerType {
    id: number;
    type: number;
    name: string;
};

export interface GroupMembershipResponse {
    group: GroupBasicResponse;
    role: GroupRoleBasicResponse;
};

export interface GroupBasicResponse {
    id: number;
    name: string;
    memberCount: number;
    hasVerifiedBadge: boolean;
}

export interface GroupRoleBasicResponse {
    id: number;
    name: string;
    rank: number;
}