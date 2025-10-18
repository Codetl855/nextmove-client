import { API_ROUTES } from "@/constants/apiRoutes";
import { request } from "@/lib/api";
export type SignupPayload = {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    password_confirmation: string;
}

export type LoginPayload = {
    email: string;
    password: string;
}

export type ForgotPasswordPayload = {
    email: string;
}

export type ResetPasswordPayload = {
    email: string;
    token: string;
    password: string;
    password_confirmation: string;
};

export type UpdateProfilePayload = {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    address?: string;
    profile_image?: string | File;
};

export const signup = async (data: SignupPayload) => {
    return request("post", API_ROUTES.AUTH.SIGNUP, data);
};

export const login = async (data: LoginPayload) => {
    return request("post", API_ROUTES.AUTH.SIGNIN, data);
};

export const logout = async () => {
    return request("post", API_ROUTES.AUTH.LOGOUT);
};

export const forgotPassword = async (data: ForgotPasswordPayload) => {
    return request("post", API_ROUTES.AUTH.FORGOT_PASSWORD, data);
};

export const verifyEmail = async (redirectUrl: string) => {
    const apiBase = import.meta.env.VITE_API_BASE_URL;
    const url = redirectUrl.startsWith(apiBase)
        ? redirectUrl.replace(apiBase, "")
        : redirectUrl;

    return request("get", url);
};

export const resendVerification = async () => {
    return request("post", API_ROUTES.AUTH.RESEND_VERIFICATION);
};

export const resetPassword = async (data: ResetPasswordPayload) => {
    return request("post", API_ROUTES.AUTH.RESET_PASSWORD, data);
};

export const getUser = async () => {
    return request("get", API_ROUTES.USER.GET_USER);
};

export const updateProfile = async (data: UpdateProfilePayload) => {
  return request("put", API_ROUTES.USER.UPDATE_PROFILE, data);
};
