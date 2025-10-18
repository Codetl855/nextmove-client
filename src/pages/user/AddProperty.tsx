import React from "react";
import CreatePropertyForm, {
  CreatePropertyFormData,
} from "@/components/forms/Property/CreatePropertyForm";
import { useCreateProperty } from "@/hooks/property/useCreateProperty";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPropertySchema, AddPropertyFormData } from "@/validation/property/addPropertyschema";

const AddProperty: React.FC = () => {
  const { handleCreateProperty, isSubmitting, errors: apiErrors } = useCreateProperty();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AddPropertyFormData>({
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
      is_featured: false,
      is_active: true,
    },
  });

  const formData = watch();

  // Sync form changes (for controlled components)
  const onFormDataChange = (data: CreatePropertyFormData) => {
    (Object.keys(data) as (keyof CreatePropertyFormData)[]).forEach((key) => {
      setValue(key, data[key], { shouldValidate: true });
    });
  };

  // ✅ Form submit
  const onSubmit = async (data: AddPropertyFormData) => {
    try {
      await handleCreateProperty(data);
    } catch (err) {
      console.error("Create property failed:", err);
    }
  };

  return (
    <div className="bg-aztec-light min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add Property</h2>
        <CreatePropertyForm
          formData={formData}
          onFormDataChange={onFormDataChange}
          onSubmit={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
          errors={{
            // Combine local (Yup) errors + API backend errors
            ...Object.fromEntries(
              Object.entries(errors).map(([key, val]) => [key, val?.message])
            ),
            ...apiErrors,
          }}
        />
      </div>
    </div>
  );
};

export default AddProperty;
