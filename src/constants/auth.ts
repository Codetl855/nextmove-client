export const LOGIN_TYPES = {
    EMAIL: "email",
    MOBILE: "mobile",
} as const;

export type LoginType = (typeof LOGIN_TYPES)[keyof typeof LOGIN_TYPES];
