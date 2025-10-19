import { useContext } from "react";
import { __internal_getSearchContext, SearchProvider } from "@/providers/SearchProvider";

export function useSearch() {
  const ctx = useContext(__internal_getSearchContext());
  if (!ctx) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return ctx;
}

export default useSearch;
