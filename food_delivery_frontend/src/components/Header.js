import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * App header: shows name, cart badge, and a theme toggle.
 */
function Header({ theme, setTheme }) {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header" style={{ background: "#2563EB", color: "#fff" }}>
      <div
        role="button"
        tabIndex={0}
        className="header__brand"
        onClick={() => navigate("/")}
        onKeyDown={(e) => e.key === "Enter" && navigate("/")}
        aria-label="Food Delivery Home"
        style={{ fontWeight: 700, fontSize: "1.3rem", cursor: "pointer" }}
      >
        Ocean Delivery
      </div>
      <div style={{ flex: 1 }} />
      <button
        className="header__cart"
        aria-label="View cart"
        onClick={() => navigate("/cart")}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 20,
          position: "relative",
          cursor: "pointer",
          marginRight: 24,
        }}
        disabled={location.pathname === "/cart"}
      >
        <span aria-hidden="true" role="img">
          🛒
        </span>
        <span
          className="cart-badge"
          aria-label={`${getCartCount()} items in cart`}
          tabIndex={-1}
        >
          {getCartCount() ? (
            <span className="badge">{getCartCount()}</span>
          ) : null}
        </span>
      </button>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
        aria-label="Toggle dark/light mode"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
