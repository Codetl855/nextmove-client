
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignin } from "@/hooks/auth/useSignin";
import AuthLayout from "@/layouts/AuthLayout";
import SigninForm from "@/components/forms/Auth/SigninForm";
import { LOGIN_TYPES } from "@/constants/auth";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SigninFormData, signinSchema } from "@/validation/auth/signinSchema";


const SigninPage = () => {
  const navigate = useNavigate();
  const { handleSignin, isSubmitting, error } = useSignin();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: yupResolver(signinSchema) as any,
    defaultValues: {
      loginType: LOGIN_TYPES.EMAIL,
      email: "",
      mobile: "",
      password: "",
      rememberMe: false,
    },
  });

  const formData = watch();

  const onFormDataChange = (data: SigninFormData) => {
    (Object.keys(data) as (keyof SigninFormData)[]).forEach((key) => {
      setValue(key, data[key], { shouldValidate: true });
    });
  };


  const onSubmit = async (data: SigninFormData) => {
    try {
      const loginData = data.loginType === LOGIN_TYPES.EMAIL 
        ? { email: data.email, password: data.password }
        : { mobile: data.mobile, password: data.password };
      
      await handleSignin(loginData);
    }
    catch (err) {
      console.error("Signin failed:", err);
    }
  };

  const handleSignupClick = () => {
    navigate(APP_ROUTES.AUTH.SIGNUP);
  };

  const handleForgotPasswordClick = () => {
    navigate(APP_ROUTES.AUTH.FORGOT_PASSWORD);
  };


  return (
    <AuthLayout>
      <SigninForm
        formData={formData}
        onFormDataChange={onFormDataChange}
        onSubmit={handleSubmit(onSubmit as any)}
        onSignupClick={handleSignupClick}
        onForgotPasswordClick={handleForgotPasswordClick}
        isSubmitting={isSubmitting}
        errors={Object.fromEntries(
          Object.entries(errors).map(([key, val]) => [key, val?.message])
        )}
      />
    </AuthLayout>
  );
};

export default SigninPage;