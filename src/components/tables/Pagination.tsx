import React from "react";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onlyButtons?: boolean;
  onPageChange: (page: number) => void;
  className?: string;
  perPage?: number;
  onPerPageChange?: (perPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onlyButtons = false,
  onPageChange,
  className = "",
  perPage = 3,
  onPerPageChange,
}) => {
  const perPageOptions = ["3", "5", "10", "20", "50"];

  /** Handle per-page selection */
  const handlePerPageChange = (val: string) => {
    if (onPerPageChange) {
      onPerPageChange(val === "All" ? -1 : Number(val));
    }
  };

  /** Generate visible page numbers with ellipses */
  const getPageNumbers = (
    current: number,
    total: number,
    maxVisible = 5
  ): (number | string)[] => {
    if (total <= 1) return [1];

    const pages: (number | string)[] = [];
    const addPage = (p: number | string) => {
      if (pages[pages.length - 1] !== p) pages.push(p);
    };

    addPage(1);

    const left = Math.max(2, current - 1);
    const right = Math.min(total - 1, current + 1);

    if (left > 2) addPage("...");
    for (let i = left; i <= right; i++) addPage(i);
    if (right < total - 1) addPage("...");

    addPage(total);

    return pages;
  };

  /** Render per-page selector */
  const renderPerPageSelector = () => (
    <div className="flex gap-2 items-center">
      <span className="hidden lg:block text-gray-600">Results per page</span>
      <CustomSelect
        value={perPage === -1 ? "All" : String(perPage)}
        onChange={handlePerPageChange}
        options={perPageOptions}
        className="!bg-white border border-gray-300 rounded text-sm text-gray-700 h-[36px]"
      />
    </div>
  );

  /** Render navigation button */
  const renderButton = (
    icon: string,
    onClick: () => void,
    disabled: boolean,
    hideOnMobile = false
  ) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${hideOnMobile ? "hidden md:flex" : "flex"} items-center justify-center w-8 h-8 bg-white rounded disabled:opacity-50 ${className}`}
    >
      <span className={`${icon} text-base leading-none color-black`} />
    </button>
  );

  /** Render numbered page buttons */
  const renderPageNumbers = () =>
    getPageNumbers(currentPage, totalPages).map((page, idx) =>
      page === "..." ? (
        <span key={`dots-${idx}`} className="md:px-2 text-gray-500">
          ...
        </span>
      ) : (
        <button
          key={`page-${page}-${idx}`}
          onClick={() => onPageChange(page as number)}
          className={`h-8 w-8 rounded ${className} ${
            currentPage === page
              ? "border-aztec bg-aztec text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <span className="text-sm">{page}</span>
        </button>
      )
    );

  /** Main render */
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 text-sm gap-3">
      {/* Per-page dropdown */}
      {!onlyButtons && renderPerPageSelector()}

      {/* Pagination controls */}
      <div className="flex items-center md:gap-1 justify-end">
        {/* Double Previous */}
        {renderButton(
          "icon-[ep--d-arrow-left]",
          () => onPageChange(1),
          currentPage === 1,
          true
        )}

        {/* Single Previous */}
        {renderButton(
          "icon-[ri--arrow-left-s-line]",
          () => onPageChange(currentPage - 1),
          currentPage === 1
        )}

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Single Next */}
        {renderButton(
          "icon-[ri--arrow-right-s-line]",
          () => onPageChange(currentPage + 1),
          currentPage === totalPages
        )}

        {/* Double Next */}
        {renderButton(
          "icon-[ep--d-arrow-right]",
          () => onPageChange(totalPages),
          currentPage === totalPages,
          true
        )}
      </div>
    </div>
  );
};

export default Pagination;
