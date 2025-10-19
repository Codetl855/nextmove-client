import { useState, useEffect } from "react";
import { getFeaturedProperties } from "@/services/propertyService";
import { showError } from "@/lib/toast";
import { HTTP_STATUS } from "@/constants/httpStatus";

export const useGetFeaturedProperties = (propertyType: string = "House") => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleFetchFeaturedProperties = async (type: string = propertyType) => {
    setLoading(true);
    setErrors(null);

    console.log("Fetching featured properties of type:", type);

    try {
      const res = await getFeaturedProperties(type);
      setProperties(res?.data?.data || []);
      return res;
    } catch (err: any) {
      const status = err.response?.status;
      if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        setErrors(err.response?.data?.errors || {});
      } else {
        const message =
          status === HTTP_STATUS.SERVER_ERROR
            ? "500 | Server error"
            : err.response?.data?.message || "Failed to fetch featured properties.";
        showError(message);
      }
      setProperties([]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch automatically when propertyType changes
  useEffect(() => {
    handleFetchFeaturedProperties(propertyType);
  }, [propertyType]);

  return { properties, loading, errors, handleFetchFeaturedProperties };
};
