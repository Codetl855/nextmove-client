import AuthLayout from "@/layouts/AuthLayout";
import ForgotPasswordForm, { ForgotPasswordFormData } from "@/components/forms/Auth/ForgotPassword";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";
import { useState } from "react";
import { LOGIN_TYPES } from "@/constants/auth";

function ForgotPasswordPage() {
    const { handleForgotPassword, isSubmitting, error } = useForgotPassword();
    const [formData, setFormData] = useState<ForgotPasswordFormData>({
        loginType: LOGIN_TYPES.EMAIL,
        email: "",
        mobile: "",
    });


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.loginType === LOGIN_TYPES.EMAIL) {
            await handleForgotPassword({ email: formData.email });
        } else {
            // Optionally handle mobile reset here
        }
    };

    return (
        <AuthLayout>
            <ForgotPasswordForm
                formData={formData}
                onFormDataChange={setFormData}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                errors={error ? { email: error } : {}}
            />
        </AuthLayout>
    );
}

export default ForgotPasswordPage