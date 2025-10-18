import React from "react";
import Hr from "@/components/ui/Divider/Hr";
import { getDefaultAvatar } from "@/helpers/appHelpers";
import { useAuth } from "@/providers/AuthProvider";
import Image from "@/components/ui/Images/Image";
import IconButton from "@/components/ui/Buttons/extensions/IconButton";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/constants/appRoutes";

const UserProfile: React.FC = () => {
  const { user, loading } = useAuth();
  const defaultAvatar = getDefaultAvatar(
    user ? `${user.first_name} ${user.last_name}` : "Guest"
  );

  const navigate = useNavigate();

  function handleEditClick() {
    navigate(APP_ROUTES.USER.EDIT_PROFILE); 
  }

  const previewImage = user?.profile_image || defaultAvatar;
  if (loading) return null;

return (
  <>
    <div className="relative bg-white p-4">
      <IconButton
        onClick={handleEditClick}
        label="Update"
        className="absolute top-4 right-4 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
        icon={<span className="icon-[mdi--pencil] text-gray-600 text-lg" />}
      />

      <div className="flex md:items-start items-center flex-col md:flex-row gap-6">
        <div className="relative md:!min-w-48 h-54">
          <Image
            src={previewImage}
            alt="profile"
            className="w-48 h-54 rounded-lg object-cover"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
          </h3>
          <p className="text-aztec flex items-center gap-1">
            <span className="icon-[fluent--location-16-regular] text-lg text-aztec"></span>
            {user?.address ?? "Address not added"}
          </p>
          <Hr />
          <div className="flex items-center gap-5">
            <span className="text-sm text-gray-400 w-16">Phone</span>
            <span className="text-base text-gray-800">
              {user?.mobile ?? "Not added"}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-sm text-gray-400 w-16">Email</span>
            <span className="text-base text-gray-800">
              {user?.email ?? "Not added"}
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
);

};

export default UserProfile;
