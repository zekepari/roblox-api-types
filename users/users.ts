export interface GetUserResponse {
    description: string;
    created: string;
    isBanned: boolean;
    externalAppDisplayName: string;
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};

export interface AuthenticatedUserResponse {
    id: number;
    name: string;
    displayName: string;
};

export interface UserAgeBracketResponse {
    ageBracket: number;
};

export interface UserCountryCodeResponse {
    countryCode: string;
};

export interface UserRolesResponse {
    roles: Array<string>
};

export interface MultiGetUserByNameResponse {
    requestedUsername: string;
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};

export interface VerifiedBadgeUserResponse {
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};