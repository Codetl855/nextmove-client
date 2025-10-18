import { useState } from "react";
import { updateProfile, UpdateProfilePayload } from "@/services/userService";
import { showError, showSuccess } from "@/lib/toast";
import { HTTP_STATUS } from "@/constants/httpStatus";
import { useAuth } from "@/providers/AuthProvider";

export const useUpdateProfile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof UpdateProfilePayload, string>>>({});
  const { user, setUser } = useAuth();

  const handleUpdateProfile = async (payload: UpdateProfilePayload) => {
    setIsSubmitting(true);
    setErrors({});
    try {
      const res = await updateProfile(payload);
      setUser(res.data.data);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      showSuccess(res?.message || "Profile updated successfully");
      return res;
    } catch (err: any) {
      const status = err.response?.status;
      if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        setErrors(err.response?.data?.errors || {});
      } else {
        const message =
          status === HTTP_STATUS.SERVER_ERROR
            ? "500 | Server error"
            : err.response?.data?.message;
        showError(message);
      }
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleUpdateProfile, isSubmitting, errors };
};