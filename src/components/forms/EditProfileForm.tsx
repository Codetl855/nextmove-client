import React, { useRef, useState } from "react";
import Input from "@/components/ui/Inputs/Input";
import Image from "@/components/ui/Images/Image";
import IconButton from "@/components/ui/Buttons/extensions/IconButton";
import PasswordInput from "@/components/ui/Inputs/extensions/PasswordInput";
import Button from "@/components/ui/Buttons/Button";

export interface EditProfileFormData {
  mobile: string;
  email: string;
  address: string;
  password: string;
  password_confirmation: string;
  profile_image?: File;
}

interface EditProfileFormProps {
  formData: EditProfileFormData;
  onFormDataChange: (data: EditProfileFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  defaultAvatar: string;
  userImage?: string | null;
  errors?: Partial<Record<keyof EditProfileFormData, string>>;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  formData,
  onFormDataChange,
  onSubmit,
  isSubmitting,
  defaultAvatar,
  userImage,
  errors = {}
}) => {
  const [previewImage, setPreviewImage] = useState<string>(
    userImage || defaultAvatar
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) return alert("Please select an image file.");
      if (file.size > 2 * 1024 * 1024) return alert("Image must be less than 2MB.");
      setPreviewImage(URL.createObjectURL(file));
      onFormDataChange({ ...formData, profile_image: file });
    }
  };

  const handleFieldChange = (field: keyof EditProfileFormData, value: any) =>
    onFormDataChange({ ...formData, [field]: value });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image Section */}
        <div className="relative md:!min-w-48 h-54">
          <Image
            src={previewImage}
            alt="profile"
            className="w-48 h-54 rounded-lg object-cover"
            fallbackSrc="/images/placeholder.png"
          />

          <IconButton
            onClick={handleEditClick}
            label="Update"
            className="absolute top-2 right-2"
            icon={<span className="icon-[mdi--pencil] text-gray-600 text-lg" />}
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Form Fields */}
        <div className="flex flex-col md:flex-row gap-2 w-full">
          {/* Left */}
          <div className="flex flex-col gap-2 md:w-1/2">
            <Input
              type="text"
              value={formData.mobile}
              onChange={(e) => handleFieldChange("mobile", e.target.value)}
              placeholder="Enter phone"
              error={errors.mobile}
              className="w-full"
            />
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              placeholder="Enter email"
              error={errors.email}
              className="w-full"
            />
            <Input
              type="text"
              value={formData.address}
              onChange={(e) => handleFieldChange("address", e.target.value)}
              placeholder="Enter address"
              error={errors.address}
              className="w-full"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 md:w-1/2">
            <PasswordInput
              name="password"
              value={formData.password}
              onChange={(e) => handleFieldChange("password", e.target.value)}
              placeholder="Enter new password"
              error={errors.password}
              className="w-full"
            />

            <PasswordInput
              name="confirmPassword"
              value={formData.password_confirmation}
              onChange={(e) => handleFieldChange("password_confirmation", e.target.value)}
              placeholder="Confirm password"
              error={errors.password_confirmation}
              className="w-full"
            />
          </div>

          <div className="flex flex-col justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="px-6 h-[48px] rounded-lg bg-aztec text-white font-medium  hover:bg-aztec/90"
            >
              {isSubmitting ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;