import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login, LoginPayload } from "@/services/authService";
import { showError, showSuccess } from "@/lib/toast";
import { APP_ROUTES } from "@/constants/appRoutes";
import { ensureCsrfCookie } from "@/lib/csrf";
import { useAuth } from "@/providers/AuthProvider";
import { HTTP_STATUS } from "@/constants/httpStatus";
import { redirectTimeout } from "@/helpers/appHelpers";

export const useSignin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSignin = async (data: LoginPayload) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await ensureCsrfCookie();
      const res = await login(data);

      showSuccess(res?.message || "Login successful");

      try {
        const user = await getUser(); 

        if (user.data.data) {
          setUser(user.data.data);
          navigate(APP_ROUTES.ROOT);
        }
      } catch (userErr: any) {
        if (userErr.response?.status === HTTP_STATUS.UNAUTHORIZED) {
          showError("You are not Authorized.");
          redirectTimeout(navigate, APP_ROUTES.AUTH.VERIFY_EMAIL, 1500);
          return;
        }
        else if(userErr.response?.status === HTTP_STATUS.FORBIDDEN) {
          showError("You are not Authorized. Please verify your email.");
          redirectTimeout(navigate, APP_ROUTES.AUTH.VERIFY_EMAIL, 1500);
          return;
        }
        throw userErr; 
      }
    } catch (err: any) {
      const status = err.response?.status;
      const message =
        status === HTTP_STATUS.SERVER_ERROR
          ? "500 | Server error"
          : err.response?.data?.message || "Login failed";

      setError(message);
      showError(message);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSignin, isSubmitting, error };
};
