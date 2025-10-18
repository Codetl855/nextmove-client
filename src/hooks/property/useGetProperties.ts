import { useEffect, useRef, useState } from "react";
import { getProperties, GetPropertiesParams } from "@/services/propertyService";
import { showError } from "@/lib/toast";
import { HTTP_STATUS } from "@/constants/httpStatus";

/**
 * Hook to fetch paginated property list with
 * debounce + lock for search field.
 */
export const useGetProperties = (
  active: boolean = true,
  page: number = 1,
  status: string = "",
  search: string = "",
  perPage: number = 10
) => {
  const [properties, setProperties] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: page,
    lastPage: 1,
    perPage,
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasFetchedInitially = useRef(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  /** 🔍 Fetch properties from backend */
  const fetchProperties = async (params?: GetPropertiesParams) => {
    if (!active) return;
    // Prevent overlapping API calls
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await getProperties({
        page: params?.page ?? page,
        status: params?.status ?? status,
        search: params?.search ?? search,
        per_page: params?.per_page ?? perPage,
      } as any);

      const paginated = res?.data?.data;
      const list = Array.isArray(paginated?.data) ? paginated.data : [];

      setProperties(list);
      setPagination({
        currentPage: paginated?.current_page ?? (params?.page ?? page),
        lastPage: paginated?.last_page ?? 1,
        perPage: paginated?.per_page ?? perPage,
        total: paginated?.total ?? 0,
      });
    } catch (err: any) {
      const statusCode = err.response?.status;
      const message =
        err.response?.data?.message ||
        (statusCode === HTTP_STATUS.SERVER_ERROR
          ? "500 | Server error"
          : "Failed to fetch properties.");

      showError(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * 🕓 Debounced search + controlled dependencies
   * - Runs once on mount
   * - Refetches on page/status/perPage change
   * - Debounced search that waits 500 ms and needs ≥ 3 chars
   */
  useEffect(() => {
    if (!active) return;

    // First render — fetch immediately once
    if (!hasFetchedInitially.current) {
      hasFetchedInitially.current = true;
      fetchProperties();
      return;
    }

    // For search → debounce logic
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      const shouldSearch = search.length === 0 || search.length >= 3;
      if (shouldSearch) fetchProperties();
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, status, search, perPage, active]);

  return {
    properties,
    pagination,
    loading,
    error,
    refetch: fetchProperties,
    isSearchDisabled: loading, // 🔒 you can disable search input when true
  };
};
