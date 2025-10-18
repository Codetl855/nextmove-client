import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { signup, SignupPayload } from "@/services/authService";
import { showError, showSuccess } from "@/lib/toast";
import { ensureCsrfCookie } from "@/lib/csrf";
import { useAuth } from "@/providers/AuthProvider";
import { HTTP_STATUS } from "@/constants/httpStatus";

export const useSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuth();

  const handleSignup = async (data: SignupPayload) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await ensureCsrfCookie();
      const res = await signup(data);
      if (res.data) setUser(res.data);
      showSuccess(res?.message || "Signup successful");
    } catch (err: any) {
      const status = err.response?.status;
      const message =
        status === HTTP_STATUS.SERVER_ERROR
          ? "500 | Server error"
          : err.response?.data?.message || "Signup failed";

      setError(message);
      showError(message);

      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSignup, isSubmitting, error };
};
