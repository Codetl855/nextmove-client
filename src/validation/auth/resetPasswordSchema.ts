import * as yup from "yup";

export type ResetPasswordFormData = {
    password: string;
    confirmPassword: string;
};

export const resetPasswordSchema = yup.object({
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});