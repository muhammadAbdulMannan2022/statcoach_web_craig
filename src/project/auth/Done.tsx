// PasswordSuccess.tsx
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="w-full max-w-md mx-auto py-8 md:py-0 text-center">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>

      {/* Main Message */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#313E54] mb-3">
        "Password changed Successfully
        <br />
        Start Using Now!"
      </h1>

      {/* Download Card */}
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
        <h2 className="text-lg md:text-xl font-semibold text-[#313E54] mb-6">
          Click To Download Now
        </h2>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.statcoachlive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition-colors shadow-md"
          >
            <img src="/playstore.svg" alt="Play Store" className="w-7 h-7" />
            <div className="text-left">
              <div className="text-xs font-light">GET IT ON</div>
              <div className="text-sm md:text-base font-medium">
                Google Play
              </div>
            </div>
          </a>

          {/* App Store */}
          <a
            href="https://apps.apple.com/app/statcoachlive/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition-colors shadow-md"
          >
            <img src="/appstore.svg" alt="Play Store" className="w-7 h-7" />
            <div className="text-left">
              <div className="text-xs font-light">Download on the</div>
              <div className="text-sm md:text-base font-medium">App Store</div>
            </div>
          </a>
        </div>

        {/* Email Info */}
        <p className="mt-6 text-xs md:text-sm text-[#6E7787] leading-relaxed">
          Statcoachlive app download link has been sent to your email. Please
          check and start using statcoachlive
        </p>
      </div>
    </div>
  );
}
