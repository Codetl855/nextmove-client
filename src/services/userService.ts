import { request } from "@/lib/api";
import { API_ROUTES } from "@/constants/apiRoutes";

export interface UpdateProfilePayload {
    mobile: string;
    email: string;
    address: string;
    password?: string;
    confirmPassword?: string;
    profileImage?: File;
}

export const updateProfile = async (data: UpdateProfilePayload) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            if (value instanceof File) {
                console.log(`File has been uploaded`, value)
                formData.append(key, value);
            } else {
                formData.append(key, String(value));
            }
        }
    });

    formData.append("_method", "PUT")

    return request("post", API_ROUTES.USER.UPDATE_PROFILE, formData);
};