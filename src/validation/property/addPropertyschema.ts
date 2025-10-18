import * as Yup from "yup";

const currentYear = new Date().getFullYear();

export const addPropertySchema = Yup.object().shape({
  // Basic property info
  title: Yup.string()
    .required("Title is required")
    .max(255, "Title cannot exceed 255 characters"),
  description: Yup.string()
    .required("Description is required"),
  property_type: Yup.string()
    .required("Property type is required")
    .max(100, "Property type cannot exceed 100 characters"),
  listing_type: Yup.string()
    .required("Listing type is required")
    .max(100, "Listing type cannot exceed 100 characters"),
  property_label: Yup.string()
    .nullable()
    .max(100, "Property label cannot exceed 100 characters"),

  // Physical details
  size: Yup.number()
    .typeError("Size must be a number")
    .required("Size is required")
    .min(0, "Size cannot be negative"),
  land_area: Yup.number()
    .typeError("Land area must be a number")
    .required("Land area is required")
    .min(0, "Land area cannot be negative"),
  property_id: Yup.string()
    .nullable()
    .max(100, "Property ID cannot exceed 100 characters"),
  rooms: Yup.number()
    .nullable()
    .integer("Rooms must be an integer")
    .min(0, "Rooms cannot be negative"),
  bedrooms: Yup.number()
    .nullable()
    .integer("Bedrooms must be an integer")
    .min(0, "Bedrooms cannot be negative"),
  bathrooms: Yup.number()
    .nullable()
    .integer("Bathrooms must be an integer")
    .min(0, "Bathrooms cannot be negative"),
  garages: Yup.number()
    .nullable()
    .integer("Garages must be an integer")
    .min(0, "Garages cannot be negative"),
  garage_size: Yup.number()
    .nullable()
    .typeError("Garage size must be a number")
    .min(0, "Garage size cannot be negative"),
  year_built: Yup.number()
    .nullable()
    .integer("Year built must be an integer")
    .min(1800, "Year built cannot be earlier than 1800")
    .max(currentYear, `Year built cannot be after ${currentYear}`),

  // Location
  address: Yup.string()
    .required("Address is required")
    .max(500, "Address cannot exceed 500 characters"),
  zip_code: Yup.string()
    .nullable()
    .max(20, "Zip code cannot exceed 20 characters"),
  city: Yup.string()
    .required("City is required")
    .max(100, "City cannot exceed 100 characters"),
  state: Yup.string()
    .required("State is required")
    .max(100, "State cannot exceed 100 characters"),
  location: Yup.string()
    .required("Location is required")
    .max(255, "Location cannot exceed 255 characters"),

  // Pricing
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .min(0, "Price cannot be negative"),
  terms: Yup.string()
    .nullable()
    .max(255, "Terms cannot exceed 255 characters"),

  // Status flags
  is_featured: Yup.boolean().default(false),
  is_active: Yup.boolean().default(true),

  // Media uploads
  property_images: Yup.array()
    .of(
      Yup.mixed()
        .test(
          "fileType",
          "Only jpeg, png, jpg, gif images are allowed",
          (value: any) => {
            if (!value) return true;
            return ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(value.type);
          }
        )
        .test(
          "fileSize",
          "Image size must be less than 5MB",
          (value: any) => {
            if (!value) return true;
            return value.size <= 5 * 1024 * 1024;
          }
        )
    )
    .nullable(),

  amenities: Yup.array()
    .of(Yup.string().max(500, "Amenity cannot exceed 500 characters"))
    .nullable(),
});

export type AddPropertyFormData = Yup.InferType<typeof addPropertySchema>;
