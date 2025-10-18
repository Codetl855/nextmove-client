import bgImage from "../../assets/img/signin-bg.png";
import logo from "../../assets/img/logo.png";
import eyeIcon from "../../assets/icons/showpassword.png";
import tickIcon from "../../assets/icons/tick.png";

import { useState } from "react";
import Image from "../../components/ui/Images/Image";

function ChangePassword() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string | null>(null);

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);

    if (!validatePassword(newPassword)) {
      setErrors(
        "Password must be at least 8 characters long, include one capital letter, one number, and one special character."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrors("Passwords do not match.");
      return;
    }

    console.log("Password successfully validated:", newPassword);
  };

  return (
    <div
      className="h-full w-full relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-14" />
        </div>

        <form className="grid gap-2" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="newpassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <img
                src={eyeIcon}
                onClick={() => setShowNew(!showNew)}
                alt="Toggle"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 cursor-pointer"
              />
              <input
                type={showNew ? "text" : "password"}
                placeholder="********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aztec"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <img
                src={eyeIcon}
                onClick={() => setShowConfirm(!showConfirm)}
                alt="Toggle"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 cursor-pointer"
              />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aztec"
              />
            </div>
          </div>

          {/* Password requirements */}
          <div className="bg-[#F4F4F4] mt-2 p-2">
            <p className="font-bold text-aztec">Password Requirements</p>
            <div className="flex items-center">
              <img src={tickIcon} className="h-2" />
              <p className="text-sm text-[#949494] pl-2">
                Minimum 8 characters
              </p>
            </div>
            <div className="flex items-center">
              <img src={tickIcon} className="h-2" />
              <p className="text-sm text-[#949494] pl-2">
                At least 1 capital letter
              </p>
            </div>
            <div className="flex items-center">
              <img src={tickIcon} className="h-2" />
              <p className="text-sm text-[#949494] pl-2">
                At least 1 number
              </p>
            </div>
            <div className="flex items-center">
              <img src={tickIcon} className="h-2" />
              <p className="text-sm text-[#949494] pl-2">
                At least 1 special character (!@#$%^&*)
              </p>
            </div>
          </div>

          {errors && (
            <p className="text-red-500 text-sm mt-2">{errors}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-aztec text-white py-2 rounded-lg cursor-pointer transition mt-2"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
