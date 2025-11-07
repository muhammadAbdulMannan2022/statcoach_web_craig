// Layout.tsx
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col items-center md:flex-row min-h-screen bg-[#f8fafc] overflow-y-auto">
      {/* Left Panel - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-between p-8 lg:p-12 h-full gap-10">
        {/* Logo */}
        <div>
          <img src="/logo.svg" alt="Logo" className="h-auto max-h-20" />
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/auth.svg"
            alt="Auth illustration"
            className="w-full max-w-xs lg:max-w-md aspect-square object-contain"
          />
        </div>

        {/* Description */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[#364056] text-sm lg:text-base leading-relaxed">
            Empowering hotels and restaurants with AI-driven solutions to
            enhance guest experiences and streamline digital services. Sign in
            to manage your business and connect with customers effortlessly.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-5 w-full md:p-8 lg:p-12">
        <Outlet />
      </div>
    </div>
  );
}
