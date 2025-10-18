import React, { useState, useEffect } from "react";
import Hr from "@/components/ui/Divider/Hr";
import { getDefaultAvatar } from "@/helpers/appHelpers";
import { useAuth } from "@/providers/AuthProvider";
import EditProfileForm, { EditProfileFormData } from "@/components/forms/EditProfileForm";
import { useUpdateProfile } from "@/hooks/user/useUpdateProfile";

const UserProfile: React.FC = () => {
  const { user, loading } = useAuth();
  const { handleUpdateProfile, isSubmitting, errors } = useUpdateProfile();

  const defaultAvatar = getDefaultAvatar(
    user ? `${user.first_name} ${user.last_name}` : "Guest"
  );

  const [formData, setFormData] = useState<EditProfileFormData>({
    mobile: user?.mobile || "",
    email: user?.email || "",
    address: user?.address || "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        mobile: user.mobile || "",
        email: user.email || "",
        address: user.address || "",
        password: "",
        password_confirmation: "",
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleUpdateProfile(formData);
  };

  if (loading) return null;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl max-w-8xl mx-auto font-semibold mb-6">Profile</h2>
      <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <div className="flex md:items-start items-center flex-col md:flex-row gap-6 pb-4">
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
            </h3>
            <p className="text-aztec flex items-center gap-1">
              <span className="icon-[fluent--location-16-regular] text-lg text-aztec"></span>
              {formData.address || "Address not added"}
            </p>
            <Hr />

            <EditProfileForm
              formData={formData}
              onFormDataChange={setFormData}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              defaultAvatar={defaultAvatar}
              userImage={user?.profile_image}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;