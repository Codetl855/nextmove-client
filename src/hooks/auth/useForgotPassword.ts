import { useState } from "react";
import { forgotPassword, ForgotPasswordPayload } from "@/services/authService";
import { showError, showSuccess } from "@/lib/toast";
import { ensureCsrfCookie } from "@/lib/csrf";
import { HTTP_STATUS } from "@/constants/httpStatus";

export const useForgotPassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleForgotPassword = async (data: ForgotPasswordPayload) => {
        setIsSubmitting(true);
        setError(null);
        try {
            await ensureCsrfCookie();
            const res = await forgotPassword(data);

            showSuccess(res?.message || "Password reset link sent");
        } catch (err: any) {
            const status = err.response?.status;
            const message =
                status === HTTP_STATUS.SERVER_ERROR
                    ? "500 | Server error"
                    : err.response?.data?.message;
            setError(message);
            showError(message);
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { handleForgotPassword, isSubmitting, error };
};