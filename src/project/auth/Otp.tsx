//@ts-nocheck
import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function OTPVerification() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const state = useLocation().state;
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 4).split("");
    if (pasted.every((char) => /^\d$/.test(char))) {
      setOtp(pasted);
      inputsRef.current[Math.min(pasted.length, 3)]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 4) {
      console.log("OTP Submitted:", code);
      // Submit to backend
      if (state?.form === "forgot") {
        navigate("/auth/change_pass");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto py-5 md:py-0">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#313E54] mb-3">
          We have sent you an {state?.form ? "reset code" : "activation code"}.
        </h1>
        <p className="text-sm text-[#6E7787] max-w-xs mx-auto">
          A mail has been sent to your email address containing a code to verify
          your email.
        </p>
      </div>

      {/* OTP Title */}
      <p className="text-center text-lg font-medium text-[#313E54] mb-6">
        Enter verification code
      </p>

      {/* OTP Inputs */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-center gap-3 md:gap-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              onPaste={handlePaste}
              className={`w-14 h-14 md:w-16 md:h-16 text-center text-2xl font-semibold
                         border rounded-full focus:outline-none focus:ring-2 
                         focus:ring-[#2D8609] focus:border-transparent
                         bg-white text-[#313E54] placeholder-[#959AA6]
                         shadow-xl shadow-[#959aa6]/20
                         ${digit ? "border-[#2D8609]" : "border-[#ACC0D8]"}`}
              placeholder="*"
            />
          ))}
        </div>

        {/* Resend Link */}
        <p className="text-center text-sm text-[#6E7787]">
          If you didn’t receive a code{" "}
          <Link
            to="#"
            className="text-green-600 hover:text-green-700 font-medium underline"
          >
            click here
          </Link>
          .
        </p>

        {/* Confirm Button */}
        <button
          type="submit"
          disabled={otp.some((d) => !d)}
          className={`w-full py-4 rounded-lg font-semibold text-lg text-white transition-all duration-200
                     bg-gradient-to-b from-[#2D8609] to-[#1E5808]
                     hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
