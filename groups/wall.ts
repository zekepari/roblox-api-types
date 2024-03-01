export interface GroupWallPostV2Model {
    id: number;
    poster: UserGroupRole;
    body: string;
    created: string;
    updated: string;
};

export interface UserGroupRole {
    user: UserModel;
    role: GroupRole;
}

export interface UserModel {
    buildersClubMembershipType: number;
    hasVerifiedBadge: boolean;
    userId: number;
    username: string;
    displayName: string;
}

export interface GroupRole {
    id: number;
    name: string;
    description: string;
    rank: number;
    memberCount: number;
}