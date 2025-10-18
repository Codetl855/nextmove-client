import React from "react";
import PasswordInput from "@/components/ui/Inputs/extensions/PasswordInput";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";

export type ResetPasswordFormData = {
    password: string;
    confirmPassword: string;
};

type ResetPasswordFormProps = {
    formData: ResetPasswordFormData;
    onFormDataChange: (data: ResetPasswordFormData) => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting?: boolean;
    errors?: Partial<Record<keyof ResetPasswordFormData, string>>;
};

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
    formData,
    onFormDataChange,
    onSubmit,
    isSubmitting = false,
    errors = {},
}) => {
    const handleFieldChange = (field: keyof ResetPasswordFormData, value: any) => {
        onFormDataChange({
            ...formData,
            [field]: value,
        });
    };

    return (
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <PasswordInput
                label="New Password"
                name="password"
                value={formData.password}
                onChange={(e) => handleFieldChange("password", e.target.value)}
                placeholder="********"
                error={errors.password}
                className="mb-2"
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleFieldChange("confirmPassword", e.target.value)}
                placeholder="********"
                error={errors.confirmPassword}
                className="mb-2"
            />

            <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Resetting..." : "Reset Password"}
            </PrimaryButton>
        </form>
    );
};

export default ResetPasswordForm;