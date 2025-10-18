import React from "react";
import Input from "../../ui/Inputs/Input";
import PasswordInput from "../../ui/Inputs/extensions/PasswordInput";
import Checkbox from "../../ui/Inputs/extensions/Checkbox";
import Anchor from "../../ui/Buttons/extensions/AnchorLink";
import PrimaryButton from "../../ui/Buttons/extensions/PrimaryButton";
import SecondaryButton from "../../ui/Buttons/extensions/SecondaryButton";
import SocialLoginIcons from "../../ui/Social/SocialLoginIcons";
import { Divider } from "../../ui/Divider/Divider";
import { RadioGroup } from "../../ui/Inputs/extensions/RadioGroup";
import { LOGIN_TYPES, LoginType } from "../../../constants/auth";

import googleIcon from "../../../assets/img/google.png";
import appleIcon from "../../../assets/img/apple.png";
import facebookIcon from "../../../assets/img/facebook.png";
import instagramIcon from "../../../assets/img/instagram.png";
import linkedinIcon from "../../../assets/img/linkedin.png";

export type SigninFormData = {
  loginType: LoginType;
  email: string;
  mobile: string;
  password: string;
  rememberMe: boolean;
};

type SigninFormProps = {
  formData: SigninFormData;
  onFormDataChange: (data: SigninFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSignupClick: () => void;
  onForgotPasswordClick: () => void;
  isSubmitting?: boolean;
  errors?: Partial<Record<keyof SigninFormData, string>>;
};

const SigninForm: React.FC<SigninFormProps> = ({
  formData,
  onFormDataChange,
  onSubmit,
  onSignupClick,
  onForgotPasswordClick,    
  isSubmitting = false,
  errors = {}
}) => {
  const handleFieldChange = (field: keyof SigninFormData, value: any) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <RadioGroup
        name="loginType"
        value={formData.loginType}
        onChange={(value) => handleFieldChange('loginType', value)}
        className=" text-sm font-medium"
        radioClassName=" w-3 h-3 bg-white ring-aztec   focus:ring-aztec ring-1 checked:bg-aztec border-white"

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
          leftIcon={<span className="icon-[line-md--email] w-4 h-4" />}
          error={errors.email}
          className=" w-full"
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
          leftIcon={<span className="icon-[tabler--phone-call] w-4 h-4" />}
          error={errors.mobile}
          className=" w-full"
        />
      )}

      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={(e) => handleFieldChange('password', e.target.value)}
        placeholder="********"
        error={errors.password}
        className=" w-full"
      />

      <div className="flex items-center justify-between  text-sm text-gray-600">
        <Checkbox
          label="Keep me logged in"
          checked={formData.rememberMe}
          onChange={(e) => handleFieldChange('rememberMe', e.target.checked)}
        />
        <Anchor onClick={onForgotPasswordClick}>
          Forgot Password?
        </Anchor>
      </div>

      <PrimaryButton type="submit" disabled={isSubmitting} >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </PrimaryButton>

      <div className="">
        <SecondaryButton type="button" onClick={onSignupClick} >
          Sign Up
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

    </form>
  );
};

export default SigninForm;