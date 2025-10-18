
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignin } from "@/hooks/auth/useSignin";
import AuthLayout from "@/layouts/AuthLayout";
import SigninForm, { SigninFormData } from "@/components/forms/Auth/SigninForm";
import { LOGIN_TYPES } from "@/constants/auth";
import { APP_ROUTES } from "@/constants/appRoutes";


const SigninPage = () => {
  const navigate = useNavigate();
  const { handleSignin, isSubmitting, error } = useSignin();
  const [formData, setFormData] = useState<SigninFormData>({
    loginType: LOGIN_TYPES.EMAIL,
    email: "",
    mobile: "",
    password: "",
    rememberMe: false
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only support email login for now
    if (formData.loginType === LOGIN_TYPES.EMAIL) {
      await handleSignin({ email: formData.email, password: formData.password });
    } else {
      // Optionally handle mobile login here
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
        onFormDataChange={setFormData}
        onSubmit={handleSubmit}
        onSignupClick={handleSignupClick}
        onForgotPasswordClick={handleForgotPasswordClick}
        isSubmitting={isSubmitting}
        errors={error ? { email: error, password: error } : {}}
      />
    </AuthLayout>
  );
};

export default SigninPage;