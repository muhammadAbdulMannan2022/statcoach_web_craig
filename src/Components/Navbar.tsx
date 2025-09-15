import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router"; // Ensure you're using react-router-dom

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash || "";
    setActive(hash);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const navItems = [
    { name: "Home", href: "" },
    { name: "Pricing", href: "pricing" },
    { name: "Privacy", href: "privacy" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white" style={{ height: 70 }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-foreground">
                <img
                  src="/logo.png"
                  alt="Alevio"
                  height={40}
                  width={120}
                  className="h-10 w-full"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                    active === item.href
                      ? "bg-light-green text-white"
                      : "text-text-primary hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => navigate("/auth/login")}
                className="inline-flex z-20 items-center justify-center rounded-full border-light-green border hover:cursor-pointer hover:bg-light-green hover:text-white transition-colors px-4 py-2 text-sm font-medium text-light-green"
              >
                Login
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition"
              aria-label="Open menu"
            >
              <FaBarsStaggered className="text-text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-white/50 backdrop-blur-xs"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-white/50 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col relative">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-mid-gray">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition absolute top-16 -left-10 bg-white border border-mid-gray border-r-0 rounded-s-full pe-4 w-10"
                aria-label="Close menu"
              >
                <ArrowRight className="text-text-primary" />
              </button>
              <img src="/logo.png" width={200} height={20} alt="" />
            </div>

            {/* Nav Items */}
            <div className="flex-1 px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={`/${item.href}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition ${
                      active === item.href
                        ? "text-light-green"
                        : "text-text-primary hover:text-text-notActive/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Button */}
            <div className="p-4 border-t border-mid-gray">
              <button
                onClick={() => {
                  setIsSidebarOpen(false);
                  navigate("/auth/login");
                }}
                className="w-full inline-flex items-center justify-center rounded-md bg-outer-button-bg px-4 py-2 text-sm font-medium text-light-green border border-light-green hover:bg-outer-button-bg/90 transition"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global smooth scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
