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

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <main className="main-content" aria-live="polite">
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
