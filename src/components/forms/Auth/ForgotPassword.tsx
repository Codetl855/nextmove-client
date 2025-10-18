import React from "react";
import Input from "@/components/ui/Inputs/Input";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import { RadioGroup } from "@/components/ui/Inputs/extensions/RadioGroup";
import { LOGIN_TYPES, LoginType } from "@/constants/auth";

export type ForgotPasswordFormData = {
    loginType: LoginType;
    email: string;
    mobile: string;
};

type ForgotPasswordFormProps = {
    formData: ForgotPasswordFormData;
    onFormDataChange: (data: ForgotPasswordFormData) => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting?: boolean;
    errors?: Partial<Record<keyof ForgotPasswordFormData, string>>;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
    formData,
    onFormDataChange,
    onSubmit,
    isSubmitting = false,
    errors = {}
}) => {
    const handleFieldChange = (field: keyof ForgotPasswordFormData, value: any) => {
        onFormDataChange({
            ...formData,
            [field]: value
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <RadioGroup
                name="loginType"
                value={formData.loginType}
                onChange={(value) => handleFieldChange('loginType', value)}
                className="mb-6 text-sm font-medium"
                radioClassName=" w-3 h-3 bg-white ring-aztec   focus:ring-aztec ring-2 checked:bg-aztec border-white"

                options={[
                    { value: LOGIN_TYPES.EMAIL, label: "Email" },
                    { value: LOGIN_TYPES.MOBILE, label: "Mobile Number" },
                ]}
            />

            {formData.loginType === LOGIN_TYPES.EMAIL && (
                <Input
                    type="email"
                    name="email"
                    aria-label="Email address"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="email@example.com"
                    leftIcon={<span className="icon-[ic--baseline-email] w-4 h-4" />}
                    error={errors.email}
                    className="mb-2"
                />
            )}

            {formData.loginType === LOGIN_TYPES.MOBILE && (
                <Input
                    label="Mobile"
                    type="tel"
                    name="mobile"
                    aria-label="Mobile number"
                    value={formData.mobile}
                    onChange={(e) => handleFieldChange('mobile', e.target.value)}
                    placeholder="92 305 343443"
                    leftIcon={<span className="icon-[ic--round-call] w-4 h-4" />}
                    error={errors.mobile}
                    className="mb-2"
                />
            )}

            <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
            </PrimaryButton>
        </form>
    );
};

export default ForgotPasswordForm;