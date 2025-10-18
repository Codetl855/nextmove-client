import React from "react";
import Input from "@/components/ui/Inputs/Input";
import PasswordInput from "@/components/ui/Inputs/extensions/PasswordInput";
import Checkbox from "@/components/ui/Inputs/extensions/Checkbox";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import SecondaryButton from "@/components/ui/Buttons/extensions/SecondaryButton";
import SocialLoginIcons from "@/components/ui/Social/SocialLoginIcons";
import { Divider } from "@/components/ui/Divider/Divider";

export type SignupFormData = {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
};

type SignupFormProps = {
    formData: SignupFormData;
    onFormDataChange: (data: SignupFormData) => void;
    onSubmit: (e: React.FormEvent) => void;
    onSigninClick: () => void;
    isSubmitting?: boolean;
    errors?: Partial<Record<keyof SignupFormData, string>>;
};

const SignupForm: React.FC<SignupFormProps> = ({
    formData,
    onFormDataChange,
    onSubmit,
    onSigninClick,
    isSubmitting = false,
    errors = {}
}) => {
    const handleFieldChange = (field: keyof SignupFormData, value: any) => {
        onFormDataChange({
            ...formData,
            [field]: value
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-4">

                <Input
                    label="First Name"
                    type="text"
                    name="name"
                    aria-label="Full name"
                    value={formData.firstName}
                    onChange={(e) => handleFieldChange("firstName", e.target.value)}
                    placeholder="Frist Name"
                    error={errors.firstName}
                    className=" w-full"
                />

                <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    aria-label="Last name"
                    value={formData.lastName}
                    onChange={(e) => handleFieldChange("lastName", e.target.value)}
                    placeholder="Last Name"
                    error={errors.lastName}
                    className=" w-full"
                />

                <div className="col-span-2 grid gap-4">
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        aria-label="Email address"
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        placeholder="email@example.com"
                        leftIcon={<span className="icon-[line-md--email] w-4 h-4" />}
                        error={errors.email}
                        className=" w-full"
                    />

                    <Input
                        label="Mobile"
                        type="tel"
                        name="mobile"
                        aria-label="Mobile number"
                        value={formData.mobile}
                        onChange={(e) => handleFieldChange('mobile', e.target.value)}
                        placeholder="92 305 343443"
                        leftIcon={<span className="icon-[tabler--phone-call] w-4 h-4" />}
                        error={errors.mobile}
                        className=" w-full"
                    />
                </div>

                <PasswordInput
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleFieldChange("password", e.target.value)}
                    placeholder="********"
                    error={errors.password}
                    className=" w-full"
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => handleFieldChange("confirmPassword", e.target.value)}
                    placeholder="********"
                    error={errors.confirmPassword}
                    className=" w-full"
                />
                <div className="grid gap-4  col-span-2">
                    <div className="flex items-center text-sm text-gray-600">
                        <Checkbox
                            label="I agree to the terms and condeition"
                            checked={formData.agreeTerms}
                            error={errors.agreeTerms}
                            onChange={(e) => handleFieldChange("agreeTerms", e.target.checked)}
                        />
                    </div>

                    <PrimaryButton type="submit" disabled={isSubmitting} className="h-14">
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                    </PrimaryButton>

                    <div className="">
                        <SecondaryButton type="button" onClick={onSigninClick} className="h-14">
                            Already have an account? Sign In
                        </SecondaryButton>
                    </div>

                    <Divider text="OR" className="" />

                    <SocialLoginIcons
                        icons={[
                            { src: "icon-[flat-color-icons--google]", alt: "Google", onClick: () => console.log("Google login") },
                            { src: "icon-[logos--apple] text-black", alt: "Apple", onClick: () => console.log("Apple login") },
                            { src: "icon-[logos--facebook] text-blue-600", alt: "Facebook", onClick: () => console.log("Facebook login") },
                            { src: "icon-[skill-icons--instagram] text-pink-500", alt: "Instagram", onClick: () => console.log("Instagram login") },
                            { src: "icon-[skill-icons--linkedin] text-blue-700", alt: "LinkedIn", onClick: () => console.log("LinkedIn login") },
                        ]}
                    />
                </div>
            </div>
        </form>
    );
};

export default SignupForm;
