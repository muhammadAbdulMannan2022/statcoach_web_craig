import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Run immediately on route change
    handleScroll();

    // Also run on hashchange (e.g., manual URL edit)
    window.addEventListener("hashchange", handleScroll);
    return () => window.removeEventListener("hashchange", handleScroll);
  }, [pathname, hash]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
