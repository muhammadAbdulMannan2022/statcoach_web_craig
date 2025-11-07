// Login.tsx
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const hasPassword = password.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    navigate("/auth/done");
  };

  return (
    <div className="w-full max-w-md mx-auto py-8 md:py-0">
      {/* Welcome */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#313E54] mb-8 text-center">
        Welcome back
      </h1>

      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Email */}
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
              className="w-full pl-12 pr-4 py-3 border border-[#ACC0D8] rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-[#2D8609]
                         focus:border-transparent bg-white text-gray-900 
                         placeholder-[#959AA6] h-14 shadow-xl shadow-[#959aa6]/20"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-[#6E7787] mb-2">
            Password
          </label>
          <div className="relative">
            <IoLockClosed
              size={24}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#959AA6]"
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-10 py-3 border border-[#ACC0D8] rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-[#2D8609]
                         focus:border-transparent bg-white text-gray-900 
                         placeholder-[#959AA6] h-14 shadow-xl shadow-[#959aa6]/20"
            />
            {hasPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#959AA6] hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            to="/auth/forgot_pass"
            className="text-sm text-[#1F5E06] hover:text-[#267208] font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-lg font-semibold text-lg text-white
                     bg-gradient-to-b from-[#2D8609] to-[#1E5808]
                     hover:opacity-90 transition-opacity duration-200 shadow-lg hover:cursor-pointer"
        >
          Sign In
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="mt-6 text-center text-sm text-[#6E7787]">
        Don’t have account?{" "}
        <Link
          to="/auth"
          className="text-[#1F5E06] hover:text-[#287709] font-medium border p-2 rounded-md border-[#1F5E06]"
        >
          Sign Up
        </Link>
      </p>

      {/* Divider */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">Or sign in with</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Google Button */}
      <button
        type="button"
        className="w-full mt-4 border border-gray-300 hover:bg-gray-50 
                   text-gray-700 font-medium py-3 rounded-lg transition-colors 
                   duration-200 flex items-center justify-center gap-2 shadow hover:cursor-pointer"
      >
        <img src="/google.svg" alt="Google" className="w-5 h-5" />
        Google
      </button>
    </div>
  );
}
