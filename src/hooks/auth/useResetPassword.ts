import { useState } from "react";
import { resetPassword, ResetPasswordPayload } from "@/services/authService";
import { ensureCsrfCookie } from "@/lib/csrf";
import { showSuccess } from "@/lib/toast";

export const useResetPassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleResetPassword = async (data: ResetPasswordPayload) => {
        setIsSubmitting(true);
        setError(null);
        try {
            await ensureCsrfCookie();
            const res = await resetPassword(data);
            showSuccess(res?.message || "Password reset successfully.");

            return true;
        } catch (err: any) {
            const message = err.response?.data?.message || "Password reset failed.";
            setError(message);

            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { handleResetPassword, isSubmitting, error };
};