import React from "react";
import Input from "@/components/ui/Inputs/Input";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";
import ImageUploader from "@/components/addProperty/ImageUploader";
import SelectAmeneties from "@/components/addProperty/SelectAmeneties";
import Button from "@/components/ui/Buttons/Button";
import Image from "@/components/ui/Images/Image";
import Map from "@/assets/img/map.png";

export interface CreatePropertyFormData {
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

interface CreatePropertyFormProps {
  formData: CreatePropertyFormData;
  onFormDataChange: (data: CreatePropertyFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  errors?: Partial<Record<keyof CreatePropertyFormData, string>>;
}

const CreatePropertyForm: React.FC<CreatePropertyFormProps> = ({
  formData,
  onFormDataChange,
  onSubmit,
  isSubmitting,
  errors = {},
}) => {
  const handleFieldChange = (
    field: keyof CreatePropertyFormData,
    value: any
  ) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  const handleImageChange = (files: File[]) => {
    handleFieldChange("property_images", files);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {/* Image Upload Section */}
      <ImageUploader onImagesChange={handleImageChange} />

      {/* Property Information */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-4">Information</h3>

        {/* Title */}
        <Input
          label="Title"
          placeholder="Enter property title"
          value={formData.title}
          onChange={(e) => handleFieldChange("title", e.target.value)}
          error={errors.title}
          className="w-full mb-4"
        />

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Enter property description"
            value={formData.description}
            onChange={(e) => handleFieldChange("description", e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-aztec"
          />
          {errors.description && (
            <p className="text-sm text-red-600 mt-1">
              {errors.description}
            </p>
          )}
        </div>

        {/* Property Meta */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="grid">
            <label>Property Type <span className="text-red-500">*</span></label>
            <CustomSelect
              value={formData.property_type}
              onChange={(val) => handleFieldChange("property_type", val)}
              options={["Select", "House", "Apartment", "Villa"]}
              className="!bg-white text-gray-500"
              error ={errors.property_type}
            />
          </div>
          <div className="grid">
            <label>Property Status <span className="text-red-500">*</span></label>
            <CustomSelect
              value={formData.listing_type}
              onChange={(val) => handleFieldChange("listing_type", val)}
              options={["Select", "For Sale", "For Rent"]}
              className="!bg-white text-gray-500"
              error ={errors.listing_type}
            />
          </div>
          <div className="grid">
            <label>Property Label</label>
            <CustomSelect
              value={formData.property_label}
              onChange={(val) => handleFieldChange("property_label", val)}
              options={["Select", "Featured", "New", "Hot"]}
              className="!bg-white text-gray-500"
              error={errors.property_label}
            />
          </div>
          <Input
            label="Size (sq ft)"
            type="number"
            placeholder="Enter"
            value={formData.size}
            onChange={(e) => handleFieldChange("size", e.target.value)}
            className="w-full"
            required={true}
            error={errors.size}
          />
        </div>

        {/* More Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Input
            label="Land Area (SqFt)"
            type="number"
            placeholder="Enter"
            value={formData.land_area}
            onChange={(e) => handleFieldChange("land_area", e.target.value)}
            required={true}
            error={errors.land_area}
          />
          <Input
            label="Property ID"
            placeholder="Enter"
            value={formData.property_id}
            onChange={(e) => handleFieldChange("property_id", e.target.value)}
            error={errors.property_id}
          />
          <Input
            label="Rooms"
            type="number"
            placeholder="Enter"
            value={formData.rooms}
            onChange={(e) => handleFieldChange("rooms", e.target.value)}
            error={errors.rooms}
          />
          <Input
            label="Bedrooms"
            type="number"
            placeholder="Enter"
            value={formData.bedrooms}
            onChange={(e) => handleFieldChange("bedrooms", e.target.value)}
            error={errors.bedrooms}
          />
        </div>

        {/* Bathrooms, Garages, etc */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Input
            label="Bathrooms"
            type="number"
            placeholder="Enter"
            value={formData.bathrooms}
            onChange={(e) => handleFieldChange("bathrooms", e.target.value)}
            error={errors.bathrooms}
          />
          <Input
            label="Garages"
            type="number"
            placeholder="Enter"
            value={formData.garages}
            onChange={(e) => handleFieldChange("garages", e.target.value)}
            error={errors.garages}
          />
          <Input
            label="Garage Size"
            type="number"
            placeholder="Enter"
            value={formData.garage_size}
            onChange={(e) => handleFieldChange("garage_size", e.target.value)}
          />
          <Input
            label="Year Built"
            type="number"
            placeholder="Enter"
            value={formData.year_built}
            onChange={(e) => handleFieldChange("year_built", e.target.value)}
            error={errors.year_built}
          />
        </div>

        {/* Address Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Input
            label="Full Address"
            placeholder="Enter"
            value={formData.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
            required={true}
            error={errors.address}
          />
          <Input
            label="Zip Code"
            placeholder="Enter"
            value={formData.zip_code}
            onChange={(e) => handleFieldChange("zip_code", e.target.value)}
            error={errors.zip_code}
          />
          <Input
            label="City"
            placeholder="Enter"
            value={formData.city}
            onChange={(e) => handleFieldChange("city", e.target.value)}
            required={true}
            error={errors.city}  
          />
          <div className="grid">
            <label>State</label>
            <CustomSelect
              value={formData.state}
              onChange={(val) => handleFieldChange("state", val)}
              options={["Select", "NY", "CA", "TX"]}
              className="!bg-white text-gray-500"
              error={errors.state}
            />
          </div>
        </div>

        {/* Location */}
        <Input
          label="Location"
          placeholder="Enter"
          value={formData.location}
          onChange={(e) => handleFieldChange("location", e.target.value)}
          rightElement={
            <span className="icon-[ic--round-my-location] text-gray-400 mr-1 cursor-pointer" />
          }
          outerClassName="w-full"
          required={true}
          error={errors.location}
        />

        {/* Map Preview */}
        {/* <Image
          src={Map}
          alt="map"
          className="w-full mt-4 max-h-[480px] !object-fill rounded-lg"
        /> */}
      </div>

      {/* Price & Terms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl">
          <Input
            label="Price"
            type="number"
            placeholder="Enter price"
            value={formData.price}
            onChange={(e) => handleFieldChange("price", e.target.value)}
            required={true}
            error={errors.price}
          />
        </div>
        <div className="md:col-span-2 p-4 bg-white rounded-xl">
          <Input
            label="Terms & Rules"
            placeholder="Enter terms"
            value={formData.terms}
            onChange={(e) => handleFieldChange("terms", e.target.value)}
            error={errors.terms}
          />
        </div>
      </div>

      {/* Amenities */}
      <SelectAmeneties
        selectedAmenities={formData.amenities}
        onChange={(newAmenities) => handleFieldChange("amenities", [...newAmenities])}
      />


      {/* Submit Button */} 
      <div className="flex justify-end gap-3 mt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-6 h-[48px] rounded-lg bg-aztec text-white font-medium hover:bg-aztec/90"
        >
          {isSubmitting ? "Submitting..." : "Submit Property"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePropertyForm;
