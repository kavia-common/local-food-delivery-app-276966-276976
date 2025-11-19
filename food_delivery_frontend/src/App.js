import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantMenuPage from "./pages/RestaurantMenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Root of the app, includes global theming, layout, and page routing
 */
function App() {
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const navigate = useNavigate();

  // Respect user reduce motion preference
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Reset to home on unknown routes
  useEffect(() => {
    if (
      !["/", "/cart", "/checkout", "/confirmation"].some((r) =>
        location.pathname.startsWith(r)
      ) &&
      !/^\/restaurant\/\w+/.test(location.pathname)
    ) {
      navigate("/");
    }
  }, [location, navigate]);

  // Skip-to-content handler (puts focus on main)
  const handleSkip = (e) => {
    e.preventDefault();
    const main = document.getElementById("main-content");
    if (main) {
      main.tabIndex = -1;
      main.focus();
      setTimeout(() => {
        main.removeAttribute("tabIndex");
      }, 400);
    }
  };

  return (
    <div className="App">
      {/* Skip to main content link, shown on focus */}
      <a
        href="#main-content"
        className="skip-link"
        tabIndex={0}
        onClick={handleSkip}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleSkip(e)}
      >
        Skip to main content
      </a>
      <Header theme={theme} setTheme={setTheme} />
      <main
        id="main-content"
        className="main-content"
        aria-live="polite"
        tabIndex={-1}
        role="main"
      >
        <Routes>
          <Route path="/" element={<RestaurantListPage />} />
          <Route path="/restaurant/:id" element={<RestaurantMenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
