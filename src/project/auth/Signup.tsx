// Login.tsx (Sign Up Page)
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link, useNavigate } from "react-router";

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
        className="w-full pl-12 pr-10 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-green-600
                   focus:border-transparent text-lg bg-white text-gray-900 
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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword });
    navigate("/auth/otp");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Welcome */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#313E54] mb-6 md:mb-10 text-center">
        Welcome
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
              className="w-full pl-12 pr-4 py-2 border border-[#ACC0D8] rounded-lg
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
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder="Password"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-[#6E7787] mb-2">
            Confirm Password
          </label>
          <PasswordInput
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Password"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-8 bg-gradient-to-b from-[#2D8609] to-[#1E5808] 
                     text-white font-semibold py-4 rounded-lg text-lg 
                     hover:opacity-95 transition-opacity duration-200 hover:cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      {/* Sign In Link */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-[#1F5E06] hover:text-[#287709] font-medium border p-2 rounded-md border-[#1F5E06]"
        >
          Log in
        </Link>
      </div>

      {/* Divider */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">Or sign up with</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Google Button */}
      <button
        type="button"
        className="w-full mt-4 border border-[#2A7D08] hover:bg-gray-50 
                   text-gray-700 font-medium py-3 rounded-lg transition-colors 
                   duration-200 flex items-center justify-center gap-2 hover:cursor-pointer"
      >
        <img src="/google.svg" alt="Google" className="w-6 h-6" />
        Google
      </button>
    </div>
  );
}
