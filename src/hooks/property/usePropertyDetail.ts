import { useState, useEffect } from "react";
import { getPropertyDetail } from "@/services/propertyService";
import { showError } from "@/lib/toast";
import { HTTP_STATUS } from "@/constants/httpStatus";

export const usePropertyDetail = (id: string | number) => {
  const [propertyDetail, setPropertyDetail] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleFetchPropertyDetail = async (type: string | number = id) => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await getPropertyDetail(type);
      setPropertyDetail(res?.data?.data || null);
      return res;
    } catch (err: any) {
      const status = err.response?.status;
      if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        setErrors(err.response?.data?.errors || {});
      } else {
        const message =
          status === HTTP_STATUS.SERVER_ERROR
            ? "500 | Server error"
            : err.response?.data?.message || "Failed to fetch property detail.";
        showError(message);
      }
      setPropertyDetail(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 👇 Automatically fetch when `id` changes
  useEffect(() => {
    if (id) {
      handleFetchPropertyDetail();
    }
  }, [id]);

  return { propertyDetail, loading, errors, handleFetchPropertyDetail };
};
