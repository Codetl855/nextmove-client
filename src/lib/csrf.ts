import { API_ROUTES } from "@/constants/apiRoutes";
import { api } from "@/lib/api";

let csrfInitialized = false;

export const ensureCsrfCookie = async () => {
    if (!csrfInitialized) {
        try {
            await api.get(API_ROUTES.AUTH.CSRF_TOKEN);
            csrfInitialized = true;
        } catch (err) {
            console.error("Failed to fetch CSRF cookie:", err);
            throw err;
        }
    }
};

export const resetCsrf = () => {
    csrfInitialized = false;
};