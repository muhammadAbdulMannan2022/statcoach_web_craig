// ChangePassword.tsx
import { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";

type PasswordInputProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

function PasswordInput({ value, onChange, placeholder }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <IoLockClosed
        size={24}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#959AA6]"
      />
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3 border border-[#ACC0D8] rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-[#2D8609]
                   focus:border-transparent bg-white text-gray-900 
                   placeholder-[#959AA6] h-14 shadow-xl shadow-[#959aa6]/20"
      />
      {hasValue && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#959AA6] hover:text-gray-700"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
}

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const passwordsMatch =
    newPassword === confirmPassword && newPassword.length > 0;
  const canSubmit = passwordsMatch && !submitted;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setSubmitted(true);
      console.log("Password changed successfully");
      // Call API to update password
      setTimeout(() => {
        // Redirect or show success
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto py-8 md:py-0">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#313E54] mb-3 text-center">
        Change Password
      </h1>
      <p className="text-sm text-[#6E7787] text-center mb-8 max-w-xs mx-auto">
        Enter a new password for your account.
      </p>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-[#6E7787] mb-2">
            New Password
          </label>
          <PasswordInput
            value={newPassword}
            onChange={setNewPassword}
            placeholder="Enter new password"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-[#6E7787] mb-2">
            Confirm New Password
          </label>
          <PasswordInput
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Confirm new password"
          />
          {/* Match Feedback */}
          {confirmPassword && (
            <p
              className={`text-sm mt-2 ${
                passwordsMatch ? "text-green-600" : "text-red-600"
              }`}
            >
              {passwordsMatch ? "Passwords match" : "Passwords do not match"}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!canSubmit}
          className={`w-full py-4 rounded-lg font-semibold text-lg text-white transition-all
                     bg-gradient-to-b from-[#2D8609] to-[#1E5808]
                     hover:opacity-90 shadow-lg
                     disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer`}
        >
          {submitted ? "Changing..." : "Change Password"}
        </button>
      </form>

      {/* Back to Login */}
      <div className="mt-6 flex justify-center">
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1F5E06] hover:text-[#287909] transition-colors"
        >
          <FaArrowLeft className="text-base" />
          <span>Back to Sign In</span>
        </Link>
      </div>
    </div>
  );
}
