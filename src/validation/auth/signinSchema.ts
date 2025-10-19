import { LOGIN_TYPES, LoginType } from "@/constants/auth";
import * as Yup from "yup";


export const signinSchema = Yup.object({
  loginType: Yup.string<LoginType>()
    .oneOf([LOGIN_TYPES.EMAIL, LOGIN_TYPES.MOBILE] as const)
    .required("Login type is required"),

  email: Yup.string().when("loginType", {
    is: LOGIN_TYPES.EMAIL,
    then: (schema) =>
      schema.email("Invalid email").required("Email is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  mobile: Yup.string().when("loginType", {
    is: LOGIN_TYPES.MOBILE,
    then: (schema) =>
      schema
        .matches(/^\d{11,}$/, "Mobile must be at least 11 digits")
        .required("Mobile number is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  password: Yup.string().required("Password is required"),

  rememberMe: Yup.boolean().optional(),
});

export type SigninFormData = Yup.InferType<typeof signinSchema>;
