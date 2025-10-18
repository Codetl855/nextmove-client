import { useState } from "react";
import { createProperty, CreatePropertyPayload } from "@/services/propertyService";
import { showError, showSuccess } from "@/lib/toast";
import { HTTP_STATUS } from "@/constants/httpStatus";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useNavigate } from "react-router-dom";

export const useCreateProperty = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreatePropertyPayload, string>>
  >({});

  const handleCreateProperty = async (payload: CreatePropertyPayload) => {
    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await createProperty(payload);
      showSuccess(res?.message || "Property created successfully!");
      navigate(APP_ROUTES.USER.DASHBOARD);
    } catch (err: any) {
      const status = err.response?.status;

      if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        setErrors(err.response?.data?.errors || {});
      } else {
        const message =
          status === HTTP_STATUS.SERVER_ERROR
            ? "500 | Server error"
            : err.response?.data?.message || "Something went wrong";
        showError(message);
      }

      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleCreateProperty, isSubmitting, errors };
};
