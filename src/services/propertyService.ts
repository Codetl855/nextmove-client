import { request } from "@/lib/api";
import { API_ROUTES } from "@/constants/apiRoutes";
export interface CreatePropertyPayload {
  title: string;
  description: string;
  property_type: string;
  listing_type: string;
  property_label: string;
  size: number;
  land_area: number;
  property_id: string;
  rooms: number;  
  bedrooms: number;
  bathrooms: number;
  garages: number;
  garage_size: number;
  year_built: number;
  address: string;
  zip_code: string;
  city: string;
  state: string;
  location: string;
  price: number;
  terms: string;
  amenities: string[];
  property_images: File[];
}


// Create property function
export const createProperty = async (data: CreatePropertyPayload) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          formData.append(`${key}[]`, v instanceof File ? v : String(v));
        });
      } else if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    }
  });
  return request("post", API_ROUTES.PROPERTY.CREATE, formData);
};

export interface GetPropertiesParams {
  page?: number;
  status?: string;
  search?: string;
  per_page?: number;
}

export const getProperties = async (params?: GetPropertiesParams) => {
  const queryParams = new URLSearchParams();

  if (params?.page) queryParams.append("page", String(params.page));
  if (params?.per_page) queryParams.append("per_page", String(params.per_page)); 
  if (params?.status && params.status !== "All")
    queryParams.append("status", params.status);
  if (params?.search) queryParams.append("search", params.search);

  const url = `${API_ROUTES.PROPERTY.LIST}${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;

  return request("get", url);
};

// Show property by ID
export const showProperty = async (id: number | string) => {
  return request("get", API_ROUTES.PROPERTY.SHOW(id));
};

// Update property by ID
export const updateProperty = async (
  id: number | string,
  data: Partial<CreatePropertyPayload>
) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    // ✅ Handle amenities array properly (string[] → multiple entries)
    if (key === "amenities" && Array.isArray(value)) {
      value.forEach((amenity) => {
        formData.append("amenities[]", String(amenity));
      });
      return;
    }

    // ✅ Handle image arrays correctly
    if (key === "property_images" && Array.isArray(value)) {
      value.forEach((img) => {
        if (img instanceof File) {
          formData.append("property_images[]", img);
        } else if (typeof img === "string") {
          // If backend supports preserving existing images by name/path
          formData.append("existing_images[]", img);
        }
      });
      return;
    }

    // ✅ Default handling for all other fields
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(`${key}[]`, String(v)));
    } else if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, String(value));
    }
  });
  formData.append("_method", "PUT");
  return request("post", API_ROUTES.PROPERTY.UPDATE(id), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Get featured properties by type
export const getFeaturedProperties = async (propertyType: string = "House") => {
  return request("get", API_ROUTES.HOME.FEATURED_PROPERTIES(propertyType));
};

// Delete property by ID
export const deleteProperty = async (id: number | string) => {
  return request("delete", API_ROUTES.PROPERTY.DELETE(id));
};

// Get property details by ID
export const getPropertyDetail = async (id: number | string) => {
  return request("get", API_ROUTES.PROPERTY.GET_PROPERTY(id));
};



