import React, { useEffect } from "react";
import EditPropertyForm, { EditPropertyFormData } from "@/components/forms/Property/EditPropertyForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPropertySchema } from "@/validation/property/addPropertyschema";
import { useParams } from "react-router-dom";
import { useEditProperty } from "@/hooks/property/useEditProperty";

const EditProperty: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    property,
    isLoading,
    handleEditProperty,
    isSubmitting,
    errors: apiErrors,
  } = useEditProperty(id!);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<EditPropertyFormData>({
    resolver: yupResolver(addPropertySchema),
    defaultValues: {
      title: "",
      description: "",
      property_type: "",
      listing_type: "",
      property_label: "",
      size: 0,
      land_area: 0,
      property_id: "",
      rooms: 0,
      bedrooms: 0,
      bathrooms: 0,
      garages: 0,
      garage_size: 0,
      year_built: 1900,
      address: "",
      zip_code: "",
      city: "",
      state: "",
      location: "",
      price: 0,
      terms: "",
      amenities: [],
      property_images: [],
    },
  });

  /** ✅ Normalize backend data into form shape */
  const normalizeProperty = (data: any): EditPropertyFormData => ({
    title: data?.title ?? "",
    description: data?.description ?? "",
    property_type: data?.property_type ?? "",
    listing_type: data?.listing_type ?? "",
    property_label: data?.property_label ?? "",
    size: Number(data?.size ?? 0),
    land_area: Number(data?.land_area ?? 0),
    property_id: data?.property_id ?? "",
    rooms: Number(data?.rooms ?? 0),
    bedrooms: Number(data?.bedrooms ?? 0),
    bathrooms: Number(data?.bathrooms ?? 0),
    garages: Number(data?.garages ?? 0),
    garage_size: Number(data?.garage_size ?? 0),
    year_built: Number(data?.year_built ?? 1900),
    address: data?.address ?? "",
    zip_code: data?.zip_code ?? "",
    city: data?.city ?? "",
    state: data?.state ?? "",
    location: data?.location ?? "",
    price: Number(data?.price ?? 0),
    terms: data?.terms ?? "",
    amenities: Array.isArray(data?.ameneties?.amenity_names)
      ? data.ameneties.amenity_names
      : typeof data?.ameneties?.amenity_names === "string"
      ? JSON.parse(data.ameneties.amenity_names)
      : [],
    property_images:
      Array.isArray(data?.property_images) ? data.property_images : [],
  });

  /** ✅ Load property into form when fetched */
  useEffect(() => {
    if (property) {
      reset(normalizeProperty(property));
    }
  }, [property, reset]);

  const formData = watch();

  /** ✅ Update form state dynamically */
  const onFormDataChange = (updatedData: EditPropertyFormData) => {
    (Object.keys(updatedData) as (keyof EditPropertyFormData)[]).forEach(
      (key) => {
        setValue(key, updatedData[key], { shouldValidate: true });
      }
    );
  };

  /** ✅ Submit edited data */
  const onSubmit = async (data: EditPropertyFormData) => {
    try {
      await handleEditProperty(data);
    } catch (err) {
      console.error("Edit property failed:", err);
    }
  };

  return (
    <div className="bg-aztec-light min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Property</h2>
        {isLoading ? (
          <div className="text-center py-10">Loading property...</div>
        ) : (
          <EditPropertyForm
            formData={formData}
            onFormDataChange={onFormDataChange}
            onSubmit={handleSubmit(onSubmit)}
            isSubmitting={isSubmitting}
            errors={{
              ...Object.fromEntries(
                Object.entries(errors).map(([key, val]) => [
                  key,
                  val?.message || "",
                ])
              ),
              ...apiErrors,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EditProperty;
