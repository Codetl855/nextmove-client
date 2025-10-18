// src/components/tables/Table.tsx
import React from "react";
import Pagination from "@/components/tables/Pagination";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface GenericTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor?: (row: T, index: number) => string | number;
  pagination?: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    onPageChange: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
  };
}

function GenericTable<T>({
  columns,
  data,
  keyExtractor,
  pagination,
}: GenericTableProps<T>) {
  const renderHeader = () => (
    <thead className="bg-aztec-light text-gray-500">
      <tr>
        {columns.map((col) => (
          <th
            key={col.key.toString()}
            className={`px-4 py-3 whitespace-nowrap font-medium ${col.className ?? ""}`}
          >
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderRows = () =>
    data.map((row, rowIndex) => {
      const rowKey = keyExtractor ? keyExtractor(row, rowIndex) : rowIndex;
      return (
        <tr key={rowKey} className="hover:bg-gray-50">
          {columns.map((col) => (
            <td
              key={col.key.toString()}
              className={`px-4 py-3 whitespace-nowrap ${col.className ?? ""}`}
            >
              {col.render ? col.render(row) : (row as any)[col.key]}
            </td>
          ))}
        </tr>
      );
    });

  return (
    <div className="bg-white">
      <div className="overflow-x-auto overflow-y-auto max-h-[900px]">
        <table className="w-full text-left text-sm">
          {renderHeader()}
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              renderRows()
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-6 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination integrated but optional */}
      {pagination && (
        <div className="px-4">
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            perPage={pagination.perPage}
            onPerPageChange={pagination.onPerPageChange}
            onPageChange={pagination.onPageChange}
            className="border border-gray-300"
          />
        </div>
      )}
    </div>
  );
}

export default GenericTable;
