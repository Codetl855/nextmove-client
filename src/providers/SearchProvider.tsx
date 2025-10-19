import React, { createContext, useMemo, useState, ReactNode } from "react";

export type SearchFilters = {
  type: string;
  location: string;
  keyword: string;
  tab: string;
  selectedOptions: string[];
  priceRange: [number, number];
  sizeRange: [number, number];
};

const defaultFilters: SearchFilters = {
  type: "All",
  location: "",
  keyword: "",
  tab: "resedentials",
  selectedOptions: [],
  priceRange: [5000, 650000],
  sizeRange: [100, 650000],
};

type SearchContextValue = {
  searchFilters: SearchFilters;
  setSearchFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  reset: () => void;
  apply: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>(defaultFilters);

  const reset = () => setSearchFilters(defaultFilters);

  const apply = () => {
    // Default behaviour: log applied filters. Consumers can read the context and act on changes.
    console.log("✅ Applied filters:", searchFilters);
  };

  const value = useMemo(
    () => ({ searchFilters, setSearchFilters, reset, apply }),
    [searchFilters]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function __internal_getSearchContext() {
  return SearchContext;
}

export default SearchProvider;
