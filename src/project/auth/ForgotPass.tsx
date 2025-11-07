// ForgotPassword.tsx
import { MdMail } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Password reset requested for:", email);
      // Trigger email API
      navigate("/auth/otp", { state: { form: "forgot" } });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto py-8 md:py-0">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#313E54] mb-3 text-center">
        Forgot Password
      </h1>
      <p className="text-sm text-[#6E7787] text-center mb-8 max-w-xs mx-auto">
        Enter your email address and we’ll send you a link to reset your
        password.
      </p>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-[#6E7787] mb-2">
            Email
          </label>
          <div className="relative">
            <MdMail
              size={24}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#959AA6]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@mail.com"
              required
              className="w-full pl-12 pr-4 py-3 border border-[#ACC0D8] rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-[#2D8609]
                         focus:border-transparent bg-white text-gray-900 
                         placeholder-[#959AA6] h-14 shadow-xl shadow-[#959aa6]/20"
            />
          </div>
        </div>

        {/* Send Reset Link Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-lg font-semibold text-lg text-white
                     bg-gradient-to-b from-[#2D8609] to-[#1E5808]
                     hover:opacity-95 transition-opacity duration-200 shadow-lg hover:cursor-pointer"
        >
          Confirm
        </button>
      </form>

      {/* Back to Sign In */}
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
