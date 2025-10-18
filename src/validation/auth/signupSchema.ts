import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
        .matches(/^\d{11,}$/, "Mobile must be at least 11 digits")
        .required("Mobile number is required"),
    password: Yup.string()
        .min(8, "At least 8 characters")
        .matches(/[A-Z]/, "One uppercase required")
        .matches(/[a-z]/, "One lowercase required")
        .matches(/[0-9]/, "One number required")
        .matches(/[!@#$%^&*]/, "One special character required")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    agreeTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms")
        .required(),
});

export type SignupFormData = Yup.InferType<typeof signupSchema>;