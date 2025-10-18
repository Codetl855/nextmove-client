import FeaturedProperties from "@/components/home/featuredProperties/FeaturedProperties";
import Home from "@/pages/Home";

export const API_ROUTES = {
    AUTH: {
        SIGNUP: "/register",
        CSRF_TOKEN: "/csrf-cookie",
        SIGNIN: "/login",
        LOGOUT: "/logout",
        FORGOT_PASSWORD: "/forgot-password",
        VERIFY_EMAIL: "/email/verify",
        RESEND_VERIFICATION: "/email/verification-notification",
        RESET_PASSWORD: "/reset-password",
       
    },
    USER: {
        GET_USER: "v1/user",
        UPDATE_PROFILE: "v1/user/update-profile",
    },
    PROPERTY: {
        CREATE: "v1/properties",
        LIST: "v1/properties",
        SHOW: (id: number | string) => `v1/properties/${id}`,
        UPDATE: (id: number | string) => `v1/properties/${id}`,
        DELETE: (id: number | string) => `v1/properties/${id}`,
        GET_PROPERTY: (id: number | string) => `v1/get-property/${id}`,
    },
    HOME: {
        FEATURED_PROPERTIES: (type: string) => `/v1/featured-properties/?type=${type}`,
    },
} as const;