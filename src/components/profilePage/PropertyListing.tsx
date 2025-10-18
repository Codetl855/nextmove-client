import React, { useState } from "react";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";
import GenericTable from "@/components/tables/Table";
import Input from "@/components/ui/Inputs/Input";
import Image from "@/components/ui/Images/Image";
import Button from "@/components/ui/Buttons/Button";
import { useGetProperties } from "@/hooks/property/useGetProperties";
import { deleteProperty } from "@/services/propertyService";
import { showSuccess, showError } from "@/lib/toast";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/constants/appRoutes";

interface PropertyListingProps {
  active?: boolean;
}

const PropertyListing: React.FC<PropertyListingProps> = ({ active = true }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3); // start with 3 as requested
  const navigate = useNavigate();

  // hook handles debounced + locked search
  const {
    properties,
    pagination,
    loading,
    error,
    isSearchDisabled,
  } = useGetProperties(active, page, statusFilter, searchTerm, perPage);

  // normalize property fields for table
  const mappedProperties = (properties || []).map((p: any) => ({
    ...p,
    title: p.title || "No Title",
    address: p.address || p.location || "No Address",
    images: p.media?.length
      ? [{ url: p.media[0].media_url }]
      : [{ url: "/placeholder-house.png" }],
    price: p.price ?? "N/A",
    status: p.status ?? "Active",
    created_at: p.created_at ?? new Date().toISOString(),
  }));

  // Table column definitions
  const columns = [
    {
      key: "title",
      header: "Properties Photo & Name",
      render: (row: any) => (
        <div className="flex items-center gap-3">
          <Image
            src={row.images?.[0]?.url || "/placeholder-house.png"}
            alt={row.title}
            className="w-14 h-14 rounded object-cover"
          />
          <div className="grid">
            <p className="font-medium">{row.title}</p>
            <p className="font-medium text-gray-500">{row.address}</p>
            <p className="text-aztec">${row.price}</p>
          </div>
        </div>
      ),
    },
    { key: "property_type", header: "Type" },
    {
      key: "created_at",
      header: "Added Date",
      render: (row: any) =>
        new Date(row.created_at).toLocaleDateString("en-GB"),
    },
    {
      key: "status",
      header: "Status",
      render: (row: any) => {
        const color =
          row.status === "Active"
            ? "bg-[#E2F8E9] text-[#0AC247]"
            : row.status === "De-Active"
            ? "bg-[#FFF6E0] text-[#FFB300]"
            : "bg-[#FBE2E2] text-[#DA0B0B]";
        return (
          <span className={`px-2 py-2 text-xs rounded-md ${color}`}>
            {row.status}
          </span>
        );
      },
    },
    {
      key: "action",
      header: "Action",
      render: (row: any) => (
        <CustomSelect
          value="Select"
          onChange={(val) => {
            if (val === "Edit") navigate(`${APP_ROUTES.USER.PROPERTY.EDIT_PROPERTY}/${row.id}`);
            if (val === "Delete") {
              if (window.confirm("Are you sure you want to delete this property?")) {
                deleteProperty(row.id)
                  .then(() => {
                    showSuccess("Property deleted successfully!");
                    // Optionally refresh property list
                    setTimeout(() => window.location.reload(), 500);
                  })
                  .catch(() => showError("Failed to delete property."));
              }
            }
          }}
          options={["Edit", "Delete"]}
          className="!bg-white text-gray-500 text-sm w-full border-gray-300 border h-[44px]"
        />
      ),
    },
  ];

  // Handle perPage changes — reset to first page
  const handlePerPageChange = (n: number) => {
    setPerPage(n);
    setPage(1);
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-4 my-6 flex-wrap">
        {/* 🔍 Search Input with disabled state */}
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          disabled={isSearchDisabled}
          outerClassName="w-full"
          className="w-full md:flex-1"
          rightElement={
            loading ? (
              <span className="animate-spin icon-[mdi--loading] text-xl text-aztec" />
            ) : (
              <span className="icon-[iconamoon--search-thin] text-2xl text-[#949494]" />
            )
          }
        />

        {/* Status Filter */}
        <CustomSelect
          value={statusFilter}
          onChange={(val) => {
            setStatusFilter(val);
            setPage(1);
          }}
          options={["All", "Active", "Sold"]}
          className="w-full min-w-[80px] md:w-[117px] rounded-md bg-white border border-gray-300 text-sm text-gray-500 h-[48px]"
        />
      </div>

      {/* Table + Pagination */}
      {loading ? (
        <p className="text-gray-500 text-center py-6">Loading properties...</p>
      ) : error ? (
        <p className="text-red-500 text-center py-6">{error}</p>
      ) : mappedProperties.length > 0 ? (
        <GenericTable
          columns={columns}
          data={mappedProperties}
          keyExtractor={(row: any) => row.id}
          pagination={{
            currentPage: pagination.currentPage,
            totalPages: pagination.lastPage,
            perPage: pagination.perPage,
            onPerPageChange: handlePerPageChange,
            onPageChange: (p) => setPage(p),
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <span className="icon-[arcticons--google-docs] text-5xl text-aztec" />
          <p className="text-gray-600 text-sm mt-4">
            You have no Listed Property
          </p>
          <Button className="bg-aztec cursor-pointer mt-2 text-white px-5 py-2 rounded-md text-sm font-medium">
            Add Property
          </Button>
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
