import * as yup from "yup";


export const editProfileSchema = yup.object().shape({
    first_name: yup.string().optional(),
    last_name: yup.string().optional(),
    email: yup.string().email("Invalid email").optional(),
    mobile: yup
        .string()
        .matches(/^\d{10,15}$/, "Mobile number must be 10-15 digits")
        .optional(),
    address: yup.string().optional(),
        profile_image: yup
            .mixed()
            .test("fileType", "Only image files are allowed", (value) => {
                if (!value) return true;
                if (typeof value === "string") return true; // skip if url
                if (typeof File !== "undefined" && value instanceof File) {
                    return value.type.startsWith("image/");
                }
                return true;
            })
            .test("fileSize", "Image must be less than 5MB", (value) => {
                if (!value) return true;
                if (typeof value === "string") return true;
                if (typeof File !== "undefined" && value instanceof File) {
                    return value.size <= 5 * 1024 * 1024;
                }
                return true;
            })
            .optional(),
    password: yup.string().optional(),
    confirmPassword: yup.string().when("password", {
        is: (val: string) => !!val,
        then: (schema) => schema.required("Confirm password is required").oneOf([yup.ref("password")], "Passwords must match"),
        otherwise: (schema) => schema.optional(),
    }),
});

export type EditProfileFormData = yup.InferType<typeof editProfileSchema>;
